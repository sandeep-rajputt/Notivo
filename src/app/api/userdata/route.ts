import { getUserData, getUserEmail } from "@services/auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const email = await getUserEmail(req);
    if (email) {
      const data = await getUserData(email);
      return new Response(JSON.stringify({ userData: data }));
    }
    return new Response("Unauthorized", { status: 401 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
