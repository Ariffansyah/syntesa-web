import { type ComponentType, SVGProps } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';

export type ProjectStatus = "Completed" | "Planning" | "Ongoing";

export interface TypeProject {
    readonly title: string;
    readonly description: string;
    readonly status: ProjectStatus;
    readonly progress: number;
}

interface ProjectsProps {
    readonly latestProjects: readonly TypeProject[];
}

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type StatusIconData = Record<ProjectStatus, IconType>;

const STATUS_ICONS: StatusIconData = {
    'Completed': BsCheckCircle,
    'Planning': HiPlus,
    'Ongoing': HiChevronDown
} as const;

const STATUS_STYLES: Record<ProjectStatus, string> = {
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400',
    'Planning': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400',
    'Ongoing': 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400'
} as const;

export default function Projects(props: ProjectsProps) {
    return (
        <section
            aria-labelledby="projects-heading"
            className="bg-gradient-to-b from-white via-gray-50 to-white
                        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
                     py-16 sm:py-24 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(77,145,255,0.02)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.02)_0.5px,transparent_0.5px)]
                    dark:bg-[linear-gradient(rgba(77,145,255,0.01)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.01)_0.5px,transparent_0.5px)]
                    bg-[size:32px_32px] opacity-75" />

                {/* Animated blobs */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64
                        bg-apple-blue-500/[0.03] dark:bg-apple-blue-400/[0.03]
                        rounded-full blur-3xl animate-pulse-slow"
                        style={{ animationDuration: '10s' }} />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96
                        bg-apple-blue-600/[0.02] dark:bg-apple-blue-500/[0.02]
                        rounded-full blur-3xl animate-pulse-slow"
                        style={{ animationDuration: '15s', animationDelay: '-5s' }} />
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <header className="text-center mb-12 sm:mb-16">
                    <h2
                        id="projects-heading"
                        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Latest Projects
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our ongoing research and development initiatives
                    </p>
                </header>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {props.latestProjects.map((project) => (
                        <li
                            key={project.title}
                            className="group relative overflow-hidden"
                        >
                            {/* Decorative gradient overlay */}
                            <div
                                aria-hidden="true"
                                className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-white dark:to-gray-300 rounded-xl sm:rounded-2xl blur-[2px]
                                    opacity-5 group-hover:opacity-10 transition-all duration-500"
                            />

                            <article className="bg-white/50 dark:bg-gray-800/30 rounded-xl sm:rounded-2xl p-6 sm:p-8
                                border border-gray-200/50 dark:border-gray-700/30
                                transform transition-all duration-500
                                hover:translate-y-[-4px] backdrop-blur-sm
                                relative">
                                <div className="mb-6">
                                    {/* Status Icon */}
                                    <div
                                        aria-hidden="true"
                                        className="w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-xl bg-gradient-to-br
                                            from-gray-900 to-gray-600 dark:from-white dark:to-gray-300
                                            flex items-center justify-center transform
                                            group-hover:rotate-6 transition-transform duration-300
                                            shadow-lg"
                                    >
                                        {(() => {
                                            const StatusIcon = STATUS_ICONS[project.status];
                                            return <StatusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900" />;
                                        })()}
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <footer className="space-y-4">
                                    {/* Progress Information */}
                                    <div role="presentation" className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {project.progress}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div
                                        role="progressbar"
                                        aria-valuenow={project.progress}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        className="relative w-full h-1.5 sm:h-2 bg-gray-200/50 dark:bg-gray-700/50
                                            rounded-full overflow-hidden"
                                    >
                                        <div
                                            className={`absolute top-0 left-0 h-full rounded-full
                                                transition-all duration-500 ease-out
                                                ${project.status === 'Completed'
                                                    ? 'bg-green-500 dark:bg-green-400'
                                                    : 'bg-gray-900 dark:bg-white'}`}
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>

                                    {/* Status and Action */}
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                        <span
                                            role="status"
                                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium
                                                ${STATUS_STYLES[project.status]}`}
                                        >
                                            {project.status}
                                        </span>
                                        <a
                                            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-sm font-medium text-gray-900 dark:text-white
                                                hover:text-gray-600 dark:hover:text-gray-300
                                                transition-colors duration-300
                                                w-full sm:w-auto text-center sm:text-left"
                                        >
                                            View Details →
                                        </a>
                                    </div>
                                </footer>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}