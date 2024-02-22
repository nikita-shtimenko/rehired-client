import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

type Tier = {
  id: string;
  href: string;
  name: string;
  description: string;
  features: string[];
  price: string;
  pricingPeriod: string;
  mostPopular: boolean;
};

const tiers: Tier[] = [
  {
    id: "tier-free",
    href: "#",
    name: "Free",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    price: "0$",
    pricingPeriod: "",
    mostPopular: false,
  },
  {
    id: "tier-pro",
    href: "#",
    name: "Pro",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    price: "25$",
    pricingPeriod: "month",
    mostPopular: true,
  },
  {
    id: "tier-enterprise",
    href: "#",
    name: "Enterprise",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    price: "100$",
    pricingPeriod: "month",
    mostPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            <Balancer>The right price for you, whoever you are</Balancer>
          </p>
        </div>
        <Text className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-zinc-500">
          <Balancer>
            Whether you are a job seeker aiming to take the next step in your
            career or a company seeking top-notch talent, we have a pricing
            package designed just for you.
          </Balancer>
        </Text>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={cn(
                      tier.mostPopular ? "text-blue-600" : "text-primary",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {tier.price}
                  </span>
                  {tier.pricingPeriod === "" ? null : (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /{tier.pricingPeriod}
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <IconCheck
                        className="h-6 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {tier.name === "Free" ? (
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={cn(
                    "text-muted-foreground ring-1 ring-inset ring-muted-foreground/10 bg-muted",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Free
                </Link>
              ) : (
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={cn(
                    tier.mostPopular
                      ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                      : "text-blue-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 hover:bg-blue-500/5",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Buy plan
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
