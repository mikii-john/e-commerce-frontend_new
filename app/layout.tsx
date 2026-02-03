import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "LUXE | Glassmorphic Luxury Goods",
  description: "Experience the pinnacle of luxury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" class="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}