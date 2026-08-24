import { NextResponse } from "next/server";
import { getGithubRepos } from "@/lib/integrations/github";

// Route-level ISR: this handler's response is cached for 1 hour and
// regenerated in the background on the next request after that.
export const revalidate = 3600;

export async function GET() {
  try {
    const repos = await getGithubRepos();
    return NextResponse.json({ repos }, { status: 200 });
  } catch (error) {
    console.error("[/api/github]", error);
    return NextResponse.json({ repos: [], error: "Failed to fetch GitHub repos" }, { status: 502 });
  }
}
