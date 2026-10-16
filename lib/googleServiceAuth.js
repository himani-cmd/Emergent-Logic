import { createSign } from 'crypto';

// Server-only helper for Google service-account access. Reads the key from
// GSC_SERVICE_ACCOUNT_JSON and never logs, returns or persists any part of it.

const DEFAULT_TOKEN_URI = 'https://oauth2.googleapis.com/token';
const REQUEST_TIMEOUT_MS = 10000;
const REPORT_TIME_ZONE = 'America/Vancouver';

export class NotConfiguredError extends Error {}
export class UpstreamError extends Error {}

const tokenCache = new Map();

function loadServiceAccount() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new NotConfiguredError('not configured');
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new NotConfiguredError('not configured');
  }

  const clientEmail = parsed?.client_email;
  const signingKey = parsed?.private_key;
  const tokenUri = parsed?.token_uri || DEFAULT_TOKEN_URI;
  if (typeof clientEmail !== 'string' || !clientEmail || typeof signingKey !== 'string' || !signingKey) {
    throw new NotConfiguredError('not configured');
  }

  return { clientEmail, signingKey, tokenUri };
}

function base64url(value) {
  return Buffer.from(value).toString('base64url');
}

function signJwt({ clientEmail, signingKey, tokenUri }, scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(
    JSON.stringify({ iss: clientEmail, scope, aud: tokenUri, iat: now, exp: now + 3600 })
  );
  const unsigned = `${header}.${claims}`;

  try {
    const signer = createSign('RSA-SHA256');
    signer.update(unsigned);
    signer.end();
    return `${unsigned}.${signer.sign(signingKey, 'base64url')}`;
  } catch {
    // A malformed key is a configuration problem, not an upstream failure.
    throw new NotConfiguredError('not configured');
  }
}

export async function fetchWithTimeout(url, options = {}) {
  let response;
  try {
    response = await fetch(url, {
      ...options,
      cache: 'no-store',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new UpstreamError('upstream');
  }

  if (!response.ok) {
    throw new UpstreamError('upstream');
  }

  try {
    return await response.json();
  } catch {
    throw new UpstreamError('upstream');
  }
}

export async function getAccessToken(scope) {
  const cached = tokenCache.get(scope);
  if (cached && cached.expiresAt > Date.now() + 60000) {
    return cached.token;
  }

  const account = loadServiceAccount();
  const assertion = signJwt(account, scope);
  const data = await fetchWithTimeout(account.tokenUri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }).toString(),
  });

  if (typeof data?.access_token !== 'string') {
    throw new UpstreamError('upstream');
  }

  const expiresIn = Number(data.expires_in) || 3600;
  tokenCache.set(scope, { token: data.access_token, expiresAt: Date.now() + expiresIn * 1000 });
  return data.access_token;
}

export async function googleJsonPost(url, token, body) {
  return fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

// Dates are computed in the business's local time zone so "yesterday" and
// "today - 2" line up with the reporting day used by Google's dashboards.
export function localDate(offsetDays = 0) {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: REPORT_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
  return shiftDate(today, offsetDays);
}

export function shiftDate(isoDate, offsetDays) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

const SUCCESS_HEADERS = {
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  'X-Robots-Tag': 'noindex',
};

// Error responses are not cached so a transient Google failure or a missing
// key is not served from the CDN for the next day.
const ERROR_HEADERS = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex',
};

export function summaryResponse(body) {
  return Response.json(body, { status: 200, headers: SUCCESS_HEADERS });
}

export function errorResponse(error) {
  if (error instanceof NotConfiguredError) {
    return Response.json({ error: 'not configured' }, { status: 503, headers: ERROR_HEADERS });
  }
  return Response.json({ error: 'upstream' }, { status: 502, headers: ERROR_HEADERS });
}
