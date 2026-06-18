import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

// MongoDB connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || 'emergent_logic';

let client = null;
let db = null;

async function getDb() {
  if (!client) {
    client = new MongoClient(mongoUrl, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.connect();
    db = client.db(dbName);
  }
  return db;
}

// Admin credentials (in production, store hashed in DB)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'emergent2026';

function verifyAdmin(request) {
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

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function GET(request, { params }) {
  const path = params?.path || [];
  const pathString = path.join('/');
  
  try {
    const database = await getDb();
    
    // Root endpoint
    if (pathString === '' || pathString === '/') {
      return NextResponse.json(
        { message: 'Emergent Logic API - AI-Powered Digital Solutions' },
        { headers: corsHeaders() }
      );
    }
    
    // GET /api/status
    if (pathString === 'status') {
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
      
      const submissions = await database.collection('contact_submissions')
        .find({}, { projection: { _id: 0 } })
        .sort({ created_at: -1 })
        .limit(500)
        .toArray();
      return NextResponse.json(submissions, { headers: corsHeaders() });
    }
    
    // GET /api/admin/content/{page}
    if (pathString.startsWith('admin/content/')) {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const page = pathString.replace('admin/content/', '');
      const content = await database.collection('page_content')
        .find({ page }, { projection: { _id: 0 } })
        .limit(100)
        .toArray();
      return NextResponse.json(content, { headers: corsHeaders() });
    }
    
    // GET /api/content/{page} - Public endpoint
    if (pathString.startsWith('content/')) {
      const page = pathString.replace('content/', '');
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
      { error: 'Internal server error', details: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function POST(request, { params }) {
  const path = params?.path || [];
  const pathString = path.join('/');
  
  try {
    const database = await getDb();
    const body = await request.json();
    
    // POST /api/status
    if (pathString === 'status') {
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
      // 1) Honeypot — silently accept and discard bot submissions
      // Field names: "website" (legacy) or "hp_field" (current). If filled, treat as bot.
      if ((body.website && body.website.trim() !== '') || (body.hp_field && body.hp_field.trim() !== '')) {
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

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errors = [];
      if (!firstName || firstName.length > 100) errors.push('first_name');
      if (!lastName || lastName.length > 100) errors.push('last_name');
      if (!email || !emailRe.test(email) || email.length > 200) errors.push('email');
      if (phone && phone.length > 50) errors.push('phone');
      if (message.length > 5000) errors.push('message');

      if (errors.length > 0) {
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
        created_at: new Date().toISOString()
      };
      await database.collection('contact_submissions').insertOne(contactSubmission);

      // 4) Server-to-server forward to n8n -> HubSpot (env-gated)
      const n8nUrl = process.env.N8N_CONTACT_WEBHOOK_URL;
      if (n8nUrl) {
        try {
          const forwardHeaders = { 'Content-Type': 'application/json' };
          if (process.env.N8N_WEBHOOK_TOKEN) {
            forwardHeaders['Authorization'] = `Bearer ${process.env.N8N_WEBHOOK_TOKEN}`;
          }
          // Fire-and-forget but await briefly so we can capture failure
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 5000);
          const n8nRes = await fetch(n8nUrl, {
            method: 'POST',
            headers: forwardHeaders,
            body: JSON.stringify(contactSubmission),
            signal: controller.signal,
          });
          clearTimeout(timeout);
          if (!n8nRes.ok) {
            console.error('n8n forward non-2xx:', n8nRes.status);
          }
        } catch (n8nErr) {
          // Do not fail the user request if n8n is briefly unreachable; submission is persisted locally
          console.error('n8n forward error:', n8nErr.message);
        }
      }

      const { _id, ...sanitized } = contactSubmission;
      return NextResponse.json(sanitized, { status: 201, headers: corsHeaders() });
    }
    
    // POST /api/admin/content
    if (pathString === 'admin/content') {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const { page, section, content } = body;
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
      { error: 'Internal server error', details: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function DELETE(request, { params }) {
  const path = params?.path || [];
  const pathString = path.join('/');
  
  try {
    const database = await getDb();
    
    // DELETE /api/admin/contacts/{contact_id}
    if (pathString.startsWith('admin/contacts/')) {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const contactId = pathString.replace('admin/contacts/', '');
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
      { error: 'Internal server error', details: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}
