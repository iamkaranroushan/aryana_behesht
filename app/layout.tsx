import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layouts/mainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx (or RootLayout)
export const metadata: Metadata = {
  title: "Aryana Behesht",
  description: "Persian Restaurant",
  openGraph: {
    type: "website",
    url: "https://aryanabehesht.karanroushan.com",
    title: "Aryana Behesht",
    description: "Persian Cuisine",
    images: [
      {
        url: "/image/Hero_image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryana Behesht",
    description: "Persian Cuisine",
    images: ["/image/Hero_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
