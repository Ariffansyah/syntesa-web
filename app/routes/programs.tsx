import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import type { MetaFunction } from "react-router";
import Reveal, { StaggerChildren, StaggerItem } from "~/components/Reveal";
import { SITE_META } from "~/constants/site_meta";
import { prefersReducedMotion } from "~/utils/prefersReducedMotion";

export const meta: MetaFunction = () => [
  { title: `Programs - ${SITE_META.title}` },
  {
    name: "description",
    content:
      "Explore programs offered by the Software Engineering Lab at Universitas Negeri Surabaya.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  topics: string[];
}

const programs: Program[] = [
  {
    id: "01",
    title: "Software Development Track",
    subtitle: "Build. Ship. Iterate.",
    description:
      "A comprehensive program covering modern software development practices. Members work through structured learning modules and build real projects using industry-standard tools and methodologies.",
    format: "Weekly sessions + project work",
    topics: [
      "Web Development (Frontend & Backend)",
      "API Design & RESTful Services",
      "Mobile Application Development",
      "Database Design & Management",
      "Version Control & Collaboration (Git)",
      "Software Testing & Quality Assurance",
      "Agile Development Practices",
      "Machine Learning Integration",
    ],
  },
  {
    id: "02",
    title: "Cloud & Infrastructure Track",
    subtitle: "Deploy. Scale. Secure.",
    description:
      "Focused on cloud computing, networking, and systems administration. Members gain hands-on experience with enterprise-grade infrastructure tools and earn industry-recognized certifications.",
    format: "Bi-weekly sessions + lab exercises",
    topics: [
      "Linux System Administration",
      "Computer Networks & Protocols",
      "Cloud Platforms (AWS, GCP, Azure)",
      "Container Orchestration (Docker, Kubernetes)",
      "CI/CD Pipeline Design",
      "Network Security & Hardening",
      "Infrastructure as Code",
      "Monitoring & Observability",
    ],
  },
];

const certifications = [
  { name: "Red Hat System Administrator", partner: "Red Hat", track: "Cloud & Infrastructure" },
  {
    name: "Juniper Networks Associate",
    partner: "Juniper Networks",
    track: "Cloud & Infrastructure",
  },
  { name: "DataCamp Data Analyst", partner: "DataCamp", track: "Software Development" },
  { name: "Microsoft Azure Fundamentals", partner: "Microsoft", track: "Cloud & Infrastructure" },
];

const headingLines = ["Our", "Programs"];

const schedule = [
  { day: "Thursday", activity: "Cloud & Infrastructure Session", note: "Offline" },
  { day: "Friday", activity: "Cloud & Infrastructure Session", note: "Offline" },
  { day: "Friday", activity: "Software Development Session", note: "Offline" },
  { day: "Saturday", activity: "Cloud & Infrastructure Session", note: "Online" },
  { day: "Saturday", activity: "Software Development Session", note: "Online" },
];

export default function Programs() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(programs[0].id);

  return (
    <div className="space-y-2">
      <section className="relative bg-white dark:bg-neutral-950 pt-24 sm:pt-32 border-y border-gray-200 dark:border-neutral-800">
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

        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium tracking-tight text-gray-900 dark:text-neutral-100 leading-[0.95]">
                {headingLines.map((line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span
                      className={`block ${i === headingLines.length - 1 ? "text-gray-400 dark:text-neutral-600" : ""}`}
                      initial={{ y: prefersReducedMotion ? "0%" : "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.9,
                        delay: prefersReducedMotion ? 0 : 0.15 + i * 0.12,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-12 lg:p-16 flex items-end bg-dot-grid">
              <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 leading-relaxed font-light"
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 16,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.5,
                  duration: prefersReducedMotion ? 0 : 0.6,
                  ease,
                }}
              >
                Structured learning tracks designed to take you from fundamentals to professional
                competency. Backed by industry partnerships and hands-on project work.
              </motion.p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-800">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4"
              initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.6,
                duration: prefersReducedMotion ? 0 : 0.5,
                ease,
              }}
            >
              {[
                { label: "Learning Tracks", value: "02" },
                {
                  label: "Certifications",
                  value: `${certifications.length.toString().padStart(2, "0")}`,
                },
                { label: "Industry Partners", value: "06" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-8 ${i % 2 === 0 ? "border-r border-gray-200 dark:border-neutral-800" : ""} ${i < 2 ? "md:border-r" : "md:border-r-0"} ${i < 1 ? "border-b md:border-b-0 border-gray-200 dark:border-neutral-800" : ""}`}
                >
                  <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-400 font-mono mb-2">
                    {stat.label}
                  </span>
                  <span className="block text-3xl sm:text-4xl font-light text-gray-900 dark:text-neutral-100">
                    {stat.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                Learning Tracks
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </span>
          </div>

          {programs.map((program, idx) => (
            <div
              key={program.id}
              className={
                idx < programs.length - 1 ? "border-b border-gray-200 dark:border-neutral-800" : ""
              }
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedProgram(expandedProgram === program.id ? null : program.id)
                }
                className="w-full text-left group"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                  <div className="sm:col-span-2 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800 flex items-center">
                    <span className="text-2xl font-light text-gray-900 dark:text-neutral-100 font-mono">
                      {program.id}
                    </span>
                  </div>
                  <div className="sm:col-span-6 p-6 sm:p-8 sm:border-r border-gray-200 dark:border-neutral-800">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-neutral-100 group-hover:text-gray-600 dark:group-hover:text-neutral-300 transition-colors">
                      {program.title}
                    </h3>
                    <p className="mt-1 text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                      {program.subtitle}
                    </p>
                  </div>
                  <div className="sm:col-span-4 p-6 sm:p-8 flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-600 mb-1">
                        Format
                      </span>
                      <span className="text-sm text-gray-900 dark:text-neutral-100">
                        {program.format}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedProgram === program.id ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-400 dark:text-neutral-600 text-2xl shrink-0 ml-4"
                    >
                      +
                    </motion.span>
                  </div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedProgram === program.id ? "auto" : 0,
                  opacity: expandedProgram === program.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 dark:border-neutral-800">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-6 sm:p-12 lg:border-r border-gray-200 dark:border-neutral-800">
                      <p className="text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="p-6 sm:p-12 border-t lg:border-t-0 border-gray-200 dark:border-neutral-800">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-6">
                        Curriculum Topics
                      </h4>
                      <div className="space-y-0">
                        {program.topics.map((topic, i) => (
                          <div
                            key={topic}
                            className={`flex items-center gap-4 py-3 ${i < program.topics.length - 1 ? "border-b border-gray-100 dark:border-neutral-800/50" : ""}`}
                          >
                            <span className="text-xs font-mono text-gray-400 dark:text-neutral-600 shrink-0">
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-neutral-300">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-neutral-800">
            <div className="lg:col-span-4 p-6 sm:p-12 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-neutral-800 bg-hatching relative">
              <Reveal>
                <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                  Weekly Schedule
                </h2>
              </Reveal>
              <span
                className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
                aria-hidden="true"
              >
                02
              </span>
            </div>
            <div className="lg:col-span-8 p-6 sm:p-12">
              <Reveal delay={0.1}>
                <p className="text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed">
                  Regular sessions are held at the Software Engineering Lab, A10 Building, 3rd
                  Floor. Offline sessions start at 9 AM. Both tracks are open to all members.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-12 border-b border-gray-200 dark:border-neutral-800 text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-600">
            <div className="col-span-3 p-4 px-6 border-r border-gray-200 dark:border-neutral-800">
              Day
            </div>
            <div className="col-span-6 p-4 px-6 border-r border-gray-200 dark:border-neutral-800">
              Activity
            </div>
            <div className="col-span-3 p-4 px-6">Format</div>
          </div>

          <StaggerChildren stagger={0.04}>
            {schedule.map((slot, i) => (
              <StaggerItem key={`${slot.day}-${slot.activity}`}>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-12 ${i < schedule.length - 1 ? "border-b border-gray-200 dark:border-neutral-800" : ""}`}
                >
                  <div className="sm:col-span-3 p-6 sm:border-r border-gray-200 dark:border-neutral-800">
                    <span className="font-medium text-gray-900 dark:text-neutral-100">
                      {slot.day}
                    </span>
                  </div>
                  <div className="sm:col-span-6 p-6 sm:border-r border-gray-200 dark:border-neutral-800">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      {slot.activity}
                    </span>
                  </div>
                  <div className="sm:col-span-3 p-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                      {slot.note}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="border-t border-gray-200 dark:border-neutral-800 p-6 sm:px-6">
            <p className="text-xs text-gray-400 dark:text-neutral-600 font-mono uppercase tracking-wider">
              The lab is also open on other days for members to drop by and work on projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800 bg-hatching relative">
            <Reveal>
              <h2 className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400">
                Certification Pathways
              </h2>
            </Reveal>
            <span
              className="absolute bottom-2 right-4 text-[4rem] sm:text-[6rem] font-mono font-bold leading-none text-gray-100 dark:text-neutral-800 select-none pointer-events-none"
              aria-hidden="true"
            >
              03
            </span>
          </div>

          <div className="p-6 sm:p-12 border-b border-gray-200 dark:border-neutral-800">
            <Reveal>
              <p className="text-lg text-gray-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
                Through our industry partnerships, lab members have access to certification
                preparation materials and exam vouchers for the following programs *(TnC Applied).
              </p>
            </Reveal>
          </div>

          <StaggerChildren
            stagger={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((cert, i) => (
              <StaggerItem key={cert.name}>
                <div
                  className={`p-6 sm:p-8 border-b sm:border-b-0 ${i % 2 === 0 ? "sm:border-r" : ""} ${i < 2 ? "sm:border-b" : ""} ${i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"} ${i < 3 ? "lg:border-b" : "lg:border-b-0"} border-gray-200 dark:border-neutral-800 min-h-35 flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-600 block mb-3">
                      {cert.partner}
                    </span>
                    <h3 className="font-medium text-gray-900 dark:text-neutral-100">{cert.name}</h3>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-neutral-400 mt-4">
                    {cert.track}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="p-6 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <Reveal>
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-neutral-100">
                  Ready to learn?
                </h2>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Applications for the 2026 batch are closed. Join our Discord to stay updated on
                  future openings.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="https://discord.gg/F7Wx88yZFy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3 border border-gray-900 dark:border-apple-blue-500 bg-gray-900 dark:bg-apple-blue-500 text-white dark:text-white text-sm font-medium hover:bg-transparent hover:text-gray-900 dark:hover:bg-transparent dark:hover:text-apple-blue-400 transition-colors uppercase tracking-wider shrink-0"
              >
                Join Discord
                <BsArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
