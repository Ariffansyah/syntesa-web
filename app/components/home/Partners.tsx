import { useRef } from "react";
import type { IconType } from "react-icons";
import ScrambleText from "~/components/ScrambleText";
import { useInView } from "~/hooks/useInView";

export interface TypePartner {
  readonly name: string;
  readonly icon: IconType;
  readonly description: string;
}

interface PartnersProps {
  readonly partners: readonly TypePartner[];
}

export default function Partners({ partners }: PartnersProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.15 });
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isMarqueeInView = useInView(marqueeRef, { once: true, amount: 0.05 });

  const track = [...partners, ...partners];

  return (
    <section className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800"
        >
          <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHeaderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <ScrambleText
                as="h2"
                text="Network"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </div>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              02
            </span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHeaderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: isHeaderInView ? "100ms" : "0ms" }}
            >
              <h3 className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight">
                Collaborating with industry leaders to push boundaries.
              </h3>
            </div>
          </div>
        </div>

        <div
          ref={marqueeRef}
          className={`py-12 sm:py-24 overflow-hidden relative transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMarqueeInView ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="flex will-change-transform motion-safe:animate-[marquee-scroll_60s_linear_infinite]"
            style={{ width: "fit-content" }}
          >
            {[0, 1].map((half) => (
              <div key={half} className="flex gap-12 sm:gap-24 items-center shrink-0 px-6 sm:px-12">
                {track.map((partner, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: strictly for visual marquee
                    key={`partner-${half}-${index}`}
                    className="flex items-center justify-center shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  >
                    <partner.icon className="w-10 h-10 sm:w-16 sm:h-16 text-gray-900 dark:text-neutral-100" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
