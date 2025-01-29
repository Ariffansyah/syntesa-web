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

type StatusIconData = Record<ProjectStatus, JSX.Element>;

const STATUS_ICONS: StatusIconData = {
    'Completed': (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    'Planning': (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    ),
    'Ongoing': (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 9l-7 7-7-7" />
    )
} as const;

const STATUS_STYLES: Record<ProjectStatus, string> = {
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400',
    'Planning': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400',
    'Ongoing': 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400'
} as const;

const getStatusIcon = (status: ProjectStatus): JSX.Element => {
    return STATUS_ICONS[status];
};

export default function Projects(props: ProjectsProps) {
    return (
        <section
            aria-labelledby="projects-heading"
            className="bg-gradient-to-b from-gray-50 via-white to-gray-50
                dark:from-gray-900/50 dark:via-black dark:to-gray-900/50 py-16 sm:py-24"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-gray-400 dark:to-gray-600 rounded-xl sm:rounded-2xl opacity-0
                                    group-hover:opacity-10 transition-opacity duration-500"
                            />

                            <article className="bg-white dark:bg-gray-800/30 rounded-xl sm:rounded-2xl p-6 sm:p-8
                                border border-gray-200/50 dark:border-gray-700/30
                                transform transition-all duration-500
                                hover:translate-y-[-4px]">
                                <div className="mb-6">
                                    {/* Status Icon */}
                                    <div
                                        aria-hidden="true"
                                        className="w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-xl bg-gradient-to-br
                                            from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                                            flex items-center justify-center transform
                                            group-hover:rotate-6 transition-transform duration-300"
                                    >
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {getStatusIcon(project.status)}
                                        </svg>
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
                                        className="relative w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700
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