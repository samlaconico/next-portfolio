"use client";

import { motion, stagger, useAnimate } from "framer-motion";
export function Hero() {
  const [scope, animate] = useAnimate();

  return (
    <>
      <motion.div className="flex h-[50vh] flex-col content-center items-center justify-evenly overflow-hidden rounded-xl border-[1px] bg-neutral-100 p-6 text-center shadow-md md:flex-row md:text-left">
        <div>
          <motion.h1
            ref={scope}
            className="font-manrope-bold text-4xl md:text-7xl"
          >
            Sam Laconico
          </motion.h1>
          <h2 className="font-akshar text-2xl md:text-4xl">
            Creative. Programmer. Designer
          </h2>
        </div>
        <div>
          <img
            className="border-l-superfami-green border-t-superfami-blue border-b-superfami-yellow border-r-superfami-red size-52 rounded-full border-4 lg:size-96"
            src="images/portrait.jpeg"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
