import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json([
    { id: 1, name: 'hello' },
    { id: 2, name: 'Staś' },
    { id: 3, name: 'Jaś' },
  ]);
}

export async function POST(request: Request) {
  const user = await request.json();
  return NextResponse.json({ user });
}

