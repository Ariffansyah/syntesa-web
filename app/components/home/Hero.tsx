import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";
import { useAnimatedCounter } from "~/hooks/useAnimatedCounter";
import type { SocialLink } from "~/types";

import { prefersReducedMotion } from "~/utils/prefersReducedMotion";

interface HeroProps {
  socialLinks: SocialLink[];
}

const headingLines = ["Software", "Engineering", "Laboratory"];

export default function Hero({ socialLinks }: HeroProps) {
  const discordLink = socialLinks.find((link) => link.name === "Discord");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "15%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative bg-white dark:bg-neutral-950 pt-24 sm:pt-32 min-h-screen flex flex-col border-y border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <span
        className="absolute top-4 left-4 text-gray-300 dark:text-neutral-700 text-xs font-mono select-none pointer-events-none"
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute top-4 right-4 text-gray-300 dark:text-neutral-700 text-xs font-mono select-none pointer-events-none"
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute bottom-4 left-4 text-gray-300 dark:text-neutral-700 text-xs font-mono select-none pointer-events-none"
        aria-hidden="true"
      >
        +
      </span>
      <span
        className="absolute bottom-4 right-4 text-gray-300 dark:text-neutral-700 text-xs font-mono select-none pointer-events-none"
        aria-hidden="true"
      >
        +
      </span>

      <div className="w-full h-px bg-gray-200 dark:bg-neutral-800" aria-hidden="true" />

      <motion.div
        style={{ y, opacity }}
        className="flex-1 max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-8 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 flex flex-col justify-between">
          <div>
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-gray-900 dark:text-neutral-100 leading-[1.15]"
            >
              {headingLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    className={`block motion-safe:animate-[slide-up_0.9s_cubic-bezier(0.33,1,0.68,1)_forwards] ${i === headingLines.length - 1 ? "text-gray-400 dark:text-neutral-600" : ""}`}
                    style={{
                      animationDelay: prefersReducedMotion ? "0s" : `${0.15 + i * 0.12}s`,
                      transform: prefersReducedMotion ? "none" : "translateY(110%)",
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div
            className="mt-12 lg:mt-24 motion-safe:animate-[fade-up_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            style={{
              animationDelay: prefersReducedMotion ? "0s" : "0.8s",
              opacity: prefersReducedMotion ? 1 : 0,
              transform: prefersReducedMotion ? "none" : "translateY(20px)",
            }}
          >
            <div className="flex items-center gap-4">
              {discordLink && (
                <a
                  href={discordLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-neutral-100 hover:text-gray-600 dark:hover:text-apple-blue-400 transition-colors"
                >
                  Join the network
                  <BsArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col bg-dot-grid">
          <div className="flex-1 p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800">
            <p
              className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed font-light motion-safe:animate-[fade-up_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              style={{
                animationDelay: prefersReducedMotion ? "0s" : "0.5s",
                opacity: prefersReducedMotion ? 1 : 0,
                transform: prefersReducedMotion ? "none" : "translateY(20px)",
              }}
            >
              We are a collective of researchers and engineers dedicated to advancing the field of
              software construction. Fostering the next generation of tech leaders through rigorous
              research and development.
            </p>
          </div>

          <dl className="grid grid-cols-2">
            {[
              { label: "Members", end: 26, suffix: "+", delay: 0.3 },
              { label: "Partners", end: 6, suffix: "", padDigits: 2, delay: 0.5 },
              { label: "Founded", end: 2023, suffix: "", start: 2000, delay: 0.6 },
            ].map((stat, i) => (
              <StatCell
                key={stat.label}
                label={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                start={stat.start}
                padDigits={stat.padDigits}
                delay={stat.delay}
                hasBorderRight={i % 2 === 0}
              />
            ))}
          </dl>

          <div
            className="p-6 sm:p-8 flex justify-end items-end flex-1 motion-safe:animate-[fade-in_0.6s_ease_forwards]"
            style={{
              animationDelay: prefersReducedMotion ? "0s" : "1.2s",
              opacity: prefersReducedMotion ? 1 : 0,
            }}
          >
            <div className="motion-safe:animate-[bounce-gentle_2s_ease-in-out_infinite]">
              <BsArrowDownRight
                className="w-6 h-6 text-gray-400 dark:text-neutral-600"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCell({
  label,
  end,
  suffix = "",
  start,
  padDigits,
  delay,
  hasBorderRight,
}: {
  label: string;
  end: number;
  suffix?: string;
  start?: number;
  padDigits?: number;
  delay: number;
  hasBorderRight: boolean;
}) {
  const { ref, initialDisplay } = useAnimatedCounter({
    end,
    start,
    suffix,
    padDigits,
    delay,
    duration: 1.5,
  });

  return (
    <div
      className={`p-6 sm:p-8 border-b border-gray-200 dark:border-neutral-800 ${hasBorderRight ? "border-r" : ""}`}
    >
      <dt className="block text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-2">
        {label}
      </dt>
      <dd
        ref={ref}
        className="block text-3xl sm:text-4xl font-light text-gray-900 dark:text-neutral-100 tabular-nums"
      >
        {initialDisplay}
      </dd>
    </div>
  );
}
