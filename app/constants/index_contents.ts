import { FaAws, FaMicrosoft } from "react-icons/fa";
import { HiChartBar, HiCode, HiCog, HiServer } from "react-icons/hi";
import { SiDatacamp, SiGooglecloud, SiJunipernetworks, SiRedhat } from "react-icons/si";
import { TypePartner } from "~/components/home/Partners";
import { TypeProject } from "~/components/home/Projects";
import { TypeInterestGroup } from "~/components/home/InterestGroups";

export const studyClubs: TypeInterestGroup[] = [
    {
        name: "Software Development",
        description: "Master modern software development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
        icon: HiCode
    },
    {
        name: "Data Science",
        description: "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
        icon: HiChartBar
    },
    {
        name: "Cloud and Infrastructure",
        description: "Learn to bridge the gap between development and operations. Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
        icon: HiServer
    }
];


export const getClubDetails = (clubName: string) => {
    const details = {
        "Software Development": [
            "Web Development (Frontend & Backend Development)",
            "API Development & Integration",
            "Mobile App Development"
        ],
        "Data Science": [
            "Machine Learning & AI",
            "Data Analysis & Visualization",
            "Python & R Programming",
            "Big Data Technologies"
        ],
        "Cloud and Infrastructure": [
            "Cloud Native",
            "Containerization",
            "Computer Networks",
            "Opertaing Systems",
            "DevOps",
            "System Administration"
        ]
    };
    return details[clubName as keyof typeof details];
};

export const getClubSchedule = (clubName: string) => {
    const schedules = {
        "Software Development": "Meets every Tuesday & Thursday",
        "Data Science": "Meets every Monday & Wednesday",
        "Cloud and Infrastructure": "Meets every Wednesday & Friday"
    };
    return schedules[clubName as keyof typeof schedules];
};

export const latestProjects: TypeProject[] = [
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

export const partnerships: TypePartner[] = [
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
