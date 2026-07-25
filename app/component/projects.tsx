import { Data } from "../data/about";
import { useTranslations } from 'next-intl';
import { AiOutlineRise } from "react-icons/ai";
import Image from "next/image";

interface details {
    link: string,
    name: string,
    bio: string,
    stacks: keyof typeof Data.techStacks,
    image?: string
}

export function Projects({ link, name, bio, stacks, image }: details) {
    const t = useTranslations('Projects');
    const techList = Data.techStacks[stacks] || [];

    return (
        <div>
            <div className="mb-8 sm:mb-10 border border-neutral-800 hover:border-neutral-700 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors duration-300 rounded-2xl w-full h-full px-4 py-4">


                <a className="inline-flex items-center flex-wrap gap-x-3 text-white font-semibold hover:text-neutral-700 transition-colors"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="flex gap-2">
                        {name}
                        <div><AiOutlineRise className="inline ml-1" /></div>
                    </div>
                </a>

                {image && (
                    <div className="relative my-6 w-full overflow-hidden rounded-xl ">
                        <Image
                            src={`/${image}`}
                            alt={name}
                            width={800}
                            height={400}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        {/* dark fade at bottom */}
                        <div className="absolute inset-0 rounded-xl"
                            style={{
                                background: "linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.55) 100%)"
                            }}
                        />
                        {/* white glow on top edge */}
                        <div className="absolute inset-0 rounded-xl"
                            style={{
                                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 0 24px 0 rgba(255,255,255,0.04)"
                            }}
                        />
                    </div>
                )}

                <p className="pt-3 whitespace-pre-line text-sm sm:text-base leading-relaxed text-neutral-400">
                    {bio}
                </p>

                {techList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {techList.map((st, index) => (
                            <div
                                key={index}
                                className="text-neutral-300 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-xs px-2.5 py-1"
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