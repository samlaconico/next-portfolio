"use client";

import { motion } from "framer-motion";
export function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, height: "0px", paddingTop: 0, paddingBottom: 0 }}
        animate={{
          opacity: 1,
          height: "50vh",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
        transition={{ duration: 1, ease: "backInOut", delay: .8 }}
        className="flex h-[50vh] flex-col content-center items-center justify-evenly overflow-hidden rounded-xl border-[1px] bg-neutral-100 px-6 md:flex-row"
      >
        <div>
          <h1 className="font-manrope-bold text-7xl">Sam Laconico</h1>
          <h2 className="font-manrope text-4xl">
            Creative. Programmer. Designer
            <br /> Connect with me
          </h2>
        </div>
        <div>
          <img className="size-72 rounded-full" src="images/portrait.jpeg" />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
