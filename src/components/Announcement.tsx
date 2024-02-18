import { Separator } from "@/components/ui/separator";
import { BadgeButton } from "@/components/ui/badge";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IAnnouncementProps {
  icon?: ReactNode;
  text: string;
  className?: string;
}

const Announcement = ({ className, icon, text }: IAnnouncementProps) => {
  return (
    <BadgeButton
      href="/news"
      color="green"
      className={cn("inline-flex items-center text-sm font-medium", className)}
    >
      <span className="ml-1">{icon}</span>{" "}
      <Separator className="mx-2 h-4 bg-primary/10" orientation="vertical" />{" "}
      <span className="sm:hidden">{text}</span>
      <span className="hidden sm:inline">{text}</span>
      <IconArrowNarrowRight />
    </BadgeButton>
  );
};

export default Announcement;
