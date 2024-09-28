"use client";

import { motion } from "framer-motion";
import { about } from "@/data";

export function About() {
  return (
    <>
      <motion.div className="my-16  grid-flow-row grid-rows-2 overflow-hidden text-center font-manrope text-2xl md:grid-flow-col md:grid-cols-2 md:grid-rows-none">
        <div className="text-balance p-4">
          <div className="pb-5 font-manrope-bold text-4xl">
            <h1>
              Hi, my name&apos;s Sam Laconico!{" "}
              <span className="text-6xl">&#128075;</span>
            </h1>
          </div>
          <p>
            I am a software engineer/web developer located in the Los Angeles
            area with a B.S of Computer Science from California State University
            Northridge.
          </p>
          <div className="pt-5">
            <p>
              I&apos;ve got a huge passion for creating and love putting that
              energy into creating websites, apps, and games using my background
              with programming. I love working in teams and collaborating with
              people on projects!
            </p>
          </div>
        </div>

        
      </motion.div>
    </>
  );
}

export default About;
