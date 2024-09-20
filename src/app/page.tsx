"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <motion.div
    initial={{height: "0rem"}}
    animate={{height: "100%"}}
    transition={{delay: 1, duration: 1, ease: "easeInOut"}}
    className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Suspense>
        <Projects/>
      </Suspense>
      
    </motion.div>
  );
}
