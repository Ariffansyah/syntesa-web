import { useState } from "react";

interface Benefit {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What's the application process?",
        answer: "Our application process consists of three steps: online application submission, technical assessment, and team interview. The entire process typically takes 2-3 weeks."
    },
    {
        question: "What are the prerequisites?",
        answer: "Basic programming knowledge, strong problem-solving skills, and passion for technology. Specific requirements vary by study club."
    },
    {
        question: "When can I start?",
        answer: "New members can join at the beginning of each semester. The next intake starts in May 2025."
    }
];

const benefits: Benefit[] = [
    {
        title: "Hands-on Learning",
        description: "Work on real projects",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        )
    },
    {
        title: "Expert Mentorship",
        description: "Learn from the best",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        )
    },
    {
        title: "Research Opportunities",
        description: "Push boundaries",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        )
    },
    {
        title: "Growth Opportunities",
        description: "Build your future",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        )
    }
];

export default function JoinCard() {
    const [activeTab, setActiveTab] = useState<'benefits' | 'faqs'>('benefits');
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
    const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

    return (
        <section
            aria-labelledby="join-heading"
            className="relative overflow-hidden pb-16 sm:pb-24
                        bg-gradient-to-b from-white via-gray-50 to-white
                        dark:from-black dark:via-gray-900 dark:to-black"
        >
            {/* Background Pattern */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                    from-apple-blue-500/[0.03] via-transparent to-transparent"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
                <div className="relative">
                    {/* Decorative Elements */}
                    <div
                        aria-hidden="true"
                        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[200%] sm:w-[800px] aspect-square
                            bg-gradient-to-r from-apple-blue-500/10 to-purple-500/10
                            dark:from-apple-blue-500/5 dark:to-purple-500/5
                            rounded-full blur-3xl opacity-30 -z-10"
                    />

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                        {/* Left Column - Journey Story */}
                        <div className="space-y-6 sm:space-y-8">
                            <header className="text-center lg:text-left">
                                <h2
                                    id="join-heading"
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                                >
                                    Begin Your Journey in
                                    <br />
                                    <span className="text-apple-blue-600 dark:text-apple-blue-400">
                                        Software Innovation
                                    </span>
                                </h2>
                                <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                                    Join a community of passionate developers, researchers, and innovators.
                                    Our lab offers state-of-the-art facilities and mentorship from industry experts.
                                </p>
                            </header>

                            {/* Tab Navigation */}
                            <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                                {['benefits', 'faqs'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab as 'benefits' | 'faqs')}
                                        className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                                            ${activeTab === tab
                                                ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Content Panels */}
                            <div className="relative overflow-hidden">
                                <div className="transition-all duration-300 flex">
                                    {/* Benefits Panel */}
                                    <div
                                        className={`w-full flex-shrink-0 transition-all duration-300 transform
                                            ${activeTab === 'benefits' ? 'translate-x-0' : '-translate-x-full'}`}
                                    >
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            {benefits.map((benefit) => (
                                                <li
                                                    key={benefit.title}
                                                    onClick={() => setSelectedBenefit(benefit.title)}
                                                    className={`group cursor-pointer transform transition-all duration-300
                                                        hover:scale-[1.02] active:scale-[0.98]
                                                        ${selectedBenefit === benefit.title
                                                            ? 'ring-2 ring-apple-blue-500 dark:ring-apple-blue-400'
                                                            : ''
                                                        }`}
                                                >
                                                    <article className="flex items-start space-x-4 p-4 rounded-xl
                        bg-white/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30
                        hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                                                        <div className="flex-shrink-0">
                                                            <div
                                                                aria-hidden="true"
                                                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-apple-blue-500/10 dark:bg-apple-blue-400/10
                                    flex items-center justify-center
                                    group-hover:bg-apple-blue-500/20 dark:group-hover:bg-apple-blue-400/20
                                    transition-colors duration-300"
                                                            >
                                                                <svg
                                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-apple-blue-600 dark:text-apple-blue-400"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    aria-hidden="true"
                                                                >
                                                                    {benefit.icon}
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                                                {benefit.title}
                                                            </h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                                {benefit.description}
                                                            </p>
                                                        </div>
                                                    </article>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* FAQs Panel */}
                                    <div
                                        className={`w-full flex-shrink-0 transition-all duration-300 transform
                                            ${activeTab === 'faqs' ? 'translate-x-[-100%]' : 'translate-x-0'}`}
                                    >
                                        <div className="space-y-4">
                                            {faqs.map((faq) => (
                                                <div
                                                    key={faq.question}
                                                    className="border border-gray-200/50 dark:border-gray-700/30 rounded-lg overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => setExpandedFaq(
                                                            expandedFaq === faq.question ? null : faq.question
                                                        )}
                                                        className="w-full px-4 py-3 text-left flex justify-between items-center
                                                        hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300"
                                                    >
                                                        <span className="font-medium">{faq.question}</span>
                                                        <svg
                                                            className={`w-5 h-5 transition-transform duration-300
                                                            ${expandedFaq === faq.question ? 'rotate-180' : ''}`}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        className={`transition-all duration-300 overflow-hidden
                                                        ${expandedFaq === faq.question ? 'max-h-40' : 'max-h-0'}`}
                                                    >
                                                        <p className="px-4 pb-3 text-gray-600 dark:text-gray-400">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Application Card */}
                        <aside className="relative mt-8 lg:mt-0 transform transition-all duration-300">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-gray-400 dark:to-gray-600 rounded-2xl blur opacity-10"
                            />
                            <div className="relative bg-white dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 lg:p-12
                                border border-gray-200/50 dark:border-gray-700/30">
                                <div className="space-y-6 sm:space-y-8">
                                    <header>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                                            Ready to Join?
                                        </h3>
                                        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                            Applications for Summer 2025 are now open. Submit your application today and
                                            take the first step towards your future in software engineering.
                                        </p>
                                    </header>

                                    <nav className="space-y-3 sm:space-y-4">
                                        <a
                                            href="/apply"
                                            className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gray-900 dark:bg-white
                                                text-white dark:text-gray-900 font-medium text-center text-sm sm:text-base
                                                hover:bg-gray-800 dark:hover:bg-gray-100
                                                transform hover:scale-[1.02] transition-all duration-300
                                                shadow-lg shadow-gray-900/10"
                                        >
                                            Apply Now
                                        </a>
                                        <a
                                            href="/information-pack"
                                            className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-center text-sm sm:text-base
                                                bg-gray-50 dark:bg-gray-700/50
                                                text-gray-900 dark:text-white font-medium
                                                hover:bg-gray-100 dark:hover:bg-gray-700
                                                transition-all duration-300"
                                        >
                                            Download Information Pack
                                        </a>
                                    </nav>

                                    <footer className="pt-6 border-t border-gray-200/50 dark:border-gray-700/30">
                                        <dl className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <dt>Next Intake</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white">
                                                May 2025
                                            </dd>
                                        </dl>
                                    </footer>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}