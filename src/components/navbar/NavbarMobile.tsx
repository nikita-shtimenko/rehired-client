"use client";

import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarItem } from ".";
import { siteConfig } from "@/config";

interface INavbarMobileProps {
  items: NavbarItem[];
}

const NavbarMobile = ({ items }: INavbarMobileProps) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="md:hidden">
        <IconMenu2 />
      </DrawerTrigger>
      <DrawerContent className="focus:outline-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="justify-center">
            <DrawerTitle>{siteConfig.name}</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col justify-center items-center font-normal text-2xl space-y-4 my-12">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex",
                  pathName === item.href
                    ? "pointer-events-none text-blue-600/85"
                    : ""
                )}
              >
                {item.name}
                <IconArrowUpRight size={16} className="text-blue-600" />
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "text-md")}
            >
              Sign Up
            </Link>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "text-md")}
            >
              Sign In
            </Link>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default NavbarMobile;
