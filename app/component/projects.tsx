import { Data } from "../data/about";
import { useTranslations } from 'next-intl';
import { AiOutlineRise } from "react-icons/ai";

interface details {
    link: string,
    name: string,
    bio: string,
    stacks: keyof typeof Data.techStacks
}

export function Projects({ link, name, bio, stacks }: details) {
    const t = useTranslations('Projects');
    const techList = Data.techStacks[stacks] || [];

    return (
        <div>
            <div className="mb-8 sm:mb-10 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors duration-300 rounded-2xl w-full h-full px-4 py-4">
            
               <a  className="inline-flex items-center flex-wrap gap-x-3 text-white font-semibold hover:text-red-500 transition-colors"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
                <span className="text-xs sm:text-sm font-normal text-red-600 hover:underline">
                    {t('linkText')}
                    <AiOutlineRise className="inline ml-1" />
                </span>
            </a>

            <p className="pt-2 whitespace-pre-line text-sm sm:text-base leading-relaxed text-neutral-400">
                {bio}
            </p>

            {techList.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {techList.map((st, index) => (
                        <div
                            key={index}
                            className="text-red-300 bg-red-950/40 border border-red-900/50 rounded-lg text-xs px-2.5 py-1"
                        >
                            {st}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    )
}