'use client';
import '@mantine/core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { queryClient } from '@/services';
import { QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@/contexts/login';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </Head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MantineProvider defaultColorScheme="dark">
              {children}
            </MantineProvider>
          </AuthProvider>
        </QueryClientProvider>
        <ToastContainer position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
