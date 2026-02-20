import { Data } from "../data/about"
import { AiOutlineRise } from "react-icons/ai";

//lets say they are sending company name, bio, year 

interface details {
    name : string, 
    year : string, 
    bio : string, 
    skills ?: String
}

export function Experience ({name, year, bio, skills} : details) {
    return (
        <div>
            <div className="flex">
                <p className="mr-2 flex justify-center">{name}</p>
                <p className="flex justify-center items-center hover:scale-125"><AiOutlineRise/></p>
            </div>
            <p>year</p>
            <div>
                {bio}
            </div>
            <div>
                {skills}
            </div>
        </div>
    )
}