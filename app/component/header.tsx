"use client"

import { useTranslations } from 'next-intl';
// import LanguageSwitcher from './LanguageSwitcher';
import { useState } from "react"
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Data } from "../data/about";
import { motion, cubicBezier } from "motion/react"


const easeC = cubicBezier(0.21, 0.92, 0.3, 1)

interface details {
    name: string,
    bio: string,
    photo: string,
    email: string
}
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: easeC,
        },
    },
};

export function Header({ name, bio, photo, email }: details) {
    function copy() {
        setClick(true)
        navigator.clipboard.writeText(Data.email)
        setTimeout(() => {
            setClick(false)
        }, 2000)
    }
    const [click, setClick] = useState(false);
    const t = useTranslations('Header');
    return (
        <motion.div
        variants={container}
            initial="hidden"
            animate="show"
         className="">
            <div className="flex justify-between">
                <motion.div variants={fadeInUp}
                    className="text-2xl md:text-4xl font-bold flex flex-col  ">
                    <span className='text-white'>{t('greeting', { name })}</span>
                </motion.div>

                {/* <img
                    className="rounded-full w-[100] h-[100]"
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWUycG41bGR4NXkxNDNyNDkzaWF1MHdocTN6ODFwY2VrODdhbWlnZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/brCNdnOeZSkZNofIFB/giphy.gif" alt="Hey" />  */}
            </div>
            <motion.div variants={fadeInUp} className="mt-3">
                {bio.split('\n').map((line, index) => {
                    return (
                        <div key={index} className="mt-5 whitespace-pre-line text-sm md:text-lg">
                            {line}
                        </div>
                    );
                })}
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-3 flex">
                <p className="text-xs pr-2 md:text-xl flex flex-col justify-center items-center">{email}</p>
                <p onClick={copy} className="cursor-pointer w-5 h-8 flex flex-col justify-center items-center">{!click ? <MdOutlineContentCopy /> : <TiTick color="green" />}</p>
            </motion.div>
        </motion.div>
    )
}