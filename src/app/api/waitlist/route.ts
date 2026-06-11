import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  // Envia pro backend gravar
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'social.kaduapps.site' }),
    });
  } catch (e) {
    console.error('waitlist post failed', e);
  }

  return NextResponse.redirect(new URL('/?ok=1', req.url));
}
