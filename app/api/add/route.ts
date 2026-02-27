import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let list = await kv.get<any[]>('screenshots') || [];
    list.unshift({
      url: body.url,
      appName: body.appName,
      time: body.time
    });
    if (list.length > 200) list = list.slice(0, 200);
    await kv.set('screenshots', list);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
