"use client";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Logo from "../Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="fixed flex justify-between items-center w-full h-16 px-10 z-10 bg-black-200">
      <Link href="/" className="flex items-center gap-2 ml-2">
        <Logo width={40} height={40} />
        <p className="text-2xl font-bold select-none">HypeHub</p>
      </Link>
      <div className="flex items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className="font-medium mx-4 hover:text-blue-800"
          >
            {link.label}
          </Link>
        ))}
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
