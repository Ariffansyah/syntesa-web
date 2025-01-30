import { type ComponentType, SVGProps } from 'react';
import { BsCheck } from 'react-icons/bs';
import { type IconType } from 'react-icons';

export type ClubName = "Web Development" | "Data Science" | "DevOps" | "System Administration";

export interface TypeStudyClub {
    readonly name: ClubName;
    readonly description: string;
    readonly icon: IconType;
}

export type ClubDetails = Record<ClubName, readonly string[]>;
export type ClubSchedules = Record<ClubName, string>;

interface StudyClubsProps {
    studyClubs: readonly TypeStudyClub[];
    getClubDetails: (club: ClubName) => string[];
    getClubSchedule: (club: ClubName) => string;
}

export default function StudyClubs(props: StudyClubsProps) {
    return (
        <div className="relative bg-gradient-to-b from-white via-gray-50 to-white
                        dark:from-black dark:via-gray-900 dark:to-black pb-24 pt-16 overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0" aria-hidden="true">
                {/* SVG Pattern Background */}
                <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Animated Blobs */}
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div
                        className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
                    </div>
                    <div
                        className="absolute top-1/3 -right-10 w-72 h-72 bg-yellow-200 dark:bg-yellow-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
                    </div>
                    <div
                        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Study Clubs
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Join our specialized study clubs and develop your expertise in various domains of software engineering
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {props.studyClubs.map((club) => (
                        <div
                            key={club.name}
                            className="relative group mx-0"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-400 dark:to-gray-600
                                rounded-xl blur-[2px] opacity-10 group-hover:opacity-20 transition duration-500">
                            </div>

                            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6
                                bg-white dark:bg-gray-800/30 p-5 sm:p-6 rounded-xl
                                border border-gray-200/50 dark:border-gray-700/30
                                hover:border-apple-blue-500/50
                                transition-all duration-300
                                transform">

                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14
                                        bg-gradient-to-br from-gray-900 to-gray-700
                                        dark:from-white dark:to-gray-300
                                        rounded-lg sm:rounded-xl
                                        flex items-center justify-center
                                        shadow-lg transform
                                        group-hover:scale-110 group-hover:rotate-6
                                        group-hover:animate-pulse-slow
                                        transition duration-500"
                                    >
                                        <club.icon
                                            className="w-6 h-6 sm:w-7 sm:h-7 text-white dark:text-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2
                                        group-hover:text-gray-700 dark:group-hover:text-gray-300
                                        transition duration-300">
                                        {club.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                        {club.description}
                                    </p>

                                    <div className="space-y-1.5 hidden sm:block">
                                        {props.getClubDetails(club.name).map((detail, idx) => (
                                            <div key={idx}
                                                className="flex items-center text-sm text-gray-600 dark:text-gray-400
                                                justify-center sm:justify-start"
                                            >
                                                <BsCheck
                                                    className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
                                                />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                                        <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 order-2 sm:order-1">
                                            {props.getClubSchedule(club.name)}
                                        </span>
                                        <button className="w-full sm:w-auto px-3 py-1.5 text-sm font-medium text-gray-900 dark:text-white
                                            bg-gray-100 dark:bg-gray-700/50 rounded-full
                                            hover:bg-gray-200 dark:hover:bg-gray-700
                                            transition duration-300 order-1 sm:order-2">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}