import { Link, NavLink } from '@remix-run/react';
import { type IconType } from 'react-icons';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: Array<{ name: string; path: string; }>;
    socialLinks: Array<{
        name: string;
        href: string;
        icon: IconType;
    }>;
    isScrolled: boolean;
}

export default function MobileMenu({ isOpen, onClose, links, socialLinks, isScrolled }: MobileMenuProps) {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 top-16 bg-gray-900/40 backdrop-blur-sm z-[48] md:hidden
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />

            {/* Dropdown Menu */}
            <div
                className={`fixed top-16 left-0 right-0 md:hidden z-[49]
                    transition-all duration-300 ease-out
                    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                {/* Main menu container */}
                <div className="bg-transparent">
                    {/* Navigation Links */}
                    <div className={`backdrop-blur-xl border-y border-gray-200/10 dark:border-gray-700/10
                        ${isScrolled
                            ? 'bg-white/80 dark:bg-gray-950/80'
                            : 'bg-white/95 dark:bg-gray-950/95'
                        }`}
                    >
                        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                            <div className="space-y-0.5">
                                {links.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={onClose}
                                        className={({ isActive }) => `
                                            flex items-center px-4 py-2.5 rounded-xl text-sm font-medium
                                            transition-all duration-200 relative
                                            ${isActive
                                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </nav>

                        {/* Social Links Section */}
                        <div className="border-t border-gray-200/10 dark:border-gray-700/10">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                        Connect with us
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {socialLinks.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50
                                                    transition-all duration-200 group relative"
                                            >
                                                <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-400
                                                    group-hover:text-gray-900 dark:group-hover:text-white
                                                    transition-colors duration-200"
                                                />
                                                {/* Tooltip */}
                                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1
                                                    bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                                    text-xs font-medium rounded-md opacity-0 group-hover:opacity-100
                                                    transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
