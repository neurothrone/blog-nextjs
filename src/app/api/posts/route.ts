import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { createPost } from "@/database/data";

export async function GET() {
  try {
    // language=SQL format=false
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 2;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  // const title = searchParams.get('title');
  // const content = searchParams.get('content');
  // const date = searchParams.get('date');

  const { id, title, content, date } = await request.json();

  try {
    // SQL query to insert a new post
    const author = "cap zane";
    await createPost({id, author, title, content, date});
    return NextResponse.json({ message: 'Post successfully inserted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
