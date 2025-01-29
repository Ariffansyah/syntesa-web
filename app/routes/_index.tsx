import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/home/Hero";
import JoinCard from "~/components/home/JoinCard";
import Partners, { TypePartner } from "~/components/home/Partners";
import Projects, { TypeProject } from "~/components/home/Projects";
import StudyClubs, { TypeStudyClub } from "~/components/home/StudyClubs";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Software Engineering Lab - Universitas Negeri Surabaya" },
    { name: "description", content: "Advanced software engineering education and research facility" },
  ];
};

const studyClubs: TypeStudyClub[] = [
  {
    name: "Web Development",
    description: "Master modern web development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  },
  {
    name: "Data Science",
    description: "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  },
  {
    name: "DevOps",
    description: "Learn to bridge the gap between development and operations. Master continuous integration, deployment, and modern cloud infrastructure.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  },
  {
    name: "System Administration",
    description: "Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
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
    logo: "https://www.datacamp.com/datacamp-logo.svg",
    description: "Official learning partner for data science education",
    category: "Education"
  },
  {
    name: "Juniper Networks",
    logo: "https://www.juniper.net/juniper-logo.svg",
    description: "Infrastructure and networking solutions partner",
    category: "Infrastructure"
  },
  {
    name: "Red Hat",
    logo: "https://www.redhat.com/redhat-logo.svg",
    description: "Open source and cloud technology partner",
    category: "Technology"
  },
  {
    name: "Microsoft",
    logo: "https://www.microsoft.com/microsoft-logo.svg",
    description: "Cloud and development tools partner",
    category: "Technology"
  },
  {
    name: "AWS",
    logo: "https://aws.amazon.com/aws-logo.svg",
    description: "Cloud infrastructure partner",
    category: "Infrastructure"
  },
  {
    name: "Google Cloud",
    logo: "https://cloud.google.com/gcloud-logo.svg",
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

