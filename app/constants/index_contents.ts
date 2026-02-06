import { FaAws, FaMicrosoft } from "react-icons/fa";
import { HiChartBar, HiCode, HiServer } from "react-icons/hi";
import { SiDatacamp, SiGooglecloud, SiJunipernetworks, SiRedhat } from "react-icons/si";
import type { GroupName, TypeInterestGroup } from "~/components/home/InterestGroups";
import type { TypePartner } from "~/components/home/Partners";

export const interestGroups: TypeInterestGroup[] = [
  {
    name: "Software Development",
    description:
      "Master modern software development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
    icon: HiCode,
  },
  {
    name: "Data Science",
    description:
      "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
    icon: HiChartBar,
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
      "Web Development (Frontend & Backend Development)",
      "API Development & Integration",
      "Mobile App Development",
    ],
    "Data Science": [
      "Machine Learning & AI",
      "Data Analysis & Visualization",
      "Python & R Programming",
      "Big Data Technologies",
    ],
    "Cloud and Infrastructure": [
      "Cloud Native",
      "Containerization",
      "Computer Networks",
      "Opertaing Systems",
      "DevOps",
      "System Administration",
    ],
  };
  return details[clubName];
};

export const getGroupSchedule = (clubName: GroupName): string => {
  const schedules: Record<GroupName, string> = {
    "Software Development": "Meets every Tuesday & Thursday",
    "Data Science": "Meets every Monday & Wednesday",
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
