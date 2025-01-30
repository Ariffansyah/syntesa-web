import { Link, NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';

const socialLinks = [
    {
        name: 'Discord',
        href: 'https://discord.gg/syntesa',
        icon: FaDiscord
    },
    {
        name: 'GitHub',
        href: 'https://github.com/syntesa-unesa',
        icon: FaGithub
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/syntesa.unesa',
        icon: FaInstagram
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/syntesa-unesa',
        icon: FaLinkedin
    }
];


const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Projects', href: '/projects' },
    { name: 'Research', href: '/research' },
    { name: 'Contact', href: '/contact' }
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
            <nav className={`sticky top-0 z-50 transition-all duration-500
                ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80'
                    : 'bg-transparent'
                } backdrop-blur-xl border-b border-gray-200/10`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                className="group relative px-3 py-2 text-2xl font-semibold
                                    text-gray-900 dark:text-white transition-all duration-300"
                            >
                                {/* Logo Background Effect */}
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50
                                    rounded-lg opacity-0 group-hover:opacity-100
                                    transition-all duration-300 -z-10" />

                                {/* Logo Text */}
                                <span className="relative bg-clip-text hover:text-transparent
                                    hover:bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-white dark:to-gray-300">
                                    Syntesa
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {[
                                { name: 'About', path: '/about' },
                                { name: 'Programs', path: '/programs' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        relative px-4 py-2 rounded-xl text-sm font-medium
                                        transition-all duration-300 group
                                        ${isActive
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-600 dark:text-gray-300'
                                        }
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Background Effect */}
                                            <div className={`absolute inset-0 rounded-xl transition-all duration-300
                                                ${isActive
                                                    ? 'bg-gray-100 dark:bg-gray-800/50'
                                                    : 'opacity-0 group-hover:opacity-100 bg-gray-100 dark:bg-gray-800/50'
                                                }
                                            `} />

                                            {/* Text */}
                                            <span className="relative">
                                                {item.name}
                                            </span>

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <span className="absolute -bottom-px left-1/2 -translate-x-1/2
                                                    w-1 h-1 rounded-full bg-gray-900 dark:bg-white" />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            {/* Footer */}
            <footer className="border-t border-gray-200/10 dark:border-gray-800/50 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50">
                <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {/* Branding Section */}
                        <div className="space-y-6 lg:pr-8">
                            <Link
                                to="/"
                                className="group inline-flex items-center space-x-2"
                            >
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
                            {/* Social Links */}
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
                                        {/* Tooltip */}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            {item.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="relative">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                                <span>Quick Links</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 ml-4" />
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="group flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                                            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="relative">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                                <span>Contact Us</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 ml-4" />
                            </h3>
                            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                <li className="group flex items-start space-x-3 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                                    <IoLocationSharp className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                                    <div className="flex-1">
                                        <p className="font-medium">Software Engineering Lab</p>
                                        <p>Universitas Negeri Surabaya</p>
                                        <p>Gedung A10 Lantai 3</p>
                                        <p>Jl. Ketintang, Surabaya</p>
                                    </div>
                                </li>
                                <li className="group">
                                    <a
                                        href="mailto:contact@syntesa.unesa.ac.id"
                                        className="flex items-center space-x-3 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
                                    >
                                        <HiMail className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transform transition-transform duration-300" />
                                        <span className="underline-offset-4 hover:underline">
                                            contact@syntesa.unesa.ac.id
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-200/10 dark:border-gray-800/50">
                        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} Software Engineering Lab UNESA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}