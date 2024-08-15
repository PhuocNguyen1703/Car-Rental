import type { Metadata } from "next";
import "./globals.css";
import { dm_sans, poppins, roboto } from "@/utils/fonts";
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
    <html lang="en" className={`${roboto} ${dm_sans} ${poppins}`}>
      <body className="w-[1280px] mx-auto border">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
