"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

export default function NextAuthProvider({ children }: IProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/");
  }
}
