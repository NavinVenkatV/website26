"use client"
import { Header } from "../component/header";
import { Data } from "../data/about";
import { Skill } from "../component/skills";
import { Experience } from "../component/experience";
import { Projects } from "../component/projects";
import { Education } from "../component/education";
import { Footer } from "../component/footer";
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react'

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
      ease: "easeInOut",
    },
  },
};

export default function Home() {


  const t = useTranslations('Index');
  const th = useTranslations('Header');
  const tc = useTranslations('Career');
  const tp = useTranslations('Projects');
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"

      className="flex flex-col mt-20 justify-center items-center text-neutral-400  h-full  text-shadow-mist-300 m-2 md:m-24 overflow-hidden">
      <div className="w-full max-w-4xl rounded-xl p-3 md:p-12">
        <section id="header" className="">
          <Header
            name="Navin Venkat"
            photo="photo"
            bio={th('bio')}
            email="vnavinvenkat@gmail.com"
          />
          <div className="mt-10">
            {/* <motion.div variants={fadeInUp}>Helloeifoenfoenfneofnmofe</motion.div> */}
            <motion.h1
              variants={fadeInUp}
              className="font-bold text-2xl">{t('skills')}</motion.h1>
            <Skill />.......
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl">{t('career')}</h1>
            <p className="mb-5">{t('careerSubtitle')}</p>
            <Experience
              name={tc('agileSoftLabs')}
              year={tc('agileYear')}
              bio={tc('agileBio')}
              link={Data.career.link1}
            />
            <Experience
              name={tc('freelancer')}
              year={tc('freeYear')}
              bio={tc('freeBio')}
              link={Data.career.link2}
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl">{t('projects')}</h1>
            <p className="mb-5">{t('projectsSubtitle')}</p>
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-3">
                <Projects
                  name={tp('codeItName')}
                  bio={tp('codeItBio')}
                  stacks="stack1"
                  link={Data.projects.link1}
                />

                <Projects
                  name={tp('exaName')}
                  bio={tp('exaBio')}
                  link={Data.projects.link2}
                  stacks="stack2"
                />

                <Projects
                  name={tp('pingMeName')}
                  bio={tp('pingMeBio')}
                  link={Data.projects.link3}
                  stacks="stack3"
                />
              </div>
            </div>

          </div>

          <div>
            <div className="md:text-2xl text-green-500 my-4">{t('music')}</div>
            <iframe
              title="Spotify Embed: Recommendation Playlist "
              src={`https://open.spotify.com/embed/playlist/50Mq1NFF7fGYQ8oXNLrlbb?utm_source=generator&theme=0`}
              width="100%"
              height="100%"
              style={{ minHeight: '360px' }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <div className="mt-16">
            <h1 className="font-bold  text-2xl">{t('education')}</h1>
            <Education
            />
          </div>

          <div className="w-full text-center flex justify-center mt-20">
            <Footer />
          </div>



        </section>

      </div>
    </motion.div>
  );
}

