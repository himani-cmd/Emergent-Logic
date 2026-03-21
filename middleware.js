import { NextResponse } from 'next/server';

const redirects = {
  '/crm-implementation': '/services/crm-implementation',
  '/marketing-automation': '/services/marketing-automation',
  '/web-development': '/',
  '/digital-marketing': '/',
};

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check for 301 redirects
  if (redirects[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirects[pathname];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/crm-implementation', '/marketing-automation', '/web-development', '/digital-marketing'],
};
