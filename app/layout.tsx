import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { dm_sans } from "@/utils/fonts";

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
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
