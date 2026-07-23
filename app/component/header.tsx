"use client"

import { useState } from "react"
import { MdOutlineContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Data } from "../data/about";
import { motion, cubicBezier } from "motion/react"
import Image from "next/image";

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
    const [click, setClick] = useState(false);

    function copy() {
        setClick(true);
        navigator.clipboard.writeText(Data.email);
        setTimeout(() => {
            setClick(false);
        }, 2000);
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="p-2 sm:p-4 md:p-6"
        >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 rounded-2xl w-full">

                <motion.div
                    variants={fadeInUp}
                    className="flex justify-center items-center shrink-0"
                >
                    <Image
                        src="/background.png"
                        alt={`Photo of ${name}`}
                        width={280}
                        height={280}
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-2xl border border-red-900/40"
                    />
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="font-medium text-base sm:text-lg leading-relaxed flex-1 space-y-4 text-neutral-300 text-center md:text-left"
                >
                    <p className="text-xl sm:text-2xl font-bold text-white">
                        Hey! I&apos;m Navin, and I build intelligent systems.
                    </p>
                    <p>
                        A few years ago, I was deep in the full-stack world—React, Node,
                        databases, the whole thing. I loved shipping products and solving
                        problems. But somewhere along the way, I realized the coolest
                        problems weren&apos;t just about building fast software; they were
                        about making software <em>think</em>.
                    </p>
                    <p>So I made the leap into machine learning.</p>
                    <p>
                        For the past 6 months, I&apos;ve been obsessed with deep learning.
                        I&apos;ve trained models, fine-tuned transformers, and shipped ML
                        systems to production. Not just theory—real, working systems that
                        solve real problems.
                    </p>
                    <p>
                        Now I&apos;m living at the intersection of both worlds. I know how
                        to build systems that scale, AND I know how to train models that
                        actually work.
                    </p>
                    <p>
                        You&apos;ll find my projects on GitHub—complete pipelines from data
                        to deployment. No half-finished experiments, just solid ML work.
                    </p>
                    <p className="text-red-900 font-semibold">
                        Let&apos;s build something intelligent together.
                    </p>
                </motion.div>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
                <p className="text-xs sm:text-sm md:text-base text-neutral-400">
                    {email}
                </p>
                <button
                    onClick={copy}
                    aria-label="Copy email address"
                    className="cursor-pointer w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors"
                >
                    {!click ? <MdOutlineContentCopy /> : <TiTick color="#ef4444" />}
                </button>
            </div>
        </motion.div>
    )
}