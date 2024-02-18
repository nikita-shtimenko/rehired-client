import Link from "next/link";
import { NavbarItem } from ".";
import { siteConfig } from "@/config";

interface INavbarWebProps {
  items: NavbarItem[];
}

const NavbarWeb = ({ items }: INavbarWebProps) => {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="transition-colors text-foreground/60 hover:text-foreground/80"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavbarWeb;
