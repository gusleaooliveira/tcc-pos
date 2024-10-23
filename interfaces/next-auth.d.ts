import NextAuth from "next-auth";
import { IResponseAuthLogin } from "./auth";

declare module "next-auth" {
  interface Session {
    user: IResponseAuthLogin;
  }
}
