import type { MetaFunction } from "react-router";
import Hero from "~/components/home/Hero";
import InterestGroups from "~/components/home/InterestGroups";
import JoinCard from "~/components/home/JoinCard";
import Partners from "~/components/home/Partners";
import {
  getGroupDetails,
  getGroupSchedule,
  interestGroups,
  partnerships,
} from "~/constants/index_contents";
import { SITE_META } from "~/constants/site_meta";

export const meta: MetaFunction = () => [
  { title: SITE_META.title },
  { name: "description", content: SITE_META.description },
];

export default function Index() {
  return (
    <>
      <Hero />
      <Partners partners={partnerships} />
      <InterestGroups
        interestGroups={interestGroups}
        getClubDetails={getGroupDetails}
        getClubSchedule={getGroupSchedule}
      />
      <JoinCard />
    </>
  );
}
