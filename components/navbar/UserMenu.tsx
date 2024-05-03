"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const UserMenu = () => {
  const user = false;

  return (
    <div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 p-1 pl-3 outline outline-1 outline-gray-400 rounded-full">
            <Menu size={16} />
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-10 bg-white z-10">
            <DropdownMenuItem>Help Center</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-400 mx-1" />
            <DropdownMenuGroup>
              <DropdownMenuItem>Sign up</DropdownMenuItem>
              <DropdownMenuItem>Log in</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
          <Link href="/sign-in" className="text-white">
            Sign In
          </Link>
        </Button>
      )}
    </div>
  );
};

export default UserMenu;
