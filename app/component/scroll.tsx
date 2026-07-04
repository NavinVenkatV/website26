"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Gruppo, Monoton } from "next/font/google";

const font = Gruppo({ subsets: ["latin"], weight: ["400"], display: "swap" });
const font2 = Monoton({ subsets: ["latin"], weight: ["400"], display: "swap" });

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const nameOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const nameBlur = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const nameFilter = useTransform(nameBlur, (v) => `blur(${v}px)`);
  const nameScaleX = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={containerRef} className="relative h-[150vh] bg-neutral-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Placeholder shown until the image is ready, instead of a raw red flash */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 animate-pulse bg-neutral-900" />
        )}

        {imgError && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-500 text-sm">
            Image failed to load
          </div>
        )}

        <motion.img
          src="/background.png"
          alt=""
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          style={{ scale: bgScale, opacity: imgLoaded ? 1 : 0 }}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        />

        {imgLoaded && (
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black"
          />
        )}

        <motion.h1
          style={{
            opacity: imgLoaded ? nameOpacity : 0,
            filter: nameFilter,
            scaleX: nameScaleX,
          }}
          className={`${font2.className} origin-center absolute inset-x-0 top-[40%] -translate-y-1/2 text-center text-6xl font-semibold tracking-tight text-white sm:text-8xl transition-opacity duration-500`}
        >
          Hi! I&apos;m nav&apos;
          <p className={`${font.className} text-2xl`}>
            AI/ML | Full Stack | Pianist
          </p>
        </motion.h1>
      </div>
    </div>
  );
}