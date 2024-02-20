import { Separator } from "@/components/ui/separator";
import { BadgeButton, BadgeColors } from "@/components/ui/badge";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Text } from "./ui/text";
import Balancer from "react-wrap-balancer";

interface IAnnouncementProps {
  href: string;
  icon?: ReactNode;
  text: string;
  color: keyof typeof BadgeColors;
  className?: string;
}

const Announcement = ({
  href,
  icon,
  text,
  color,
  className,
}: IAnnouncementProps) => {
  return (
    <BadgeButton
      href={href}
      color={color}
      className={cn("inline-flex items-center text-sm font-medium", className)}
    >
      {icon ? <span className="ml-1">{icon}</span> : null}
      <Separator
        className="mx-2 h-4 bg-primary/10"
        orientation="vertical"
      />{" "}
      <span className="sm:hidden">{text}</span>
      <span className="hidden sm:inline">{text}</span>
      <IconArrowNarrowRight />
    </BadgeButton>
  );
};

export default Announcement;
