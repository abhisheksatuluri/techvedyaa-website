import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechVedyaa | Intelligent Automation & AI Marketing",
  description:
    "Empowering businesses with intelligent automation, AI-driven marketing solutions, and seamless digital transformation.",
  // Tell Next.js to use the static favicon in /public
  icons: {
    // using a query string forces browsers to fetch a fresh copy after deploy
    icon: "/favicon.ico?v=2",
    // optional: apple touch and a png fallback
    apple: "/apple-touch-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
