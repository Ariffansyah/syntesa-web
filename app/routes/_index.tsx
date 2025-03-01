import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/home/Hero";
import JoinCard from "~/components/home/JoinCard";
import Partners from "~/components/home/Partners";
import Projects from "~/components/home/Projects";
import InterestGroups from "~/components/home/InterestGroups";
import Layout from "~/components/Layout";
import { getClubDetails, getClubSchedule, latestProjects, partnerships, studyClubs } from "~/constants/index_contents";
import { SITE_META } from "~/constants/site_meta";

export const meta: MetaFunction = () => [
  { title: SITE_META.title },
  { name: "description", content: SITE_META.description },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
      <Layout>
        <Hero />
        <Partners partners={partnerships} />
        <InterestGroups
          studyClubs={studyClubs}
          getClubDetails={getClubDetails}
          getClubSchedule={getClubSchedule}
        />
        {/* <Projects latestProjects={latestProjects} /> */}
        <JoinCard />
      </Layout>
    </div>
  );
}