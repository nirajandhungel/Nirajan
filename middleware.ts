import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.nirajandhungel.com.np';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const headerHost = request.headers.get('host');
  const currentHost = headerHost ?? url.hostname;

  let shouldRedirect = false;

  // Enforce canonical host (no mixed www/non-www)
  if (currentHost !== CANONICAL_HOST) {
    url.hostname = CANONICAL_HOST;
    shouldRedirect = true;
  }

  // Enforce no trailing slash for paths (except root) to match trailingSlash: false
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

// Apply middleware to all HTML routes, skip assets and API
export const config = {
  matcher: ['/((?!_next/|api/|static/|.*\\..*).*)'],
};

