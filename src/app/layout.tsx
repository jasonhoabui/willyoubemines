import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ClientWrapper from "./ClientWrapper";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "willyoubemines",
  description: "valentines '25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClientWrapper>{children}</ClientWrapper>
          <Analytics />
          <footer className="text-center mt-4 pb-6">
            <p className="text-gray-500 text-sm mt-4">
              ©{new Date().getFullYear()} by jason bui
            </p>
          </footer>
        </body>
      </html>
    </>
  );
}
