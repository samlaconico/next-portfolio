"use client";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <>
      <motion.div className="my-16 flex flex-col justify-around gap-4 overflow-hidden rounded-lg border-[1px] bg-neutral-100 py-16 text-center font-manrope-bold md:flex-row">
        <div className="flex flex-col space-y-8 ">
          <motion.h1
            initial={{scale:1}}
            transition={{}}
            whileHover={{scale:1.1}}
            className="bg-superfami-green rounded-full p-3 text-3xl text-white drop-shadow-md"
          >
            FRONTEND
          </motion.h1>
          <SkillCard>React</SkillCard>
          <SkillCard>Next.js</SkillCard>
          <SkillCard>Typescript</SkillCard>
          <SkillCard>Tailwind</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="bg-superfami-blue rounded-full p-3 text-3xl text-white drop-shadow-md">
            BACKEND
          </h1>
          <SkillCard>MySQL</SkillCard>
          <SkillCard>MongoDB</SkillCard>
          <SkillCard>PostgreSQL</SkillCard>
          <SkillCard>Node.js</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="bg-superfami-yellow rounded-full p-3 text-3xl text-white drop-shadow-md">
            DEVELOPMENT
          </h1>
          <SkillCard>C++</SkillCard>
          <SkillCard>C#</SkillCard>
          <SkillCard>Java</SkillCard>
          <SkillCard>Unity</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="bg-superfami-red rounded-full p-3 text-3xl text-white drop-shadow-md">
            TOOLS
          </h1>
          <SkillCard>VSCode</SkillCard>
          <SkillCard>Github</SkillCard>
          <SkillCard>Photoshop</SkillCard>
        </div>
      </motion.div>
    </>
  );
}

function SkillCard({ children }: { children: string }) {
  return (
    <>
      <h1 className="font-manrope">{children}</h1>
    </>
  );
}

export default Skills;
