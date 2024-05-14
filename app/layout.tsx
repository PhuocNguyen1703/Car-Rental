import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "@/utils/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans}>
      <body className="flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
