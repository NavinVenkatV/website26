import { Header } from "./component/header";
import { Data } from "./data/about";
import { Skill } from "./component/skills";
import { Experience } from "./component/experience";
import { Projects } from "./component/projects";
import { Education } from "./component/education";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full  text-shadow-mist-300 m-24">
      <div className="flex  max-w-[800] bg-neutral-900 h-auto rounded-xl p-4">
        <section id="header" className="">
          <Header
            name="Navin Venkat V "
            photo="photo"
            bio={`I like being the person who turns ideas into real products.

                  Started my journey tinkering with code and Web3 by curiosity, but I quickly got hooked on building full-stack applications, exploring Solana smart contracts, and experimenting with AI/ML models. Also, I have a soft spot for clean, modern aesthetics in digital experiences.

                  Along the way, I dabbled in frontend design, backend engineering, and even a bit of cloud infrastructure. Now I do a mix of everything from creating decentralized apps to prototyping AI-driven tools.
                `}
            email="vnavinvenkat@gmail.com"
          />
          <div className="mt-10">
            <h1 className="font-bold text-2xl">Skills</h1>
            <Skill />.......
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl">Career</h1>
            <p className="mb-5">Work experiences and roles</p>
            <Experience
              name={Data.career.company1}
              year={Data.career.year1}
              bio={Data.career.bio1}
              link={Data.career.link1}
            />
            <Experience
              name={Data.career.company2}
              year={Data.career.year2}
              bio={Data.career.bio2}
              link={Data.career.link1}
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl">Projects I Developed..</h1>
            <p className="mb-5">What I’ve Built</p>
            <div className="flex justify-center">
              <div className="flex flex-wrap gap-3">
                <Projects
                  name={Data.projects.name1}
                  bio={Data.projects.bio1}
                  stacks="stack1"
                  link={Data.projects.link1}
                />

                <Projects
                  name={Data.projects.name2}
                  bio={Data.projects.bio2}
                  link={Data.projects.link2}
                  stacks="stack2"
                />

                <Projects
                  name={Data.projects.name3}
                  bio={Data.projects.bio3}
                  link={Data.projects.link3}
                  stacks="stack3"
                />
              </div>
            </div>

          </div>

          <div className="mt-10">
            <h1 className="font-bold text-2xl">Education</h1>
            <Education
            />
          </div>

          <div className="w-full text-center flex justify-center mt-20">
            <Footer />
          </div>

        </section>

      </div>
    </div>
  );
}

