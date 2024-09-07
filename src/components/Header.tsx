"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";

export function Header() {
  const [center, setCenter] = useState(true);
  const [nav, openNav] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => setCenter(false)}
        transition={{ duration: 1, delay: 0 }}
        className={
          center
            ? "flex flex-row justify-center py-4 font-akshar-bold text-3xl"
            : "flex flex-row justify-between py-4 font-akshar-bold text-3xl"
        }
      >
        <motion.div transition={{ duration: 0.4, ease: "easeInOut" }} layout>
          SL
        </motion.div>
        <motion.div
          transition={{ duration: 0.4, ease: "easeInOut" }}
          layout
          className="flex"
        >
          <motion.div className="flex gap-4 md:gap-4">

            <a href="https://github.com/samlaconico">
              <TfiGithub className="mt-[.112rem]"/>
            </a>
            <a href="https://www.linkedin.com/in/sam-laconico-971b70275/">
            <TfiLinkedin />
            </a>

            <button
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div>PROJECTS</div>
            </button>
            <a href="https://drive.google.com/file/d/1Wb-g9G1K0KhZZPGCyh-iiu_UYYB2-l8i/view">
              <div>RESUME</div>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
