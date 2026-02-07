import { FaAws, FaMicrosoft } from "react-icons/fa";
import { HiCode, HiServer } from "react-icons/hi";
import { SiDatacamp, SiGooglecloud, SiJunipernetworks, SiRedhat } from "react-icons/si";
import type { GroupName, TypeInterestGroup } from "~/components/home/InterestGroups";
import type { TypePartner } from "~/components/home/Partners";

export const interestGroups: TypeInterestGroup[] = [
  {
    name: "Software Development",
    description:
      "Master modern software engineering by building scalable applications and intelligent systems. From web platforms to AI integration, learn to solve real-world problems with code.",
    icon: HiCode,
  },
  {
    name: "Cloud and Infrastructure",
    description:
      "Learn to bridge the gap between development and operations. Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
    icon: HiServer,
  },
];

export const getGroupDetails = (clubName: GroupName): string[] => {
  const details: Record<GroupName, string[]> = {
    "Software Development": [
      "Web Development (Frontend & Backend)",
      "API Development & Integration",
      "Mobile App Development",
      "Machine Learning & AI Implementation",
      "Data Analysis & Visualization",
    ],
    "Cloud and Infrastructure": [
      "Cloud Native & Microservices",
      "Computer Networks & Security",
      "Operating Systems (Linux/Unix)",
      "DevOps & CI/CD Pipelines",
      "System Administration",
    ],
  };
  return details[clubName];
};

export const getGroupSchedule = (clubName: GroupName): string => {
  const schedules: Record<GroupName, string> = {
    "Software Development": "Meets every Friday",
    "Cloud and Infrastructure": "Meets every Wednesday & Friday",
  };
  return schedules[clubName];
};

export const partnerships: TypePartner[] = [
  {
    name: "DataCamp",
    icon: SiDatacamp,
    description: "Official learning partner for data science education",
    category: "Education",
  },
  {
    name: "Juniper Networks",
    icon: SiJunipernetworks,
    description: "Infrastructure and networking solutions partner",
    category: "Infrastructure",
  },
  {
    name: "Red Hat",
    icon: SiRedhat,
    description: "Open source and cloud technology partner",
    category: "Technology",
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft,
    description: "Cloud and development tools partner",
    category: "Technology",
  },
  {
    name: "AWS",
    icon: FaAws,
    description: "Cloud infrastructure partner",
    category: "Infrastructure",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    description: "Cloud and AI technology partner",
    category: "Technology",
  },
];
