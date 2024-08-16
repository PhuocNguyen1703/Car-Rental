import type { Metadata } from "next";
import "./globals.css";
import { dm_sans, poppins, roboto } from "@/utils/fonts";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Car rental service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${dm_sans.variable} ${poppins.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
