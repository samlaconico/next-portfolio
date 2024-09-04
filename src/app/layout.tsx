import type { Metadata } from "next";
import { Abel, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({subsets: ["latin"], weight: "200", variable: "--font-manrope"})
const manropeBold = Manrope({subsets: ["latin"], weight: "600", variable: "--font-manrope-bold"})

export const metadata: Metadata = {
  title: "Sam Laconico",
  description: "Sam Laconico Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${manrope.variable} ${manropeBold.variable} m-auto container`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
