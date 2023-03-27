import { NextResponse } from "next/server";

interface User {
  id: number;
  name: string;
}
export async function PUT(request: Request) {
  const user = await request.json();
  return NextResponse.json({ user });
}

export async function DELETE(request: Request) {
  const user = await request.json();

  return NextResponse.json({ user });
}