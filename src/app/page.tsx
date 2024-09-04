"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Suspense } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
    initial={{height: "0rem"}}
    animate={{height: "100%"}}
    transition={{delay: 1, duration: 1, ease: "easeOut"}}
    className="mx-3 md:mx-0 overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Suspense>
        <Projects/>
      </Suspense>
    </motion.div>
  );
}
