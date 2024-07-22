import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Validate the token if necessary

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!auth/login|api|_next/static|favicon.ico).*)']
}
