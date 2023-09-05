"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Providers } from '@redux/provider';
import type { Metadata } from 'next';
import { SessionProvider } from "next-auth/react";
import { Inter } from 'next/font/google';
import '../styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AmigoTasks',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`} style={{ position: 'relative' }}>
        <SessionProvider>
          <Providers>
            <NextUIProvider>
              {children}
            </NextUIProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
