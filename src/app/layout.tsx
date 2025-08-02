import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Izzatillo Yuldashev - AI/ML Engineer",
  description: "Interactive portfolio with an AI-powered interface showcasing my experience in LLMs, NLP, and machine learning research",
  keywords: [
    "Izzatillo Yuldashev", 
    "AI/ML Engineer", 
    "Portfolio", 
    "Machine Learning", 
    "NLP", 
    "LLMs", 
    "PyTorch", 
    "Research",
    "Fine-tuning",
    "RAG Systems"
  ],
  authors: [
    {
      name: "Izzatillo Yuldashev",
      url: "https://github.com/iyuldashev",
    },
  ],
  creator: "Izzatillo Yuldashev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iyuldashev.dev",
    title: "Izzatillo Yuldashev - AI/ML Engineer",
    description: "Interactive portfolio showcasing AI/ML engineering expertise and research",
    siteName: "Izzatillo Yuldashev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzatillo Yuldashev - AI/ML Engineer",
    description: "Interactive portfolio showcasing AI/ML engineering expertise and research",
    creator: "@iyuldashev",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}