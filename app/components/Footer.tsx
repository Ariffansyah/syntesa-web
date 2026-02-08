import { useRef } from "react";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
import { logoDark, logoLight } from "~/assets/logo";
import { useInView } from "~/hooks/useInView";
import type { SocialLink } from "~/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const isLeftInView = useInView(leftRef, { once: true, amount: 0.15 });
  const rightRef = useRef<HTMLDivElement>(null);
  const isRightInView = useInView(rightRef, { once: true, amount: 0.15 });

  return (
    <footer className="bg-white dark:bg-neutral-950 border-y border-gray-200 dark:border-neutral-800">
      <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            ref={leftRef}
            className="p-6 sm:p-8 md:p-12 lg:border-r border-gray-200 dark:border-neutral-800 flex flex-col justify-between min-h-0 sm:min-h-75 bg-dot-grid"
          >
            <div>
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <Link to="/" className="inline-block">
                  <img src={logoLight} alt="Syntesa" className="h-10 w-auto mb-3 dark:hidden" />
                  <img
                    src={logoDark}
                    alt="Syntesa"
                    className="h-10 w-auto mb-3 hidden dark:block"
                  />
                  <span className="block text-2xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 uppercase">
                    Syntesa
                  </span>
                </Link>
              </div>
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isLeftInView ? "100ms" : "0ms" }}
              >
                <p className="mt-4 text-sm text-gray-500 dark:text-neutral-400 max-w-sm">
                  Fostering innovation and excellence in software engineering education and
                  research.
                </p>
              </div>
            </div>

            <div
              className={`mt-12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLeftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: isLeftInView ? "200ms" : "0ms" }}
            >
              <p className="text-xs font-mono text-gray-400 dark:text-neutral-600 uppercase tracking-wider">
                &copy; {new Date().getFullYear()} SE Lab UNESA.
              </p>
            </div>
          </div>

          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2">
            <div className="p-8 sm:p-12 border-t lg:border-t-0 border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-neutral-800">
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-8">
                  Location
                </h3>
              </div>
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isRightInView ? "100ms" : "0ms" }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <IoLocationSharp className="w-5 h-5 text-gray-900 dark:text-neutral-100 shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-600 dark:text-neutral-300">
                      <p className="font-medium text-gray-900 dark:text-neutral-100">
                        Software Engineering Lab
                      </p>
                      <p className="mt-1">Universitas Negeri Surabaya</p>
                      <p>A10 Building, 3rd Floor, Room 3 &amp; 4</p>
                      <p>Surabaya, Indonesia</p>

                      <a
                        href="https://maps.app.goo.gl/SPnszsaV74MFWKKA9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-gray-900 dark:text-apple-blue-400 border-b border-gray-200 dark:border-neutral-800 hover:border-gray-900 dark:hover:border-apple-blue-400 transition-colors"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 border-t lg:border-t-0 border-gray-200 dark:border-neutral-800">
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isRightInView ? "60ms" : "0ms" }}
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-8">
                  Connect
                </h3>
              </div>
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: isRightInView ? "160ms" : "0ms" }}
              >
                <div className="space-y-6">
                  <a
                    href="mailto:contact@syntesa.net"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
                  >
                    <HiMail className="w-5 h-5" />
                    <span>contact@syntesa.net</span>
                  </a>

                  <div className="pt-6 border-t border-gray-200 dark:border-neutral-800">
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((item, i) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-gray-500 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-apple-blue-400 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isRightInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                          style={{ transitionDelay: isRightInView ? `${200 + i * 50}ms` : "0ms" }}
                          title={item.name}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="sr-only">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
