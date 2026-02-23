"use client"
import { Data } from "../data/about"

interface details {
    github : string, 
    x : string,
    linkedin : string, 
    email : string
}
export function Footer(){
    return (
        <div className="flex gap-7 text-neutral-500">
            <a className="hover:text-white cursor-pointer" href={Data.links.github}>GitHub</a>
            <a className="hover:text-white cursor-pointer" href={Data.links.x}>X</a>
            <a className="hover:text-white cursor-pointer" href={Data.links.linkedIn}>LinkedIn</a>
            <a className="hover:text-white cursor-pointer" href={Data.links.email}>Email</a>
        </div>
    )
}