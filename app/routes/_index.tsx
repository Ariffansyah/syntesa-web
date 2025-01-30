import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/home/Hero";
import JoinCard from "~/components/home/JoinCard";
import Partners, { TypePartner } from "~/components/home/Partners";
import Projects, { TypeProject } from "~/components/home/Projects";
import StudyClubs, { TypeStudyClub } from "~/components/home/StudyClubs";
import Layout from "~/components/Layout";

import {
  HiCode, // Web Development
  HiChartBar, // Data Science
  HiServer, // DevOps
  HiCog // System Administration
} from 'react-icons/hi';

import {
  SiDatacamp,
  SiJunipernetworks,
  SiRedhat,
  SiGooglecloud
} from 'react-icons/si';

import { FaMicrosoft, FaAws } from "react-icons/fa";


const studyClubs: TypeStudyClub[] = [
  {
    name: "Web Development",
    description: "Master modern web development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
    icon: HiCode
  },
  {
    name: "Data Science",
    description: "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
    icon: HiChartBar
  },
  {
    name: "DevOps",
    description: "Learn to bridge the gap between development and operations. Master continuous integration, deployment, and modern cloud infrastructure.",
    icon: HiServer
  },
  {
    name: "System Administration",
    description: "Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
    icon: HiCog
  }
];


const getClubDetails = (clubName: string) => {
  const details = {
    "Web Development": [
      "Frontend & Backend Development",
      "React, Node.js, and Modern Frameworks",
      "UI/UX Design Principles",
      "API Development & Integration"
    ],
    "Data Science": [
      "Machine Learning & AI",
      "Data Analysis & Visualization",
      "Python & R Programming",
      "Big Data Technologies"
    ],
    "DevOps": [
      "CI/CD Pipeline Implementation",
      "Docker & Kubernetes",
      "Cloud Services (AWS, GCP, Azure)",
      "Infrastructure as Code"
    ],
    "System Administration": [
      "Network Configuration & Security",
      "Server Management",
      "Linux Administration",
      "Monitoring & Troubleshooting"
    ]
  };
  return details[clubName as keyof typeof details];
};

const getClubSchedule = (clubName: string) => {
  const schedules = {
    "Web Development": "Meets every Tuesday & Thursday",
    "Data Science": "Meets every Monday & Wednesday",
    "DevOps": "Meets every Wednesday & Friday",
    "System Administration": "Meets every Monday & Thursday"
  };
  return schedules[clubName as keyof typeof schedules];
};

const latestProjects: TypeProject[] = [
  {
    title: "AI-Powered Traffic Management",
    description: "Developing intelligent systems for optimizing urban traffic flow",
    status: "Ongoing" as const,
    progress: 75,
  },
  {
    title: "Smart Campus Initiative",
    description: "Creating an IoT-based infrastructure for campus automation",
    status: "Completed" as const,
    progress: 100,
  },
  {
    title: "Blockchain for Education",
    description: "Implementing secure credential verification system",
    status: "Planning" as const,
    progress: 25,
  }
];

const partnerships: TypePartner[] = [
  {
    name: "DataCamp",
    icon: SiDatacamp,
    description: "Official learning partner for data science education",
    category: "Education"
  },
  {
    name: "Juniper Networks",
    icon: SiJunipernetworks,
    description: "Infrastructure and networking solutions partner",
    category: "Infrastructure"
  },
  {
    name: "Red Hat",
    icon: SiRedhat,
    description: "Open source and cloud technology partner",
    category: "Technology"
  },
  {
    name: "Microsoft",
    icon: FaMicrosoft,
    description: "Cloud and development tools partner",
    category: "Technology"
  },
  {
    name: "AWS",
    icon: FaAws,
    description: "Cloud infrastructure partner",
    category: "Infrastructure"
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    description: "Cloud and AI technology partner",
    category: "Technology"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
      <Layout>
        <Hero />

        <Partners partners={partnerships} />

        <StudyClubs studyClubs={studyClubs} getClubDetails={getClubDetails} getClubSchedule={getClubSchedule} />

        <Projects latestProjects={latestProjects} />

        <JoinCard />
      </Layout >
    </div >
  );
}

