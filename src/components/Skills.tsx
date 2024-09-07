"use client";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <>
      <motion.div className="my-16 overflow-hidden rounded-lg border-[1px] bg-neutral-100 text-center font-manrope-bold shadow-md">
        <h1 className="pt-8 font-manrope-bold text-3xl">Some of the technologies I use</h1>
        <motion.div className="flex flex-col justify-around gap-12 py-8 md:flex-row">
          <div className="flex flex-col justify-center space-y-8">
            <motion.h1
              initial={{ scale: 1 }}
              transition={{}}
              whileHover={{ scale: 1.1 }}
              className="bg-superfami-green self-center rounded-full p-3 text-3xl text-white drop-shadow-md"
            >
              FRONTEND
            </motion.h1>
            <SkillCard>React</SkillCard>
            <SkillCard>Next.js</SkillCard>
            <SkillCard>Typescript</SkillCard>
            <SkillCard>Tailwind</SkillCard>
          </div>
          <div className="flex flex-col space-y-8 overflow-hidden">
            <h1 className="bg-superfami-blue self-center rounded-full p-3 text-3xl text-white drop-shadow-md">
              BACKEND
            </h1>
            <SkillCard>MySQL</SkillCard>
            <SkillCard>MongoDB</SkillCard>
            <SkillCard>PostgreSQL</SkillCard>
            <SkillCard>Node.js</SkillCard>
          </div>
          <div className="flex flex-col space-y-8 overflow-hidden">
            <h1 className="bg-superfami-yellow self-center rounded-full p-3 text-3xl text-white drop-shadow-md">
              DEVELOPMENT
            </h1>
            <SkillCard>C++</SkillCard>
            <SkillCard>C#</SkillCard>
            <SkillCard>Java</SkillCard>
            <SkillCard>Unity</SkillCard>
          </div>
          <div className="flex flex-col space-y-8 overflow-hidden">
            <h1 className="bg-superfami-red self-center rounded-full p-3 text-3xl text-white drop-shadow-md">
              TOOLS
            </h1>
            <SkillCard>VSCode</SkillCard>
            <SkillCard>Github</SkillCard>
            <SkillCard>Photoshop</SkillCard>
          </div>
        </motion.div>
        <h1 className="pb-8 font-manrope-bold text-sm">and always expanding!</h1>

      </motion.div>
    </>
  );
}

function SkillCard({ children }: { children: string }) {
  return (
    <>
      <h1 className="font-manrope text-xl">{children}</h1>
    </>
  );
}

export default Skills;
