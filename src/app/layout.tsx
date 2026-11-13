import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const title = "Rishabh Yadav — Full-Stack & AI Engineer";
const description =
  "Rishabh Yadav builds full-stack web products and GenAI and agentic AI applications with React, Next.js, TypeScript, FastAPI, LangChain and LangGraph.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rishabh-yadav-seven.vercel.app"),
  alternates: { canonical: "/" },
  title,
  description,
  authors: [{ name: "Rishabh Yadav" }],
  keywords: ["Rishabh Yadav", "Full-Stack Engineer", "AI Engineer", "Agentic AI", "Next.js", "React", "RAG", "LangChain", "LangGraph", "Portfolio"],
  openGraph: { title, description, type: "website", locale: "en_IN", url: "/", siteName: "Rishabh Yadav" },
  twitter: { card: "summary_large_image", title, description, creator: "@rishxbh_yadav" },
};

export const viewport: Viewport = { themeColor: "#111214", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
