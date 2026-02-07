import type { IconType } from "react-icons";
import { BsCheck } from "react-icons/bs";

export type GroupName = "Software Development" | "Cloud and Infrastructure";

export interface TypeInterestGroup {
  readonly name: GroupName;
  readonly description: string;
  readonly icon: IconType;
}

interface InterestGroupsProps {
  interestGroups: readonly TypeInterestGroup[];
  getClubDetails: (club: GroupName) => string[];
}

export default function InterestGroups(props: InterestGroupsProps) {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-24 pt-16 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <svg
          className="absolute w-full h-full opacity-[0.02] dark:opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Added title to satisfy Biome accessibility check */}
          <title>Background grid pattern</title>
          <defs>
            <pattern
              id="grid-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Interest Groups
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Join our specialized interest groups and develop your expertise in various domains of
            software engineering
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          {props.interestGroups.map((club) => (
            <div key={club.name} className="relative group mx-0 lg:max-w-[500px] w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 rounded-xl blur-[2px] opacity-5 group-hover:opacity-10 transition duration-500" />
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start h-full gap-3 sm:gap-6 bg-white/50 dark:bg-gray-800/30 p-5 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/30 hover:border-apple-blue-500/50 transition-all duration-300 transform backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                    <club.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-gray-900" />
                  </div>
                </div>

                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition duration-300">
                    {club.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {club.description}
                  </p>

                  <div className="space-y-1.5 hidden sm:block">
                    {props.getClubDetails(club.name).map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400 justify-center sm:justify-start"
                      >
                        <BsCheck className="w-4 h-4 mr-1.5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
