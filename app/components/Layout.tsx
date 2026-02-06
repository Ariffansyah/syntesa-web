import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Outlet } from "react-router";
import type { SocialLink } from "~/types";
import Footer from "./Footer";
import Navbar from "./Navbar";

const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    href: "https://discord.gg/KeCh9tb8hv",
    icon: FaDiscord,
  },
  {
    name: "GitHub",
    href: "https://github.com/wearesyntesa",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/wearesyntesa",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
      <Navbar socialLinks={socialLinks} />
      <main>
        <Outlet />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
