"use client"
import { Data } from "../data/about"

// interface details {
//     github : string, 
//     x : string,
//     linkedin : string, 
//     email : string
// }
export function Footer() {
    return (
        <div className="bg-neutral-900/75 backdrop-blur-xl 
                        border border-neutral-400/20 
                        shadow-2xl shadow-black/60 rounded-2xl py-2">

            <div className="flex justify-center gap-7 text-neutral-500 text-xs md:text-xl">
                <a className="hover:text-white cursor-pointer" href={Data.links.github}>GitHub</a>
                <a className="hover:text-white cursor-pointer" href={Data.links.x}>X</a>
                <a className="hover:text-white cursor-pointer" href={Data.links.linkedIn}>LinkedIn</a>
                <a className="hover:text-white cursor-pointer" href={Data.links.email}>Email</a>
            </div>
            <div className="flex justify-center items-center mt-2 text-xs md:text-lg">@ 2026 - All rights reserved.</div>
        </div>
    )
}