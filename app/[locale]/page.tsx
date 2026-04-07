"use client";

import { Header } from "../component/header";
import { Data } from "../data/about";
import { Skill } from "../component/skills";
import { Experience } from "../component/experience";
import { Projects } from "../component/projects";
import { Education } from "../component/education";
import { Footer } from "../component/footer";
import { Theader } from "../component/tHeader";

import { useTranslations } from 'next-intl';
import { motion, cubicBezier } from 'motion/react';

// Animation Variants
function summa () {
  const a : number  = 23;
  console.log(a)
}
summa();
const easeC = cubicBezier(0.21, 0.92, 0.3, 1)
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: easeC,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const t = useTranslations('Index');
  const th = useTranslations('Header');
  const tc = useTranslations('Career');
  const tp = useTranslations('Projects');

  return (
    <div className="flex  flex-col items-center text-neutral-400 mt-20 px-4 md:px-6 z-0 overflow-hidden">
    

      {/* Main Content */}
      <div className="w-full max-w-4xl mt-8 bg-neutral-950/70 backdrop-blur-2xl border border-neutral-800 rounded-3xl p-6 md:p-12">

        {/* Personal Header */}
        <Header
          name="Navin Venkat"
          photo="photo"
          bio={th('bio')}
          email="vnavinvenkat@gmail.com"
        />

        {/* ====================== SKILLS ====================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.h1 variants={fadeInUp} className="font-bold text-3xl mb-8 text-white">
            {t('skills')}
          </motion.h1>
          <motion.div variants={fadeInUp}>
            <Skill />
          </motion.div>
        </motion.section>

        {/* ====================== EXPERIENCE ====================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.h1 variants={fadeInUp} className="font-bold text-3xl mb-2 text-white">
            {t('career')}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-neutral-500 mb-8 text-lg">
            {t('careerSubtitle')}
          </motion.p>

          <div className="space-y-10">
            <motion.div variants={fadeInUp}>
              <Experience
                name={tc('agileSoftLabs')}
                year={tc('agileYear')}
                bio={tc('agileBio')}
                link={Data.career.link1}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Experience
                name={tc('freelancer')}
                year={tc('freeYear')}
                bio={tc('freeBio')}
                link={Data.career.link2}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ====================== PROJECTS ====================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.h1 variants={fadeInUp} className="font-bold text-3xl mb-2 text-white">
            {t('projects')}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-neutral-500 mb-8 text-lg">
            {t('projectsSubtitle')}
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.div variants={fadeInUp}>
              <Projects
                name={tp('codeItName')}
                bio={tp('codeItBio')}
                stacks="stack1"
                link={Data.projects.link1}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Projects
                name={tp('exaName')}
                bio={tp('exaBio')}
                stacks="stack2"
                link={Data.projects.link2}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Projects
                name={tp('pingMeName')}
                bio={tp('pingMeBio')}
                stacks="stack3"
                link={Data.projects.link3}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ====================== MUSIC ====================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="md:text-2xl text-green-500 font-medium mb-4">
            {t('music')}
          </div>
          <iframe
            title="Spotify Embed: Recommendation Playlist"
            src="https://open.spotify.com/embed/playlist/50Mq1NFF7fGYQ8oXNLrlbb?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl"
          />
        </motion.section>

        {/* ====================== EDUCATION ====================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mt-16"
        >
          <motion.h1 className="font-bold text-3xl mb-8 text-white">
            {t('education')}
          </motion.h1>
          <Education />
        </motion.section>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 pt-12 border-t border-neutral-800 text-center"
        >
          <Footer />
        </motion.div>

      </div>
    </div>
  );
}