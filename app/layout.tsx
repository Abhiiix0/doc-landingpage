import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins", // This creates a CSS variable
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Explicitly set weights for Poppins
});

export const metadata: Metadata = {
  title: {
    default: "Doctor On Call Services at Home | 24/7 Medical Care",
    template: "%s | Doctor On Call Mumbai",
  },

  description:
    "Book 24/7 Doctor on Call in Mumbai with fast Doctor at Home service in Bandra, Powai, and South Mumbai for quick diagnosis, treatment, and prescription.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Doctor On Call Services at Home | 24/7 Medical Care",
    description:
      "Book 24/7 Doctor on Call in Mumbai with fast Doctor at Home service in Bandra, Powai, and South Mumbai.",
    url: "https://yourdomain.com",
    siteName: "Doctor On Call Mumbai",
    images: [
      {
        url: "/images/left2.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor On Call Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor On Call Services at Home | 24/7 Medical Care",
    description:
      "Book 24/7 Doctor on Call in Mumbai with fast Doctor at Home service.",
    images: ["/images/left2.jpg"],
    creator: "@yourtwitterhandle",
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
