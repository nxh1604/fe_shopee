import { updateSession } from "@/utils/supabase/middleware";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/account")) {
  //   const supabase = createClient();
  //   const { data, error } = await supabase.auth.getUser();

  //   if (error || !data.user) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
