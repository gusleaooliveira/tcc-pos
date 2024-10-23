import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, getServerSession } from "next-auth";
import { base_URL } from "../axios";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${base_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        console.log("🚀 ~ user:", user);

        if (!!user && res.ok) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/autenticacao/acessar-conta",
    signOut: "/",
  },

  callbacks: {
    jwt: async ({ token, user, session, trigger }) => {
      if (trigger === "update" && session?.user) {
        token.user = { ...token, ...session.user };
      }
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      session.user = token as any;
      return session;
    },
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}
