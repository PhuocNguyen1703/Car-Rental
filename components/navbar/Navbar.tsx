"use client";

import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Logo from "../Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="sticky flex items-center top-0 inset-x-0 z-30">
      <div className="flex justify-between items-center min-w-[1280px] h-[80px] px-5 mx-auto">
        <Link href="/" className="flex items-center gap-2 ml-2">
          <Logo width={40} height={40} />
          <p className="text-3xl font-bold select-none">Fuji</p>
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
      </div>
    </header>
  );
};

export default Navbar;
