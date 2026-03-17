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
      const statusChecks = await database.collection('status_checks').find({}).toArray();
      const sanitized = statusChecks.map(({ _id, ...rest }) => rest);
      return NextResponse.json(sanitized, { headers: corsHeaders() });
    }
    
    // GET /api/contact
    if (pathString === 'contact') {
      const submissions = await database.collection('contact_submissions').find({}).toArray();
      const sanitized = submissions.map(({ _id, ...rest }) => rest);
      return NextResponse.json(sanitized, { headers: corsHeaders() });
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
        .find({})
        .sort({ created_at: -1 })
        .toArray();
      const sanitized = submissions.map(({ _id, ...rest }) => rest);
      return NextResponse.json(sanitized, { headers: corsHeaders() });
    }
    
    // GET /api/admin/content/{page}
    if (pathString.startsWith('admin/content/')) {
      const username = verifyAdmin(request);
      if (!username) return unauthorizedResponse();
      
      const page = pathString.replace('admin/content/', '');
      const content = await database.collection('page_content').find({ page }).toArray();
      const sanitized = content.map(({ _id, ...rest }) => rest);
      return NextResponse.json(sanitized, { headers: corsHeaders() });
    }
    
    // GET /api/content/{page} - Public endpoint
    if (pathString.startsWith('content/')) {
      const page = pathString.replace('content/', '');
      const content = await database.collection('page_content').find({ page }).toArray();
      const sanitized = content.map(({ _id, ...rest }) => rest);
      return NextResponse.json(sanitized, { headers: corsHeaders() });
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
    
    // POST /api/contact
    if (pathString === 'contact') {
      const contactSubmission = {
        id: uuidv4(),
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
        message: body.message || '',
        created_at: new Date().toISOString()
      };
      await database.collection('contact_submissions').insertOne(contactSubmission);
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
