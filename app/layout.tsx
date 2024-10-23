import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Darcio Pinheiro",
  description:
    "Mantenha-se atualizado sobre a ciência por trás do emagrecimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-black scrollbar`}>
      <NextAuthProvider>
        <body className={`${inter.className} ${bebasNeue.variable} bg-black`}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
