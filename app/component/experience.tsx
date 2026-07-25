import { div } from "framer-motion/client";
import { AiOutlineRise } from "react-icons/ai";

interface details {
    name: string,
    year: string,
    bio: string,
    skills?: string,
    link: string
}

export function Experience({ name, year, bio, skills, link }: details) {
    return (
        <div>
            <div className="group mb-8 sm:mb-10 p-4 sm:p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/30 hover:bg-neutral-900/60 transition-colors duration-300">
            <div className="flex gap-2">
                <h3 className="font-semibold text-white text-base sm:text-lg leading-snug">
                    {name}
                </h3>
                
                  <a  href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center justify-center text-neutral-400 hover:text-emerald-400 transition-all duration-300 group-hover:scale-110 hover:scale-125"
                    aria-label={`Visit ${name}`}
                >
                    <AiOutlineRise className="text-lg sm:text-xl" />
                </a>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 mt-1 tracking-wide">
                {year}
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-300">
                {bio}
            </p>

            {skills && (
                <div className="mt-3 text-xs sm:text-sm text-neutral-500">
                    {skills}
                </div>
            )}
        </div>
        </div>
    )
}