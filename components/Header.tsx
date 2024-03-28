import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Header = () => {
  const user = true;

  return (
    <header className="flex justify-between items-center px-6 pt-2 bg-slate-400 h-16">
      <Link href="/" className="flex items-center gap-2 ml-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-cover"
        />
        <p className="text-2xl font-bold select-none">HypeHub</p>
      </Link>
      <div className="flex items-center gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className="font-normal px-2 py-1 hover:text-blue-800 text-lg"
          >
            {link.label}
          </Link>
        ))}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1711330980173-f308124e153d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white z-10">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Mode</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>light</DropdownMenuItem>
                    <DropdownMenuItem>Dark</DropdownMenuItem>
                    <DropdownMenuItem>System</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <Link href="/login" className="text-white">
              Sign In
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
