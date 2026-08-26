import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

// MongoDB connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'emergent_logic';
const mongoConnectTimeoutMs = 4000;
const contactPersistenceTimeoutMs = 6000;

let client = null;
let db = null;

async function getDb() {
  if (db) {
    return db;
  }

  if (!mongoUrl) {
    throw new Error('MONGO_URL is not configured');
  }

  const nextClient = new MongoClient(mongoUrl, {
    connectTimeoutMS: mongoConnectTimeoutMs,
    serverSelectionTimeoutMS: mongoConnectTimeoutMs,
    socketTimeoutMS: contactPersistenceTimeoutMs,
    maxPoolSize: 5,
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await nextClient.connect();
    client = nextClient;
    db = client.db(dbName);
    return db;
  } catch (error) {
    db = null;
    client = null;
    await nextClient.close().catch(() => {});
    throw error;
  }
}

// Admin credentials (in production, store hashed in DB)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

function verifyAdmin(request) {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
    return null;
  }

  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return null;
  }
  
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return username;
  }
  return null;
}

function unauthorizedResponse() {
  return NextResponse.json(
    { detail: 'Invalid credentials' },
    { 
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' }
    }
  );
}

// CORS headers
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': process.env.CORS_ORIGINS || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

async function withTimeout(promise, ms, label) {
  let timeout;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timeout = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
      })
    ]);
  } finally {
    clearTimeout(timeout);
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function GET(request, { params }) {
  const { path = [] } = await params;
  const pathString = path.join('/');
  
  try {
    // Root endpoint
    if (pathString === '' || pathString === '/') {
      return NextResponse.json(
        { message: 'Emergent Logic API - AI-Powered Digital Solutions' },
        { headers: corsHeaders() }
      );
    }
    
    // GET /api/status
    if (pathString === 'status') {
      const database = await getDb();
      const statusChecks = await database.collection('status_checks')
        .find({}, { projection: { _id: 0 } })
        .limit(100)
        .toArray();
      return NextResponse.json(statusChecks, { headers: corsHeaders() });
    }
    
    // GET /api/contact — DISABLED (public exposure of stored submissions)
    // Retrieval requires admin auth via GET /api/admin/contacts
    if (pathString === 'contact') {
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404, headers: corsHeaders() }
      );
    }
    
    // GET /api/admin/verify
    if (pathString === 'admin/verify') {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      return NextResponse.json(
        { authenticated: true, username },
        { headers: corsHeaders() }
      );
    }
    
    // GET /api/admin/contacts
    if (pathString === 'admin/contacts') {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      try {
        const submissions = await withTimeout(
          (async () => {
            const database = await getDb();
            return database.collection('contact_submissions')
              .find({}, { projection: { _id: 0 } })
              .sort({ created_at: -1 })
              .limit(500)
              .toArray();
          })(),
          contactPersistenceTimeoutMs,
          'Contact storage read'
        );
        return NextResponse.json(submissions, { headers: corsHeaders() });
      } catch (storageError) {
        console.error('Contact storage read failed:', storageError);
        return NextResponse.json(
          {
            error: 'Contact storage is temporarily unavailable',
            code: 'CONTACT_STORE_UNAVAILABLE',
          },
          { status: 503, headers: corsHeaders() }
        );
      }
    }
    
    // GET /api/admin/content/{page}
    if (pathString.startsWith('admin/content/')) {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const page = pathString.replace('admin/content/', '');
      const database = await getDb();
      const content = await database.collection('page_content')
        .find({ page }, { projection: { _id: 0 } })
        .limit(100)
        .toArray();
      return NextResponse.json(content, { headers: corsHeaders() });
    }
    
    // GET /api/content/{page} - Public endpoint
    if (pathString.startsWith('content/')) {
      const page = pathString.replace('content/', '');
      const database = await getDb();
      const content = await database.collection('page_content')
        .find({ page }, { projection: { _id: 0 } })
        .limit(100)
        .toArray();
      return NextResponse.json(content, { headers: corsHeaders() });
    }
    
    return NextResponse.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders() }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function POST(request, { params }) {
  const { path = [] } = await params;
  const pathString = path.join('/');
  
  try {
    const body = await request.json();
    
    // POST /api/status
    if (pathString === 'status') {
      const database = await getDb();
      const statusCheck = {
        id: uuidv4(),
        client_name: body.client_name,
        timestamp: new Date().toISOString()
      };
      await database.collection('status_checks').insertOne(statusCheck);
      const { _id, ...sanitized } = statusCheck;
      return NextResponse.json(sanitized, { status: 201, headers: corsHeaders() });
    }
    
    // POST /api/contact — server-side validation, honeypot, n8n forward, GA4 fires only on 2xx
    if (pathString === 'contact') {
      const contactStartedAt = Date.now();

      // 1) Honeypot — silently accept and discard bot submissions
      // Field names: "website" (legacy) or "hp_field" (current). If filled, treat as bot.
      if ((body.website && body.website.trim() !== '') || (body.hp_field && body.hp_field.trim() !== '')) {
        console.log(JSON.stringify({
          level: 'info',
          msg: 'contact_submission',
          route: '/api/contact',
          outcome: 'bot_discarded',
          ms: Date.now() - contactStartedAt,
        }));
        // Return success-looking response to avoid signaling honeypot trip to bots
        return NextResponse.json(
          { id: uuidv4(), accepted: true },
          { status: 201, headers: corsHeaders() }
        );
      }

      // 2) Required field + format validation
      const firstName = (body.first_name || '').toString().trim();
      const lastName = (body.last_name || '').toString().trim();
      const email = (body.email || '').toString().trim();
      const phone = (body.phone || '').toString().trim();
      const message = (body.message || '').toString().trim();
      const cleanCampaignValue = (value) => String(value || '')
        .replace(/[\u0000-\u001F\u007F]/g, '')
        .trim()
        .slice(0, 160);
      const landingPageCandidate = String(body.landing_page || '').trim();
      const attribution = {
        utm_source: cleanCampaignValue(body.utm_source),
        utm_medium: cleanCampaignValue(body.utm_medium),
        utm_campaign: cleanCampaignValue(body.utm_campaign),
        utm_content: cleanCampaignValue(body.utm_content),
        utm_term: cleanCampaignValue(body.utm_term),
        gclid: cleanCampaignValue(body.gclid),
        gbraid: cleanCampaignValue(body.gbraid),
        wbraid: cleanCampaignValue(body.wbraid),
        landing_page: landingPageCandidate.startsWith('/')
          ? landingPageCandidate.replace(/[\u0000-\u001F\u007F]/g, '').slice(0, 200)
          : '',
      };

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errors = [];
      if (!firstName || firstName.length > 100) errors.push('first_name');
      if (!lastName || lastName.length > 100) errors.push('last_name');
      if (!email || !emailRe.test(email) || email.length > 200) errors.push('email');
      if (phone && phone.length > 50) errors.push('phone');
      if (message.length > 5000) errors.push('message');

      if (errors.length > 0) {
        console.warn(JSON.stringify({
          level: 'warning',
          msg: 'contact_submission',
          route: '/api/contact',
          outcome: 'validation_rejected',
          invalid_field_count: errors.length,
          ms: Date.now() - contactStartedAt,
        }));
        return NextResponse.json(
          { error: 'Validation failed', fields: errors },
          { status: 400, headers: corsHeaders() }
        );
      }

      // 3) Persist locally as backup (admin-only retrieval going forward)
      const contactSubmission = {
        id: uuidv4(),
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
        source: 'website_contact_form',
        ...attribution,
        created_at: new Date().toISOString()
      };
      // 4) Forward to n8n -> HubSpot and write the admin backup in parallel.
      // Either destination can accept the lead, while neither blocks the other.
      const n8nUrl = process.env.N8N_CONTACT_WEBHOOK_URL_V2
        || 'https://emergent-logic.app.n8n.cloud/webhook/contact-form-v2';
      const forwardToN8n = async () => {
        if (!n8nUrl) return false;

        let timeout;
        try {
          const forwardHeaders = { 'Content-Type': 'application/json' };
          if (process.env.N8N_WEBHOOK_TOKEN) {
            forwardHeaders.Authorization = `Bearer ${process.env.N8N_WEBHOOK_TOKEN}`;
          }
          const controller = new AbortController();
          timeout = setTimeout(() => controller.abort(), 5000);
          const n8nRes = await fetch(n8nUrl, {
            method: 'POST',
            headers: forwardHeaders,
            body: JSON.stringify(contactSubmission),
            signal: controller.signal,
          });
          if (!n8nRes.ok) {
            console.error('n8n forward non-2xx:', n8nRes.status);
            return false;
          }
          return true;
        } catch (n8nErr) {
          console.error('n8n forward error:', n8nErr.message);
          return false;
        } finally {
          clearTimeout(timeout);
        }
      };

      const persistLocally = async () => {
        try {
          await withTimeout(
            (async () => {
              const database = await getDb();
              await database.collection('contact_submissions').insertOne(contactSubmission);
            })(),
            contactPersistenceTimeoutMs,
            'Local contact persistence'
          );
          return true;
        } catch (mongoErr) {
          console.error('Local contact persistence failed:', mongoErr);
          return false;
        }
      };

      const [forwardedToN8n, persistedLocally] = await Promise.all([
        forwardToN8n(),
        persistLocally(),
      ]);

      if (!persistedLocally && !forwardedToN8n) {
        console.error(JSON.stringify({
          level: 'error',
          msg: 'contact_submission',
          route: '/api/contact',
          outcome: 'destination_unavailable',
          ms: Date.now() - contactStartedAt,
        }));
        return NextResponse.json(
          { error: 'Submission temporarily unavailable. Please try again shortly.' },
          { status: 503, headers: corsHeaders() }
        );
      }

      console.log(JSON.stringify({
        level: 'info',
        msg: 'contact_submission',
        route: '/api/contact',
        outcome: 'accepted',
        crm_forwarded: forwardedToN8n,
        backup_persisted: persistedLocally,
        ms: Date.now() - contactStartedAt,
      }));

      const { _id, ...sanitized } = contactSubmission;
      return NextResponse.json(sanitized, { status: 201, headers: corsHeaders() });
    }
    
    // POST /api/admin/content
    if (pathString === 'admin/content') {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const { page, section, content } = body;
      const database = await getDb();
      const existing = await database.collection('page_content').findOne({ page, section });
      
      const doc = {
        page,
        section,
        content,
        updated_at: new Date().toISOString()
      };
      
      if (existing) {
        await database.collection('page_content').updateOne(
          { page, section },
          { $set: doc }
        );
      } else {
        doc.id = uuidv4();
        await database.collection('page_content').insertOne(doc);
      }
      
      return NextResponse.json(
        { success: true, page, section },
        { headers: corsHeaders() }
      );
    }
    
    return NextResponse.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders() }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function DELETE(request, { params }) {
  const { path = [] } = await params;
  const pathString = path.join('/');
  
  try {
    // DELETE /api/admin/contacts/{contact_id}
    if (pathString.startsWith('admin/contacts/')) {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const contactId = pathString.replace('admin/contacts/', '');
      const database = await getDb();
      const result = await database.collection('contact_submissions').deleteOne({ id: contactId });
      
      if (result.deletedCount === 0) {
        return NextResponse.json(
          { error: 'Contact not found' },
          { status: 404, headers: corsHeaders() }
        );
      }
      
      return NextResponse.json(
        { deleted: true, id: contactId },
        { headers: corsHeaders() }
      );
    }
    
    return NextResponse.json(
      { error: 'Not found' },
      { status: 404, headers: corsHeaders() }
    );
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}
