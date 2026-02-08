import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import BorderDraw from "~/components/BorderDraw";
import ScrambleText from "~/components/ScrambleText";
import { useInView } from "~/hooks/useInView";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What's the application process?",
    answer:
      "Our application process consists of three steps: online application submission, technical assessment, and team interview. The entire process typically takes 2-3 weeks.",
  },
  {
    question: "What are the prerequisites?",
    answer:
      "Basic programming knowledge, strong problem-solving skills, and passion for technology. Specific requirements vary by interest groups.",
  },
  {
    question: "When can I start?",
    answer:
      "Applications for the 2026 batch are now closed. Join our Discord to stay updated on future openings.",
  },
];

const benefits = [
  { title: "Hands-on Learning", description: "Work on real projects with real impact" },
  { title: "Expert Mentorship", description: "Learn from industry practitioners and academics" },
  { title: "Research Opportunities", description: "Push the boundaries of software engineering" },
  { title: "Growth Opportunities", description: "Build your career with practical experience" },
];

export default function JoinCard() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.1 });
  const rightRef = useRef<HTMLDivElement>(null);
  const isRightInView = useInView(rightRef, { once: true, amount: 0.1 });
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.15 });

  return (
    <section
      aria-labelledby="join-heading"
      className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800"
    >
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
                text="Join Us"
                className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400"
              />
            </div>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              06
            </span>
          </div>
          <div className="lg:col-span-8 p-6 sm:p-12">
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHeaderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: isHeaderInView ? "100ms" : "0ms" }}
            >
              <h3
                id="join-heading"
                className="text-3xl sm:text-4xl font-medium text-gray-900 dark:text-neutral-100 leading-tight"
              >
                Begin your journey in software innovation.
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div ref={leftRef} className="lg:border-r border-gray-200 dark:border-neutral-800">
            <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800">
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <p className="text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed mb-8">
                  Join a community of passionate developers, researchers, and innovators. Our lab
                  offers mentorship from industry experts and hands-on project experience.
                </p>
              </div>

              <div className="space-y-0">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className={`flex items-start gap-4 py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${i < benefits.length - 1 ? "border-b border-gray-100 dark:border-neutral-800/50" : ""}`}
                    style={{ transitionDelay: isLeftInView ? `${(i + 1) * 80}ms` : "0ms" }}
                  >
                    <span className="font-mono text-xs text-gray-400 dark:text-neutral-600 mt-1">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-neutral-100">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`p-6 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: isLeftInView ? "420ms" : "0ms" }}
            >
              <div>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  Applications for the{" "}
                  <span className="text-gray-900 dark:text-neutral-100 font-medium">
                    2026 batch
                  </span>{" "}
                  are now closed.
                </p>
                <p className="text-xs text-gray-400 dark:text-neutral-600 mt-1 font-mono uppercase tracking-wider">
                  Stay tuned for future openings
                </p>
              </div>
              <BorderDraw
                as="a"
                href="https://discord.gg/F7Wx88yZFy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3 border border-gray-900 dark:border-apple-blue-500 bg-gray-900 dark:bg-apple-blue-500 text-white dark:text-white text-sm font-medium hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-apple-blue-400 transition-colors uppercase tracking-wider"
                delay={0.3}
              >
                Join Discord
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </BorderDraw>
            </div>
          </div>

          <div ref={rightRef} className="p-6 sm:p-12 bg-dot-grid">
            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-8">
                Frequently Asked Questions
              </h4>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: isRightInView ? `${(i + 1) * 100}ms` : "0ms" }}
                >
                  <FAQItem
                    faq={faq}
                    isExpanded={expandedFaq === faq.question}
                    onToggle={() =>
                      setExpandedFaq(expandedFaq === faq.question ? null : faq.question)
                    }
                    isLast={i === faqs.length - 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isExpanded,
  onToggle,
  isLast,
}: {
  faq: FAQ;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  return (
    <div className={`${!isLast ? "border-b border-gray-100 dark:border-neutral-800/50" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 text-left flex justify-between items-center gap-4 group"
      >
        <span className="font-medium text-gray-900 dark:text-neutral-100 group-hover:text-gray-600 dark:group-hover:text-neutral-300 transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-gray-400 dark:text-neutral-600 text-xl shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-gray-600 dark:text-neutral-400 leading-relaxed max-w-lg">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}
