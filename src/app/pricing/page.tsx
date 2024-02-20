"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

type Section = string;
const sections: Section[] = ["Job Seeker", "Company"];

type Tier = {
  name: string;
  id: string;
  href: string;
  price: number;
  description: string;
  features: string[];
  mostPopular: boolean;
};

const tiers: { [key: Section]: Tier[] } = {
  "Job Seeker": [
    {
      name: "Free",
      id: "tier-free-job-seeker",
      href: "#",
      price: 0,
      description: "The essentials to find your next opportunity.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Premium",
      id: "tier-premium-job-seeker",
      href: "#",
      price: 25,
      description: "Stand out for companies as a top-talent.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
  ],
  Company: [
    {
      name: "Free",
      id: "tier-free-company",
      href: "#",
      price: 0,
      description: "The essentials to find top-talent for your company.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Premium",
      id: "tier-premium-company",
      href: "#",
      price: 100,
      description: "A plan that scales with your business needs.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
  ],
};

const PricingPage = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <Balancer>The right price for you, whoever you are</Balancer>
          </p>
        </div>
        <Text className="mx-auto mt-6 max-w-xl text-center">
          <Balancer>
            Whether you are a job seeker aiming to take the next step in your
            career or a company seeking top-notch talent, we have a pricing
            package designed just for you.
          </Balancer>
        </Text>
        <Tabs
          value={currentSection}
          onValueChange={(value: string) => setCurrentSection(value)}
          className="flex flex-col justify-center items-center mt-12"
        >
          <TabsList className="w-full xs:w-3/4 sm:w-1/2 lg:w-1/3 grid grid-cols-2 rounded-full">
            {sections.map((section) => (
              <TabsTrigger
                key={section}
                value={section}
                className="rounded-full"
              >
                {section}
              </TabsTrigger>
            ))}
          </TabsList>
          {sections.map((section) => (
            <TabsContent
              key={section}
              value={section}
              className={cn(
                "isolate mx-auto mt-10 grid max-w-full grid-cols-1 gap-8 lg:mx-0 lg:w-3/4 lg:grid-cols-2",
                section === currentSection ? "" : "hidden"
              )}
            >
              {tiers[section].map((tier) => (
                <div
                  key={tier.id}
                  className={cn(
                    tier.mostPopular
                      ? "ring-1 ring-blue-600/90"
                      : "ring-1 ring-primary/10",
                    "rounded-3xl p-8 xl:p-10 w-96"
                  )}
                >
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
                      <Badge color="emerald" className="rounded-full">
                        Most Popular
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-semibold tracking-tight text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={cn(
                      "mt-6 w-full",
                      tier.mostPopular
                        ? buttonVariants({
                            variant: "default",
                            className: "bg-blue-600 hover:bg-blue-600/90",
                          })
                        : buttonVariants({
                            variant: "outline",
                            className:
                              "bg-muted text-muted-foreground pointer-events-none",
                          })
                    )}
                  >
                    Buy plan
                  </Link>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
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
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PricingPage;
