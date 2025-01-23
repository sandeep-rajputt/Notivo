import { verifyUserAccount } from "@services/auth";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    await verifyUserAccount(token);
    return new Response("Verification successful");
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 401,
    });
  }
}
