import type { MetaFunction } from "react-router";
import { SITE_META } from "~/constants/site_meta";

export const meta: MetaFunction = () => [
  { title: `Projects - ${SITE_META.title}` },
  {
    name: "description",
    content:
      "Discover research and development projects by the Software Engineering Lab at Universitas Negeri Surabaya.",
  },
];

export default function Projects() {
  return (
    <div
      className="min-h-[70vh] pt-20 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80
                dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
      </div>
    </div>
  );
}
