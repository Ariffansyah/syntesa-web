import { useRef } from "react";
import Reveal from "~/components/Reveal";
import ScrambleText from "~/components/ScrambleText";
import GradientOrb from "~/components/ui/GradientOrb";
import { useInView } from "~/hooks/useInView";

export interface TypeSenior {
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly logo: string;
  readonly prodi: string;
  readonly batch: string;
}

interface SeniorsProps {
  seniors: readonly TypeSenior[];
}

export default function Seniors({ seniors }: SeniorsProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.15 });

  return (
    <section
      aria-labelledby="placements-heading"
      className="relative bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800 overflow-hidden"
    >
      <GradientOrb color="green" position="top-right" size="md" />
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
          <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <ScrambleText
                as="p"
                text="Internships"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              05
            </span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <Reveal delay={0.1}>
              <h2
                id="placements-heading"
                className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight"
              >
                Where our members have interned.
              </h2>
            </Reveal>
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2">
          {seniors.map((senior, index) => (
            <SeniorCell
              key={senior.name}
              senior={senior}
              index={index}
              total={seniors.length}
              isVisible={isGridInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SeniorCell({
  senior,
  index,
  total,
  isVisible,
}: {
  senior: TypeSenior;
  index: number;
  total: number;
  isVisible: boolean;
}) {
  const isLeftCol = index % 2 === 0;
  const isLast = index === total - 1;
  const isLastRow = index >= total - 2;

  return (
    <article
      className={[
        "group p-6 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        "hover:bg-gray-50 dark:hover:bg-neutral-900",
        !isLast ? "border-b border-gray-200 dark:border-neutral-800" : "",
        isLeftCol ? "lg:border-r lg:border-gray-200 dark:lg:border-neutral-800" : "",
        isLastRow ? "lg:border-b-0" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <figure className="mb-6">
        <img
          src={senior.logo}
          alt={senior.company}
          className="h-10 w-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
        />
      </figure>

      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-neutral-100 leading-tight">
        {senior.company}
      </h3>

      <p className="text-base text-gray-500 dark:text-neutral-400 mt-2">{senior.name}</p>
      <p className="text-sm text-gray-400 dark:text-neutral-500 mt-0.5">{senior.role}</p>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-500 border border-gray-200 dark:border-neutral-800 px-2.5 py-1 group-hover:border-gray-300 dark:group-hover:border-neutral-700 transition-colors duration-300">
          {senior.prodi}
        </span>
        <time
          dateTime={senior.batch}
          className="text-xs font-mono text-gray-400 dark:text-neutral-600"
        >
          {senior.batch}
        </time>
      </div>
    </article>
  );
}
