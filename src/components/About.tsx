"use client";

import { motion } from "framer-motion";
import { about } from "@/data";

export function About() {
  return (
    <>
      <motion.div className="my-16 overflow-hidden text-center font-manrope text-2xl">
        {about.body}
      </motion.div>
    </>
  );
}

export default About;
