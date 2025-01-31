import { memo, useMemo } from 'react';
import { type IconType } from 'react-icons';

export type PartnerCategory = "Education" | "Infrastructure" | "Technology";

export interface TypePartner {
    readonly name: string;
    readonly icon: IconType;
    readonly description: string;
    readonly category: PartnerCategory;
}

interface PartnersProps {
    readonly partners: readonly TypePartner[];
}

const shuffleArray = <T,>(array: readonly T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Partners(props: PartnersProps) {
    // Memoize the shuffled array
    const shuffledPartners = useMemo(() =>
        shuffleArray(props.partners),
        [props.partners]
    );

    // Memoize the duplicated arrays
    const duplicatedPartners = useMemo(() =>
        [...props.partners, ...props.partners],
        [props.partners]
    );

    const duplicatedShuffled = useMemo(() =>
        [...shuffledPartners, ...shuffledPartners],
        [shuffledPartners]
    );

    return (
        <section
            aria-labelledby="partners-heading"
            className="relative py-8 sm:py-14 border-t border-gray-200/10 dark:border-gray-800/50
                        bg-gradient-to-b from-white via-gray-50 to-white
                        dark:from-black dark:via-gray-900 dark:to-black"
        >
            {/* Decorative gradient overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20
                    dark:from-black/20 dark:via-transparent dark:to-black/20 z-10 pointer-events-none"
            />

            <div className="mx-auto">
                <header className="text-center mb-8 sm:mb-12 px-6">
                    <h2
                        id="partners-heading"
                        className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                    >
                        Empowering Innovation Through Partnership
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        Collaborating with leading technology companies to provide students with industry-standard tools and resources
                    </p>
                </header>

                {/* Partners Marquee */}
                <div className="relative" role="region">
                    {/* Mask containers to hide overflow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-black/20 z-20" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-black/20 z-20" />
                    </div>

                    {/* First Row */}
                    <div className="overflow-hidden">
                        <div className="relative flex w-[200%] animate-slide-left">
                            <ul className="flex items-center justify-around w-full space-x-4">
                                {duplicatedPartners.map((partner, index) => (
                                    <MarqueeItem
                                        key={`${partner.name}-${index}-row1`}
                                        partner={partner}
                                        tooltipPosition="top"
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="overflow-hidden py-8">
                        <div className="relative flex w-[200%] animate-slide-right">
                            <ul className="flex items-center justify-around w-full space-x-4">
                                {duplicatedShuffled.map((partner, index) => (
                                    <MarqueeItem
                                        key={`${partner.name}-${index}-row2`}
                                        partner={partner}
                                        tooltipPosition="bottom"
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const MarqueeItem = memo(({ partner, tooltipPosition }: {
    partner: TypePartner,
    tooltipPosition: 'top' | 'bottom'
}) => {
    return (
        <li className="flex-shrink-0 group">
            <div className={`relative px-4 py-4 ${tooltipPosition === 'top' ? 'sm:pt-16' : 'sm:pb-16'}`}>
                <article className="relative w-32 sm:w-48 h-16 sm:h-24
                    bg-white/50 dark:bg-gray-800/30
                    rounded-xl border border-gray-200/50 dark:border-gray-700/30
                    flex items-center justify-center p-4 sm:p-6
                    transition-all duration-500
                    hover:shadow-lg hover:scale-105
                    group-hover:border-apple-blue-500/50
                    backdrop-blur-sm">
                    <partner.icon className="w-8 h-8 sm:w-10 sm:h-10
                        text-gray-400 dark:text-gray-500
                        group-hover:text-gray-900 dark:group-hover:text-white
                        transition-colors duration-300" />

                    {/* Tooltip */}
                    <div
                        role="tooltip"
                        className={`absolute ${tooltipPosition === 'top' ? '-top-12' : 'bottom-[-3rem]'} left-1/2 -translate-x-1/2 w-max
                            opacity-0 group-hover:opacity-100
                            transition-all duration-200 z-20
                            pointer-events-none hidden sm:block`}
                    >
                        <div className="bg-gray-900 dark:bg-white
                            text-white dark:text-gray-900
                            text-sm font-medium px-4 py-2 rounded-xl
                            shadow-lg backdrop-blur-sm
                            whitespace-nowrap">
                            <strong className="block font-semibold mb-1">
                                {partner.name}
                            </strong>
                            <span className="text-gray-300 dark:text-gray-600 text-xs">
                                {partner.description}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </li>
    );
});

MarqueeItem.displayName = 'MarqueeItem';
