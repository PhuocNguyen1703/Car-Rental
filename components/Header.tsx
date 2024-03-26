import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 bg-slate-400 h-16">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <div className="flex items-center gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className="font-medium px-2 py-1 hover:text-blue-700"
          >
            {link.label}
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadc" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
