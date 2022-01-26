import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  return Math.random() >= 0.5 ? NextResponse.rewrite(`/repro/pageA`) :  NextResponse.rewrite(`/repro/pageB`);
}