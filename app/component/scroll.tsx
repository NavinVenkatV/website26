"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Gruppo } from "next/font/google";
import { Monoton } from "next/font/google";
import { Bitcount_Single } from "next/font/google";

const font = Gruppo({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const font2 = Monoton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const font3 = Bitcount_Single({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background zooms in as you scroll down, zooms back out as you scroll up.
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  // Name: fully visible at the top, shades out as you scroll down,
  // comes back as you scroll up.
  const nameOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const nameBlur = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const nameFilter = useTransform(nameBlur, (v) => `blur(${v}px)`);

  // Overlay darkens as you scroll, so the fade reads as "shading."
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={containerRef} className="relative h-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.img
          src="/background.png"
          alt=""
          style={{ scale: bgScale }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

        <motion.h1
          style={{ opacity: nameOpacity, filter: nameFilter }}
          
          className={` ${font3.className} absolute inset-x-0 top-[40%] -translate-y-1/2 text-center text-6xl font-semibold tracking-tight text-white sm:text-8xl`}
        >
          Hi! I'm Navin Venkat
          <p className="text-2xl">AI/Ml | Full Stack | Music</p>
          <p className="text-sm">Website build in progress...</p>
        </motion.h1>
      </div>
    </div>
  );
}