import { DiVim } from "react-icons/di";
import { Header } from "./component/header";
import { Data } from "./data/about";
import { Skill } from "./component/skills";
import { Experience } from "./component/experience";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full  text-shadow-mist-300 m-24">
      <div className="flex  max-w-[800] bg-neutral-900 rounded-xl p-4">
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
            />
          </div>

        </section>

      </div>
    </div>
  );
}
