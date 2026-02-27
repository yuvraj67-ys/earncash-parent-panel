import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const screenshots = await kv.get<any[]>('screenshots') || [];
  return NextResponse.json(screenshots);
}
