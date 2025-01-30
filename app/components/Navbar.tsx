import { Link, NavLink } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import MobileMenu from './MobileMenu';
import { type IconType } from 'react-icons';

interface NavbarProps {
    socialLinks: Array<{
        name: string;
        href: string;
        icon: IconType;
    }>;
}

const navigationLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
];

export default function Navbar({ socialLinks }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const discordLink = socialLinks.find(link => link.name === 'Discord');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300
        ${isScrolled
                        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl'
                        : 'bg-transparent'}
    `}
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

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-900/50
                                rounded-full p-1 backdrop-blur-xl">
                                {navigationLinks.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        className={({ isActive }) => `
                                            px-4 py-2 text-sm rounded-full transition-all duration-200
                                            ${isActive
                                                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-800/50'}
                                        `}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Discord Link Only for Desktop */}
                            {discordLink && (
                                <div className="hidden md:flex items-center ml-6">
                                    <a
                                        href={discordLink.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full
                                            transition-colors duration-200 group relative bg-gray-900 dark:bg-white hover:bg-gray-500 dark:hover:bg-gray-900"
                                    >
                                        <discordLink.icon className="w-5 h-5 text-gray-100 dark:text-gray-400" />
                                        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1
                                            bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                            text-xs font-medium rounded-md opacity-0 group-hover:opacity-100
                                            transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                            Join Discord
                                        </span>
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50
        transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <span className={`absolute w-5 h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300
            ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1'}`} />
                                <span className={`absolute w-5 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300
            ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`absolute w-5 h-0.5 bg-gray-900 dark:bg-white transform transition-all duration-300
            ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1'}`} />
                            </div>
                        </button>

                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                links={navigationLinks}
                socialLinks={socialLinks}
                isScrolled={isScrolled}
            />
        </>
    );
}
