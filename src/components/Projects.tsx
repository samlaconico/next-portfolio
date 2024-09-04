"use client";

import { motion } from "framer-motion";

type projectProps = {
  children: string;
  image: string;
  body: string;
};

export function Projects() {
  return (
    <>
      <motion.div
        initial={{}}
        animate={{}}
        transition={{}}
        className="my-16 overflow-hidden"
      >
        <h1 className="text-center font-manrope-bold text-4xl">
          Selected Work
        </h1>
        <Project body="" image="">
          Genesis1 Auto Concepts
        </Project>
      </motion.div>
    </>
  );
}

async function Project({ children, image, body }: projectProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <motion.div className="my-16 w-1/2 overflow-hidden rounded-xl bg-neutral-100">
        <h1 className="text-nowrap font-manrope-bold text-3xl">{children}</h1>
      </motion.div>
    </>
  );
}

export default Projects;
