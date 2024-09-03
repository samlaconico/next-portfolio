"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [center, setCenter] = useState(true);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onAnimationComplete={() => setCenter(false)}
        transition={{ duration: 0.4 }}
        className={
          center
            ? "flex flex-row justify-center py-4 font-manrope-bold text-3xl"
            : "flex flex-row justify-between py-4 font-manrope-bold text-3xl"
        }
      >
        <motion.div transition={{ duration: 0.4, ease: "easeInOut" }} layout>
          SL
        </motion.div>
        <motion.div transition={{ duration: 0.4, ease: "easeInOut" }} layout>
          BUTTON
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
