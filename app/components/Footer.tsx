import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
import type { SocialLink } from "~/types";

interface FooterProps {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-gray-200/10 dark:border-gray-800/50 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
          <div className="space-y-8">
            <Link to="/" className="group inline-flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
                <span className="relative text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                  Syntesa
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Fostering innovation and excellence in software engineering education and research.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transform group-hover:scale-110 transition-all duration-300" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span>Contact Information</span>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 ml-4" />
              </h3>
              <ul className="space-y-6">
                <li className="group">
                  <div className="flex items-start space-x-3">
                    <IoLocationSharp className="w-5 h-5 mt-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">
                        Software Engineering Lab
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Universitas Negeri Surabaya
                        <br />
                        A10 Building, 3rd Floor, Room 3 & 4<br />
                        Surabaya, Indonesia
                      </p>

                      <a
                        href="https://maps.app.goo.gl/SPnszsaV74MFWKKA9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm text-apple-blue-600 dark:text-apple-blue-400 hover:text-apple-blue-700 dark:hover:text-apple-blue-300 mt-2 group"
                      >
                        <span>Get Directions</span>
                        <span className="transform transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <a
                    href="mailto:contact@syntesa.net"
                    className="flex items-center space-x-3 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                  >
                    <HiMail className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                      contact@syntesa.net
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/10 dark:border-gray-800/50">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Software Engineering Lab UNESA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
