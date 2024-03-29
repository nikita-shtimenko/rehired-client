import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`flex flex-col ${GeistSans.className} bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
