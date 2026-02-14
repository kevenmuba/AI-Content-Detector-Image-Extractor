import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    default: "NextDetect AI - Leading AI Content Detector & Humanizer",
    template: "%s | NextDetect AI",
  },
  description: "Accurately detect AI-generated content from GPT-4, Claude, and Gemini. Humanize AI text to make it natural and undetectable with our advanced linguistic models.",
  keywords: ["AI Detector", "AI Content Detector", "AI Humanizer", "AI Text Detection", "GPT Detector", "Claude Detector", "Gemini Detector", "Content Authenticity", "Undetectable AI"],
  authors: [{ name: "Keven Muba" }],
  creator: "NextDetect AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://humanizing-ai-written-text.vercel.app/",
    title: "NextDetect AI - Leading AI Content Detector & Humanizer",
    description: "Detect and humanize AI-generated content with state-of-the-art accuracy. Ensure your content's authenticity in seconds.",
    siteName: "NextDetect AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextDetect AI - AI Detection & Humanization",
    description: "Professional tool for verifying content authenticity and humanizing AI-generated text.",
    creator: "@nextdetectai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
