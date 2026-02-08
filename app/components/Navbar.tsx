import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link, useLocation } from "react-router";
import { logoDark, logoLight } from "~/assets/logo";
import type { SocialLink } from "~/types";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  socialLinks: SocialLink[];
}

const navItems = [
  { to: "/", label: "Home", index: "01" },
  { to: "/programs", label: "Programs", index: "02" },
  { to: "/about", label: "About", index: "03" },
];

export default function Navbar({ socialLinks }: NavbarProps) {
  const discordLink = socialLinks.find((link) => link.name === "Discord");
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;
      lastY.current = y;

      if (y < 80) {
        setHidden(false);
        return;
      }

      if (diff > 5) {
        setHidden(true);
        setMenuOpen(false);
      } else if (diff < -5) {
        setHidden(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setMenuOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 transition-transform duration-350 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-480 mx-auto w-full sm:border-x border-gray-200 dark:border-neutral-800">
          <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-12">
            <div className="flex items-center">
              <Link to="/" className="block" onClick={() => setMenuOpen(false)}>
                <img src={logoLight} alt="Syntesa" className="h-7 sm:h-8 w-auto dark:hidden" />
                <img src={logoDark} alt="Syntesa" className="h-7 sm:h-8 w-auto hidden dark:block" />
              </Link>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/programs"
                  className="text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
                >
                  Programs
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
                >
                  About
                </Link>
              </div>

              <div className="w-px h-6 bg-gray-200 dark:bg-neutral-800 hidden md:block" />

              <div className="flex items-center gap-3 sm:gap-4">
                <DarkModeToggle />

                {discordLink && (
                  <a
                    href={discordLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-neutral-100 hover:opacity-70 transition-opacity"
                  >
                    <span>Join</span>
                    <BsArrowRight />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 relative"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  <span
                    className={`block w-5 h-px bg-gray-900 dark:bg-neutral-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px] w-6" : ""}`}
                  />
                  <span
                    className={`block w-5 h-px bg-gray-900 dark:bg-neutral-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.5px] w-6" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="absolute inset-0 bg-white dark:bg-neutral-950 bg-dot-grid" />

        <div className="relative h-[100dvh] flex flex-col pt-16">
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10">
            <nav className="space-y-2">
              {navItems.map((item, i) => {
                const isActive = pathname === item.to;

                return (
                  <div key={item.to} className="overflow-hidden">
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center gap-4 sm:gap-6 py-3 transition-all duration-300 ${menuOpen ? "animate-[menu-slide-up_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]" : ""}`}
                      style={{
                        animationDelay: menuOpen ? `${150 + i * 80}ms` : "0ms",
                        opacity: menuOpen ? 0 : undefined,
                        transform: menuOpen ? "translateY(100%)" : undefined,
                      }}
                    >
                      <span className="text-xs font-mono text-gray-400 dark:text-neutral-600 tracking-wider shrink-0 w-8">
                        {item.index}
                      </span>

                      <span className="relative">
                        <span
                          className={`block text-4xl sm:text-5xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2 ${
                            isActive
                              ? "text-gray-900 dark:text-neutral-100"
                              : "text-gray-400 dark:text-neutral-600 group-hover:text-gray-900 dark:group-hover:text-neutral-100"
                          }`}
                        >
                          {item.label}
                        </span>
                      </span>

                      {isActive && (
                        <span className="text-gray-900 dark:text-apple-blue-400 ml-auto">
                          <BsArrowRight className="w-5 h-5" />
                        </span>
                      )}
                    </Link>

                    <div className="h-px bg-gray-100 dark:bg-neutral-800/50" />
                  </div>
                );
              })}
            </nav>
          </div>

          <div
            className={`border-t border-gray-200 dark:border-neutral-800 px-6 sm:px-10 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? "animate-[menu-fade-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.4s_forwards]" : ""}`}
            style={{
              opacity: menuOpen ? 0 : undefined,
            }}
          >
            <div className="flex flex-col gap-5">
              <a
                href="mailto:contact@syntesa.net"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
              >
                <HiMail className="w-4 h-4" />
                <span>contact@syntesa.net</span>
              </a>

              <div className="flex items-center gap-4">
                {socialLinks.map((item, i) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-all duration-300 ${menuOpen ? "animate-[menu-fade-up_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]" : ""}`}
                    style={{
                      animationDelay: menuOpen ? `${500 + i * 60}ms` : "0ms",
                      opacity: menuOpen ? 0 : undefined,
                    }}
                    title={item.name}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 dark:text-neutral-600 uppercase tracking-wider">
                  SE Lab UNESA
                </span>
                <span className="text-xs font-mono text-gray-300 dark:text-neutral-700 tracking-wider">
                  &copy; {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
