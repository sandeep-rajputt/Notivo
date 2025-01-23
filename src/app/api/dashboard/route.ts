import { getUserEmail } from "@services/auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const email = await getUserEmail(req);
  return new Response(JSON.stringify({ email }));
}
