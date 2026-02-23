import Image from "next/image"
import { Data } from "../data/about"

interface details {
    image: string,
    name: string,
    bio: string,
    stacks: keyof typeof Data.techStacks
}

export function Projects({ image, name, bio, stacks }: details) {
    const techList = Data.techStacks[stacks] || [];
    return (
        <div className="mb-10 border-1 border-neutral-600 rounded-2xl border-whiten w-[350] h-auto px-3 py-2 ">
            <p className="">{name}</p>
            {/* <Image
                className="w-full h-full mt-3 rounded-xl"
                src={`/${image}`}
                alt="image"
                width={800}
                height={800}
            ></Image> */}
            <p className="pt-2 whitespace-pre-line text-xs text-neutral-400">{bio}</p>
            
            {/* {techList && (
                techList.map((st, index) => (
                    <div key={index} className="text-black rounded-2xl flex  text-sm">
                        <div key={index} className="text-black bg-white rounded-xl px-3 mr-3 mt-2">
                            {st}
                        </div>
                    </div>
                ))
            )} */}
            <div className=" text-black rounded-2xl flex flex-wrap text-sm">
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