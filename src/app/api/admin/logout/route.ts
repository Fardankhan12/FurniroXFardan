import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = cookies();
  cookieStore.delete('admin_session');

  return NextResponse.json({ message: 'Logged out successfully' });
}