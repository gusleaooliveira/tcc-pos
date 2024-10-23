import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (!!token && (pathname.startsWith("/autenticacao") || pathname === "/")) {
    return NextResponse.redirect(new URL("/meus-cursos", req.url));
  }

  if (pathname.startsWith("/autenticacao") || pathname === "/") {
    return NextResponse.next();
  }

  if (
    !token &&
    (pathname === "/meus-cursos" || pathname === "/conheca-o-profissional")
  ) {
    return NextResponse.redirect(
      new URL("/autenticacao/acessar-conta", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
