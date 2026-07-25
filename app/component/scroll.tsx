"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
// import { Caveat } from "next/font/google";
import { Bitcount_Single } from "next/font/google";

const font3 = Bitcount_Single({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale       = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const nameOpacity   = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const nameBlur      = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const nameFilter    = useTransform(nameBlur, (v) => `blur(${v}px)`);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <div ref={containerRef} className="relative h-full">

      {/* 3 sec loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            {/* animated name as loader */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${font3.className} text-white text-5xl sm:text-7xl mb-8`}
            >
              Navin
            </motion.p>

            {/* progress bar */}
            <div className="w-48 h-px bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-x-0 top-[40%] -translate-y-1/2 text-center"
          >
            <motion.div style={{ opacity: nameOpacity, filter: nameFilter }}>
              <h1 className={`${font3.className} text-6xl sm:text-8xl font-semibold tracking-tight text-white`}>
                Hi! I&apos;m Navin
              </h1>
              <p className={`${font3.className} text-white text-xl sm:text-2xl mt-3 tracking-wide`}>
                AI/ML &nbsp;|&nbsp; Full Stack &nbsp;|&nbsp; Music
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}