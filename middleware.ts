// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
 
// middleware.ts
const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  })
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }
  return I18nMiddleware(request)
}
 
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}