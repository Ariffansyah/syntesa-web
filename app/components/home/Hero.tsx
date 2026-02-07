import AnimatedCounter from "~/components/AnimatedCounter";
import type { SocialLink } from "~/types";

interface HeroProps {
  socialLinks: SocialLink[];
}

export default function Hero({ socialLinks }: HeroProps) {
  const discordLink = socialLinks.find((link) => link.name === "Discord");
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80 dark:from-black dark:via-gray-900 dark:to-black animate-gradient-xy" />
        <div className="absolute inset-0 bg-gradient-to-r from-apple-blue-500/[0.02] via-transparent to-apple-blue-500/[0.02] animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-apple-blue-500/[0.02] to-transparent animate-gradient" />

        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-apple-blue-500/[0.03] dark:bg-apple-blue-400/[0.03] rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDuration: "10s" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-apple-blue-600/[0.02] dark:bg-apple-blue-500/[0.02] rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDuration: "15s", animationDelay: "-5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-apple-blue-400/[0.03] dark:bg-apple-blue-300/[0.03] rounded-full blur-3xl opacity-20 animate-pulse-slow"
            style={{ animationDuration: "12s", animationDelay: "-7s" }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(77,145,255,0.02)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.02)_0.5px,transparent_0.5px)] dark:bg-[linear-gradient(rgba(77,145,255,0.01)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.01)_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-75" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="relative">
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-apple-blue-500/20 to-purple-500/20 dark:from-apple-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl opacity-30 -z-10"
            aria-hidden="true"
          />

          <div className="text-center space-y-6 sm:space-y-8 relative">
            <header className="space-y-4">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight"
              >
                <span className="inline-block mb-2" style={{ animationDelay: "200ms" }}>
                  Software Engineering
                </span>
                <br />
                <span className="inline-block relative" style={{ animationDelay: "400ms" }}>
                  Laboratory
                </span>
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light px-4 sm:px-0"
                style={{ animationDelay: "600ms" }}
              >
                Where innovation meets excellence in software engineering, fostering the next
                generation of tech leaders
              </p>
            </header>

            {/* Centered Join Discord Button using the interface */}
            {discordLink && (
              <nav
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
                aria-label="Social links"
                style={{ animationDelay: "800ms" }}
              >
                <a
                  href={discordLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                  text-lg font-medium hover:shadow-xl hover:scale-105 transform transition-all duration-300
                                  shadow-gray-900/10"
                >
                  <discordLink.icon className="w-6 h-6" />
                  <span>Join Discord</span>
                </a>
              </nav>
            )}

            <div className="flex justify-center pt-12 sm:pt-16">
              <dl className="max-w-4xl px-4 sm:px-0">
                <div
                  className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: "1000ms" }}
                >
                  <dt className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    Student Members
                  </dt>
                  <dd className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400 transition-colors duration-300">
                    <AnimatedCounter end={26} />
                    <span aria-hidden="true">+</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
