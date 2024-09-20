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
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div>PROJECTS</div>
            </motion.button>
            <motion.a
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              href="https://drive.google.com/file/d/1-t3FvoMWM3tueqA1IRQfoU8ypb4qxAkx/view?usp=sharing"
            >
              <div>RESUME</div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
