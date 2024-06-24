// app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const users = Array.from({ length: 10 }).map((_, index) => ({
    id: index + "",
    name: `Name ${index + 1}`,
  }));

  return NextResponse.json(users);
}
Array.from({ length: 10 }).map((_, index) => ({
  id: index + "",
  name: `Name ${index + 1}`,
}));

export async function POST(request: Request) {
  const body = await request.json();
  // Here, you would typically save the new user to your database.
  // This example simply returns the new user.
  return NextResponse.json(body);
}
