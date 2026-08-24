import { NextResponse } from "next/server";
import { getMediumPosts } from "@/lib/integrations/medium";

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await getMediumPosts();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("[/api/medium]", error);
    return NextResponse.json({ posts: [], error: "Failed to fetch Medium posts" }, { status: 502 });
  }
}
