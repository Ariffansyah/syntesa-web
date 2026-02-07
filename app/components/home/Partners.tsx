import { memo, useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";

export type PartnerCategory = "Education" | "Infrastructure" | "Technology";

export interface TypePartner {
  readonly name: string;
  readonly icon: IconType;
  readonly description: string;
  readonly category: PartnerCategory;
}

interface PartnersProps {
  readonly partners: readonly TypePartner[];
}

export default function Partners(props: PartnersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { displayPartners, displayShuffledPartners } = useMemo(() => {
    if (!isVisible) {
      return {
        displayPartners: [] as readonly TypePartner[],
        displayShuffledPartners: [] as readonly TypePartner[],
      };
    }

    const shuffled = [...props.partners].sort(() => Math.random() - 0.5);
    const duplicated = [...props.partners, ...props.partners];
    const duplicatedShuffled = [...shuffled, ...shuffled];

    return {
      displayPartners: duplicated,
      displayShuffledPartners: duplicatedShuffled,
    };
  }, [props.partners, isVisible]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="partners-heading"
      className="relative py-8 sm:py-14 border-t border-gray-200/10 dark:border-gray-800/50
                      bg-gradient-to-b from-white via-gray-50 to-white
                      dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="mx-auto">
        <header className="text-center mb-8 sm:mb-12 px-6">
          <h2
            id="partners-heading"
            className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2"
          >
            Empowering Innovation Through Partnership
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Collaborating with leading technology companies to provide students with
            industry-standard tools and resources
          </p>
        </header>

        {isVisible && (
          <section className="relative" aria-label="Partner logos">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-black/20 z-20" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-black/20 z-20" />
            </div>

            <PartnerRow partners={displayPartners} direction="left" />
            <PartnerRow partners={displayShuffledPartners} direction="right" />
          </section>
        )}
      </div>
    </section>
  );
}

const DIRECTION_ANIMATION = {
  left: "animate-slide-left",
  right: "animate-slide-right",
} as const;

const PartnerRow = memo(
  ({ partners, direction }: { partners: readonly TypePartner[]; direction: "left" | "right" }) => (
    <div className="overflow-hidden py-4 [contain:layout_style_paint]">
      <div
        className={`relative flex w-[200%] transform-gpu will-change-transform [backface-visibility:hidden] ${DIRECTION_ANIMATION[direction]}`}
      >
        <ul className="flex items-center justify-around w-full gap-4">
          {partners.map((partner, index) => (
            <MarqueeItem
              key={`${partner.name}-${index}-${direction}`}
              partner={partner}
              tooltipPosition={direction === "left" ? "top" : "bottom"}
            />
          ))}
        </ul>
      </div>
    </div>
  ),
);
PartnerRow.displayName = "PartnerRow";

const MarqueeItem = memo(
  ({ partner, tooltipPosition }: { partner: TypePartner; tooltipPosition: "top" | "bottom" }) => (
    <li className="flex-shrink-0 group">
      <div className={`relative px-4 py-4 ${tooltipPosition === "top" ? "sm:pt-16" : "sm:pb-16"}`}>
        <article
          className="relative w-32 sm:w-48 h-16 sm:h-24
                    bg-white/50 dark:bg-gray-800/30
                    rounded-xl border border-gray-200/50 dark:border-gray-700/30
                    flex items-center justify-center p-4 sm:p-6
                    transition-[box-shadow,transform,border-color] duration-500
                    hover:shadow-lg hover:scale-105
                    group-hover:border-apple-blue-500/50"
        >
          <partner.icon
            className="w-8 h-8 sm:w-10 sm:h-10
                        text-gray-400 dark:text-gray-500
                        group-hover:text-gray-900 dark:group-hover:text-white
                        transition-colors duration-300"
          />

          <div
            role="tooltip"
            className={`absolute ${tooltipPosition === "top" ? "-top-12" : "bottom-[-3rem]"} left-1/2 -translate-x-1/2 w-max
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200 z-20
                            pointer-events-none hidden sm:block`}
          >
            <div
              className="bg-gray-900 dark:bg-white
                            text-white dark:text-gray-900
                            text-sm font-medium px-4 py-2 rounded-xl
                            shadow-lg
                            whitespace-nowrap"
            >
              <strong className="block font-semibold mb-1">{partner.name}</strong>
              <span className="text-gray-300 dark:text-gray-600 text-xs">
                {partner.description}
              </span>
            </div>
          </div>
        </article>
      </div>
    </li>
  ),
);

MarqueeItem.displayName = "MarqueeItem";
