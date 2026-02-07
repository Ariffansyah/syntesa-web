import type { MetaFunction } from "react-router";
import Hero from "~/components/home/Hero";
import InterestGroups from "~/components/home/InterestGroups";
import Partners from "~/components/home/Partners";
import { getGroupDetails, interestGroups, partnerships } from "~/constants/index_contents";
import { SITE_META } from "~/constants/site_meta";
import { socialLinks } from "~/constants/socialLinks";

export const meta: MetaFunction = () => [
  { title: SITE_META.title },
  { name: "description", content: SITE_META.description },
];

export default function Index() {
  return (
    <>
      <Hero socialLinks={socialLinks} />
      <Partners partners={partnerships} />
      <InterestGroups interestGroups={interestGroups} getClubDetails={getGroupDetails} />
    </>
  );
}
