"use client";

import { Header } from "../component/header";
import { Data } from "../data/about";
import { Skill } from "../component/skills";
import { Experience } from "../component/experience";
import { Projects } from "../component/projects";
import { Education } from "../component/education";
import { Footer } from "../component/footer";

import { useTranslations } from 'next-intl';
import { motion, cubicBezier } from 'motion/react';
import ScrollHero from "../component/scroll";

// Animation Variants
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

export default function Home() {
  const t = useTranslations('Index');
  const th = useTranslations('Header');
  const tc = useTranslations('Career');
  const tp = useTranslations('Projects');

  return (
    <div className="flex flex-col  text-neutral-400   bg-red-800 z-0 overflow-hidden">
     
        <ScrollHero/>
     
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className=" mt-2  bg-neutral-950/70 backdrop-blur-2xl mx-2 rounded-3xl p-6 md:px-12"
      >

        <Header
          name="Navin Venkat"
          photo="photo"
          bio={th('bio')}
          email="vnavinvenkat@gmail.com"
        />

        <section className="mt-16">
          <h1 className="font-bold text-3xl mb-2 text-white">
            {t('career')}
          </h1>
          <p className="text-neutral-500 mb-8 text-lg">
            {t('careerSubtitle')}
          </p>

          <div className="space-y-10">
            <div>
              <Experience
                name={tc('agileSoftLabs')}
                year={tc('agileYear')}
                bio={tc('agileBio')}
                link={Data.career.link1}
              />
            </div>

            <div>
              <Experience
                name={tc('mlEngineer')}
                year={tc('mlYear')}
                bio={tc('mlBio')}
                link={Data.career.link2}
              />
            </div>
          </div>
        </section>

        {/* ====================== PROJECTS ====================== */}
        <section className="mt-16">
          <h1 className="font-bold text-3xl mb-2 text-white">
            {t('projects')}
          </h1>
          <p className="text-neutral-500 mb-8 text-lg">
            {t('projectsSubtitle')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div>
              <Projects
                name={tp('cnnName')}
                bio={tp('cnnBio')}
                stacks="stack1"
                link={Data.projects.link1}
              />
            </div>

            <div>
              <Projects
                name={tp('nlpName')}
                bio={tp('nlpBio')}
                stacks="stack2"
                link={Data.projects.link2}
              />
            </div>

            <div>
              <Projects
                name={tp('pipelineName')}
                bio={tp('pipelineBio')}
                stacks="stack3"
                link={Data.projects.link3}
              />
            </div>
          </div>
        </section>

        {/* ====================== MUSIC ====================== */}
        <section className="mt-16">
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
        </section>

        {/* ====================== EDUCATION ====================== */}
        <section className="mt-16">
          <h1 className="font-bold text-3xl mb-8 text-white">
            {t('education')}
          </h1>
          <Education />
        </section>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-neutral-800 text-center">
          <Footer />
        </div>

      </motion.div>
    </div>
  );
}