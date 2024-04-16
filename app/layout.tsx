import type { Metadata } from "next";
import "./globals.css";
import { dm_sans } from "@/utils/fonts";
import Header from "@/components/header/Header";
import Modal from "@/components/modals/Modal";

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
        <Modal isOpen />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
