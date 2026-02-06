import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { SocialLink } from "~/types";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  socialLinks: SocialLink[];
}

export default function Navbar({ socialLinks }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const discordLink = socialLinks.find((link) => link.name === "Discord");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300
                ${isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl font-bold bg-clip-text text-transparent
                                    bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-white dark:to-gray-400"
            >
              Syntesa
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <div className="ml-4">
              <DarkModeToggle />
            </div>

            {discordLink && (
              <div className="hidden md:flex items-center ml-2">
                <a
                  href={discordLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full
                                            transition-colors duration-200 group relative
                                            bg-gray-900 dark:bg-white
                                            hover:bg-gray-500 dark:hover:bg-gray-300"
                >
                  <discordLink.icon className="w-5 h-5 text-gray-100 dark:text-gray-800" />
                  <span
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1
                                            bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                            text-xs font-medium rounded-md opacity-0 group-hover:opacity-100
                                            transition-opacity duration-200 whitespace-nowrap pointer-events-none"
                  >
                    Join Discord
                  </span>
                </a>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
