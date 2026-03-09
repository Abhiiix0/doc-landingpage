import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins", // This creates a CSS variable
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Explicitly set weights for Poppins
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Doctor On Call Services at Home | 24/7 Medical Care",
    template: "%s | Doctor On Call Mumbai",
  },
  description:
    "Book 24/7 Doctor on Call in Mumbai with fast Doctor at Home service in Bandra Powai and South Mumbai for quick diagnosis treatment and prescription.",
  icons: {
    icon: "/icon.png", // any name you want
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}   antialiased`}>{children}</body>
    </html>
  );
}
