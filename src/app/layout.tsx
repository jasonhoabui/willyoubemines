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
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <ClientWrapper>{children}</ClientWrapper>
          <Analytics />
          <div className="w-full flex justify-center mt-auto pb-6">
            <footer className="text-center">
              <p className="text-gray-500 text-sm">
                ©{new Date().getFullYear()} by Jason Bui
              </p>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
