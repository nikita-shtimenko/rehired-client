import Balancer from "react-wrap-balancer";
import { Text } from "./ui/text";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const stats = [
  { label: "New vacancies published every 24 hours", value: "~300" },
  {
    label: "Companies save on finding the right candidate.",
    value: "~$5,000",
  },
  { label: "New users per month", value: "~1,000" },
];

interface IStatsProps {
  className?: string;
}

const Stats = ({ className }: IStatsProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our mission
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <Text>
              <Balancer>
                At {siteConfig.name}, our mission is to revolutionize the way
                high-tech professionals connect with innovative opportunities,
                shaping the future of the tech industry. We envision a dynamic
                ecosystem where tech people seamlessly discover, engage, and
                thrive in cutting-edge roles, while forward-thinking companies
                find the brightest talent to drive their success.
              </Balancer>
            </Text>
            <Text className="mt-10 max-w-xl">
              <Balancer>
                {siteConfig.name} is not just a job board; it is a
                transformative force in the tech industry. We are on a mission
                to redefine how professionals and companies connect,
                collaborate, and thrive in the ever-evolving landscape of
                technology. Join us in shaping the future of high-tech
                innovation!
              </Balancer>
            </Text>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-72 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    <Balancer>{stat.label}</Balancer>
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
