import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = 0

/**
 * Minimal session endpoint so NextAuth hooks don't fail in the marketing site.
 * Returns an empty session payload which keeps the client-side provider quiet.
 */
export async function GET() {
  return NextResponse.json({ user: null, expires: null })
}
