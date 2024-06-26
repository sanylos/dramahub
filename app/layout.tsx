import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DramaHUB",
  description: "Poznejte databázi internetových osobností, dramat a kontroverzí!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Topbar />*/}
        <Navbar />
        <div className="p-4 sm:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
