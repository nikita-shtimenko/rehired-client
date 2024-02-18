import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import NavbarWeb from "./NavbarWeb";
import NavbarMobile from "./NavbarMobile";
import { cn } from "@/lib/utils";
import { NavbarItem } from ".";
import { UserButton } from "@clerk/nextjs";

const navbarItems: NavbarItem[] = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/jobs",
    name: "Jobs",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
  // {
  //   href: "/support",
  //   name: "Support",
  // },
  // {
  //   href: "/blog",
  //   name: "Blog",
  // },
];

const Navbar = async () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-end">
        <NavbarWeb items={navbarItems} />
        <NavbarMobile items={navbarItems} />
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-24 rounded-full"
            )}
          >
            Sign Up
          </Link>
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-24 rounded-full"
            )}
          >
            Sign In
          </Link>
          <UserButton />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
