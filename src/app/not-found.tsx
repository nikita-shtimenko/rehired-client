import { Text } from "@/components/ui/text";
import { siteConfig } from "@/config";
import { IconMessage, IconRss, IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const links = [
  {
    name: "Contact Support",
    href: siteConfig.navigation.support,
    description: "Contact our support team to get help.",
    icon: IconMessage,
  },
  {
    name: "Blog",
    href: siteConfig.navigation.blog,
    description: "Read our latest news and articles.",
    icon: IconRss,
  },
];

const NotFoundPage = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 lg:px-8 mb-32">
      <div className="mx-auto mt-8 max-w-2xl text-center sm:mt-16">
        <p className="text-base font-semibold leading-8 text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          <Balancer>This page does not exist</Balancer>
        </h1>
        <Text className="mt-2">
          <Balancer>
            Sorry, we couldn’t find the page you’re looking for.
          </Balancer>
        </Text>
      </div>
      <div className="mx-auto mt-12 flow-root max-w-lg sm:mt-16">
        <h2 className="sr-only">Popular pages</h2>
        <ul
          role="list"
          className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
        >
          {links.map((link, linkIdx) => (
            <li key={linkIdx} className="relative flex gap-x-6 py-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                <link.icon
                  className="h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  <Link href={link.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {link.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {link.description}
                </p>
              </div>
              <div className="flex-none self-center">
                <IconChevronRight
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Link
            href={siteConfig.navigation.home}
            className="text-sm font-semibold leading-6 text-blue-600"
          >
            <span aria-hidden="true" className="mr-2">
              &larr;
            </span>
            Back to home page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
