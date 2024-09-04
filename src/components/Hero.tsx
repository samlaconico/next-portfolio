"use client";

import { motion, stagger, useAnimate } from "framer-motion";
export function Hero() {
  const [scope, animate] = useAnimate();

  return (
    <>
      <motion.div className="flex h-[50vh] flex-col content-center items-center justify-evenly overflow-hidden rounded-xl border-[1px] bg-neutral-100 px-6 md:flex-row">
        <div>
          <motion.h1 ref={scope} className="font-manrope-bold text-7xl">
            Sam Laconico
          </motion.h1>
          <h2 className="font-manrope text-4xl">
            Creative. Programmer. Designer
          </h2>
        </div>
        <div>
          <img
            className="border-l-superfami-green border-t-superfami-blue border-b-superfami-yellow border-r-superfami-red size-72 rounded-full border-4"
            src="images/portrait.jpeg"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
