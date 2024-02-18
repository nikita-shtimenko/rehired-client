import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Announcement from "@/components/Announcement";
import {
  IconBroadcast,
  IconFriends,
  IconTimeline,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Text } from "@/components/ui/text";
import Balancer from "react-wrap-balancer";
import { siteConfig } from "@/config";

const stats = [
  { label: "New vacancies published every 24 hours", value: "~300" },
  {
    label: "Companies save on finding the right candidate.",
    value: "~$5,000",
  },
  { label: "New users per month", value: "~1,000" },
];

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

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const HomePage = () => {
  return (
    <main>
      <div className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[48rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[36rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-24 lg:px-8 lg:pt-16">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <Announcement
                  icon="🎉"
                  text="New pricing, companies profile and more."
                  className="mb-4"
                />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <Balancer>Your Gateway to High-Tech Careers.</Balancer>
                </h1>
                <Text className="mt-6 sm:max-w-md">
                  <Balancer>
                    Elevate your career with advanced matching, a supportive
                    community, and continuous learning. Streamline your
                    recruitment process and drive technological advancements
                    with {siteConfig.name}. Your future in tech starts here.
                  </Balancer>
                </Text>
                <div className="mt-10 flex items-center gap-x-4">
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-blue-600 hover:bg-blue-600/90"
                    )}
                  >
                    Explore Jobs
                  </Link>
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "gap-x-2"
                    )}
                  >
                    Post Job <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      width={704}
                      height={528}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg pointer-events-none select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      width={792}
                      height={528}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg pointer-events-none select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      width={396}
                      height={528}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg pointer-events-none select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      width={400}
                      height={528}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg pointer-events-none select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      width={352}
                      height={528}
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg pointer-events-none select-none"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 lg:mt-32">
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
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32 lg:mt-56">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <Balancer>
              Everything you need to find your next opportunity
            </Balancer>
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
      <div className="mx-auto w-full flex flex-col justify-center items-center text-center bg-primary px-6 py-24 mt-32 lg:mt-64">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          <Balancer>
            Ready to dive in?
            <br />
            Start your free trial today.
          </Balancer>
        </h2>
        <div className="flex flex-row items-center gap-x-6 mt-8">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-blue-600 hover:bg-blue-500"
            )}
          >
            Get started
          </Link>
          <Link
            href="/pricing"
            className={cn(buttonVariants({ variant: "outline" }), "gap-x-2")}
          >
            Pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32 mt-16 lg:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <Balancer>From the blog</Balancer>
            </h2>
            <Text className="mt-2">
              <Balancer>
                Uncover High-Tech Insights, Career Strategies, and Industry News
              </Balancer>
            </Text>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={post.imageUrl}
                  alt=""
                  width={1066}
                  height={685}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <Image
                        src={post.author.imageUrl}
                        alt=""
                        width={256}
                        height={256}
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
