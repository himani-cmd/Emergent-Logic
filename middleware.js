import { NextResponse } from 'next/server';

const redirects = {
  '/crm-implementation': '/services/crm-implementation',
  '/marketing-automation': '/services/marketing-automation',
  '/web-development': '/',
  '/digital-marketing': '/',
  '/blog/hubspot-consultant-vancouver': '/hubspot-consultant-vancouver',
  '/crm-implementation-canada': '/services/crm-implementation',
  '/blog/what-is-crm-implementation-canada': '/services/crm-implementation',
  '/blog/hubspot-admin-support-small-business': '/hubspot-admin-support-canada-us',
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
  matcher: ['/crm-implementation', '/marketing-automation', '/web-development', '/digital-marketing', '/blog/hubspot-consultant-vancouver', '/crm-implementation-canada', '/blog/what-is-crm-implementation-canada', '/blog/hubspot-admin-support-small-business'],
};
