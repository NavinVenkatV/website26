import { Data } from "../data/about"

export function Skill() {
    return (
        <div className=" text-black rounded-2xl flex flex-wrap text-sm">
            {
                Data.skills.map((skills, index) => (
                    <div key={index} className="text-black bg-white rounded-xl px-3 mr-3 mt-2 text-xs md:text-md">
                        {skills}
                    </div>
                ))
            }
        </div>
    )
}