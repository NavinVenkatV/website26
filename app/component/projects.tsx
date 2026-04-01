import { Data } from "../data/about";
import { useTranslations } from 'next-intl';

interface details {
    link : string,
    name: string,
    bio: string,
    stacks: keyof typeof Data.techStacks
}

const BLUR_FADE_DELAY = 0.4;

export function Projects({ link, name, bio, stacks }: details) {
    const t = useTranslations('Projects');
    const techList = Data.techStacks[stacks] || [];
    return (
        <div className="mb-10 border-1 border-neutral-800 rounded-2xl border-whiten w-auto md:w-[350] h-auto px-2 py-2 ">
            <a className="cursor-pointer text-white" href={link} target="_blank ">{name} 
                <span className="text-sm font-extralight text-amber-600 px-4 cursor-pointer hover:underline">{t('linkText')}</span>
            </a>
            
            {/* <Image
                className="w-full h-full mt-3 rounded-xl"
                src={`/${image}`}
                alt="image"
                width={800}
                height={800}
            ></Image> */}
            <p className="pt-2 whitespace-pre-line text-sm md:text-lg text-neutral-400">{bio}</p>
            
            {/* {techList && (
                techList.map((st, index) => (
                    <div key={index} className="text-black rounded-2xl flex  text-sm">
                        <div key={index} className="text-black bg-white rounded-xl px-3 mr-3 mt-2">
                            {st}
                        </div>
                    </div>
                ))
            )} */}
            <div className=" text-black rounded-2xl flex flex-wrap text-sm md:text-lg mt-3">
            {
                techList.map((st, index) => (
                    <div key={index} className="text-black bg-white rounded-xl text-xs px-2 mr-3 mt-2">
                        {st}
                    </div>
                ))
            }
        </div>
        </div>
    )
}