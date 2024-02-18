import Balancer from "react-wrap-balancer";
import { Text } from "./ui/text";
import {
  IconBroadcast,
  IconFriends,
  IconTimeline,
  IconTrendingUp,
} from "@tabler/icons-react";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Advanced Matching Algorithms",
    description:
      "Our algorithms ensure that you discover opportunities that align perfectly with your skills, preferences, and career aspirations. Say goodbye to sifting through irrelevant listings - we deliver personalized matches for your next career move.",
    icon: IconBroadcast,
  },
  {
    name: "Effortless Job Posting for Companies",
    description: `For companies, our platform offers a streamlined job posting process. Showcase your culture, projects, and opportunities to attract the best talent effortlessly. ${siteConfig.name} is your partner in building high-performing teams for the future.`,
    icon: IconTimeline,
  },
  {
    name: "Supportive Community and Networking",
    description: `Join a vibrant community of like-minded professionals. Engage in discussions, seek advice, and expand your network. ${siteConfig.name} is more than a job board; it's a collaborative space where you can grow your career through shared insights and experiences.`,
    icon: IconFriends,
  },
  {
    name: "Tech Insights and Trends",
    description:
      "Stay at the forefront of industry insights with our curated tech trends and analyses. Access the latest information on emerging technologies, best practices, and market demands to stay competitive in the ever-evolving tech landscape.",
    icon: IconTrendingUp,
  },
];

interface IFeaturesProps {
  className?: string;
}

const Features = ({ className }: IFeaturesProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <Balancer>Everything you need to find your next opportunity</Balancer>
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <Text className="mt-2">
                <Balancer>{feature.description}</Balancer>
              </Text>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
export default Features;
