import type { LinksFunction, MetaFunction } from "react-router";
import Hero from "~/components/home/Hero";
import Infrastructure from "~/components/home/Infrastructure";
import InterestGroups from "~/components/home/InterestGroups";
import JoinCard from "~/components/home/JoinCard";
import MarqueeDivider from "~/components/home/MarqueeDivider";
import MissionStatement from "~/components/home/MissionStatement";
import Partners from "~/components/home/Partners";
import Seniors from "~/components/home/Seniors";
import TechSeparator from "~/components/home/TechSeparator";
import {
  getGroupDetails,
  interestGroups,
  labSpecs,
  partnerships,
  seniors,
} from "~/constants/index_contents";
import { socialLinks } from "~/constants/socialLinks";
import { generateLinks, generateMeta } from "~/utils/seo";

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Syntesa - Software Engineering Lab, Universitas Negeri Surabaya",
    description:
      "Advanced software engineering education and research facility at UNESA. Join our community of researchers and engineers advancing software construction, cloud infrastructure, and applied ML.",
    path: "/",
  });

export const links: LinksFunction = () => generateLinks("/");

export default function Index() {
  return (
    <div className="space-y-2">
      <Hero socialLinks={socialLinks} />
      <Partners partners={partnerships} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <TechSeparator />
      </div>
      <MissionStatement />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <TechSeparator delay={0.1} />
      </div>
      <Infrastructure specs={labSpecs} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <TechSeparator delay={0.1} />
      </div>
      <InterestGroups interestGroups={interestGroups} getClubDetails={getGroupDetails} />
      <div className="max-w-[1920px] mx-auto w-full px-6 sm:px-12">
        <TechSeparator delay={0.1} />
      </div>
      <Seniors seniors={seniors} />
      <MarqueeDivider />
      <JoinCard />
    </div>
  );
}
