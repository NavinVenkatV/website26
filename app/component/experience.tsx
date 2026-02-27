import { stringify } from "querystring";
import { Data } from "../data/about"
import { AiOutlineRise } from "react-icons/ai";

//lets say they are sending company name, bio, year 

interface details {
    name : string, 
    year : string, 
    bio : string, 
    skills ?: String,
    link : string
}


export function Experience ({name, year, bio, skills, link} : details) {
    console.log(name)
    return (
        <div className="mb-10">
            <div className="flex">
                <p className="mr-2 flex justify-center">{name}</p>
                <a className="flex justify-center items-center hover:scale-125" 
                href={link}
                ><AiOutlineRise/></a>
            </div>
            <p className="text-sm mask-t-from-neutral-50">{year}</p>
            <div className="mt-2 text-xs md:text-lg">
                {bio}
            </div>
            <div className="mt-2">
                {skills}
            </div>
        </div>
    )
}