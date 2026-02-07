import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import type { SocialLink } from "~/types";

export const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    href: "https://discord.gg/F7Wx88yZFy",
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
