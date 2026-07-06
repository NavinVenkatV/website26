"use client"

import { useTranslations } from 'next-intl';
// import LanguageSwitcher from './LanguageSwitcher';
import { useState } from "react"
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Data } from "../data/about";
import { motion, cubicBezier } from "motion/react"
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    display: 'swap',
});

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
let dateNow = new Date().toLocaleTimeString("en-GB", { hour12: false });
export function Header({ name, bio, photo, email }: details) {
    function copy() {
        setClick(true)
        navigator.clipboard.writeText(Data.email)
        setTimeout(() => {
            setClick(false)
        }, 2000)
    }
    const [click, setClick] = useState(false);
    const [clock, setClock] = useState(dateNow);

    setInterval(() => {
        dateNow = new Date().toLocaleTimeString("en-GB", { hour12: false });
        setClock(dateNow)
    }, 1000)

    const t = useTranslations('Header');
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="p-2 md:p-4">

            <div className='md:flex justify-between  rounded-2xl w-full '>
                {/* <motion.div variants={fadeInUp}
                    className="text-2xl md:text-4xl font-bold flex flex-col  ">
                    <span className='text-xs text-green-900 font-bold'>Paris, France
                        <p className=' text-green-900 font-bold'>{clock.toString()}</p>
                    </span>
                </motion.div> */}
                <div className='font-bold text-xl w-[700] flex justify-center items-center'>
                    Hey! I'm Navin, and I build intelligent systems.

                    A few years ago, I was deep in the full-stack world—React, Node, databases, the whole thing. I loved shipping products and solving problems. But somewhere along the way, I realized the coolest problems weren't just about building fast software; they were about making software *think*.

                    So I made the leap into machine learning.

                    For the past 6 months, I've been obsessed with deep learning. I've trained models, fine-tuned transformers, and shipped ML systems to production. Not just theory—real, working systems that solve real problems.

                    Now I'm living at the intersection of both worlds. I know how to build systems that scale, AND I know how to train models that actually work.

                    You'll find my projects on GitHub—complete pipelines from data to deployment. No half-finished experiments, just solid ML work.

                    Let's build something intelligent together.
                </div>

                <div className='flex justify-center items-center'>
                    <img src="background.png" className='w-[500] object-cover rounded-2xl h-[500]' alt="" />
                </div>
            </div>
            {/* <motion.div variants={fadeInUp} className="mt-3">
                {bio.split('\n').map((line, index) => {
                    return (
                        <div key={index} className="mt-5 whitespace-pre-line text-sm md:text-lg">
                            {line}
                        </div>
                    );
                })}
            </motion.div> */}

            <div className="mt-3 flex">
                <p className="text-xs pr-2 md:text-lg flex flex-col justify-center items-center">{email}</p>
                <p onClick={copy} className="cursor-pointer w-5 h-8 flex flex-col justify-center items-center">{!click ? <MdOutlineContentCopy /> : <TiTick color="green" />}</p>
            </div>
        </motion.div>
    )
}