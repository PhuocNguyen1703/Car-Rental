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

  if (user) return;

  return (
    <Button
      className="h-10 ml-8 px-5 text-lighter-txt text-sm font-medium bg-brand"
      asChild
    >
      <Link href="/sign-in">Sign In</Link>
    </Button>
  );
};

export default UserMenu;
