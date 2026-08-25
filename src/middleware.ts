import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the route is an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for the admin session cookie
    const adminSession = request.cookies.get('admin_session');

    if (!adminSession || adminSession.value !== 'authenticated') {
      // If no valid session exists, redirect to the login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow the request to proceed if authenticated or not an admin route
  return NextResponse.next();
}

// Configure the middleware to only run on admin routes to save performance
export const config = {
  matcher: ['/admin/:path*'],
};
