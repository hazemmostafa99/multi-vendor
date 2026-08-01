"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent  hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white",
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white px-3 lg:px-6">
      <Link href="/" className="flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <NavbarSidebar
        open={isOpen}
        onOpenChange={setIsOpen}
        items={navbarItems}
      />

      <div className="hidden lg:flex items-center gap-2">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l  border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button className="border-l  border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black  hover:bg-pink-400 hover:text-black transition-colors text-lg text-white">
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      <div className="flex items-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}
