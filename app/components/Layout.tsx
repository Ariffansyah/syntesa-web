import { Link, NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import Footer from './Footer';
import Navbar from "./Navbar";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
            <Navbar socialLinks={socialLinks} />
            <main>{children}</main>
            <Footer socialLinks={socialLinks} quickLinks={quickLinks} />
        </div>
    );
}