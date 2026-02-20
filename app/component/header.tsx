"use client"

import { useState } from "react"
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Data } from "../data/about";

interface details {
    name : string,
    bio : string,
    photo : string, 
    email : string
}



export function Header({name, bio, photo, email} : details) {
    function copy () {
    setClick(true)
    navigator.clipboard.writeText(Data.email)
    setTimeout(()=> {
        setClick(false)
    }, 2000)
}
    const [click, setClick] = useState(false);
    return (
        <div className="">
        <div className="flex justify-between">
            <div className="text-4xl font-bold">
                Hi! I'm {name} 
            </div>
            <div>{photo}</div>
        </div>
        <div className="mt-3">
            {bio.split('\n').map((line, index) => (
                <div key={index} className="mt-5">
                    {line}
                </div>
            ))}
        </div>
        <div className="mt-3 flex">
            <p className="mr-2 flex flex-col justify-center items-center">{email}</p>
            <p onClick={copy} className="cursor-pointer flex flex-col justify-center items-center">{!click ? <MdOutlineContentCopy /> : <TiTick color="green"/>}</p>
        </div>
    </div>
    )
}