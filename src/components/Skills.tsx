"use client";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, height: "0px", paddingTop: 0, paddingBottom: 0 }}
        animate={{
          opacity: 1,
          height: "100%",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: .8 }}
        className="my-16 flex flex-col justify-around gap-4 overflow-hidden rounded-lg border-[1px] bg-neutral-100 text-center font-manrope-bold md:flex-row"
      >
        <div className="flex flex-col space-y-8 overflow-hidden">
          <motion.h1 className="rounded-full bg-green-600 p-3 text-3xl text-white">
            FRONTEND
          </motion.h1>
          <SkillCard>React</SkillCard>
          <SkillCard>Next.js</SkillCard>
          <SkillCard>Typescript</SkillCard>
          <SkillCard>Tailwind</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="rounded-full bg-blue-700 p-3 text-3xl text-white">
            BACKEND
          </h1>
          <SkillCard>MySQL</SkillCard>
          <SkillCard>MongoDB</SkillCard>
          <SkillCard>PostgreSQL</SkillCard>
          <SkillCard>Node.js</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="rounded-full bg-yellow-300 p-3 text-3xl text-white">
            DEVELOPMENT
          </h1>
          <SkillCard>C++</SkillCard>
          <SkillCard>C#</SkillCard>
          <SkillCard>Java</SkillCard>
          <SkillCard>Unity</SkillCard>
        </div>
        <div className="flex flex-col space-y-8 overflow-hidden">
          <h1 className="rounded-full bg-red-500 p-3 text-3xl text-white">
            TOOLS
          </h1>
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
