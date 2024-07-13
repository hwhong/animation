import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "Animation Trove",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
      <Analytics />
    </html>
  );
}
