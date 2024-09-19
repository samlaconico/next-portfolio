"use client";

import { motion, stagger, useAnimate } from "framer-motion";

export function Hero() {
  const [scope, animate] = useAnimate();

  return (
    <>
      <motion.div className="flex h-[50vh] flex-col content-center items-center justify-evenly overflow-hidden rounded-xl border-[1px] bg-neutral-100 bg-cover p-6 text-center shadow-md md:flex-row md:text-left">
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
            className="size-52 rounded-3xl border-4 border-b-superfami-yellow border-l-superfami-green border-r-superfami-red border-t-superfami-blue lg:size-96"
            src="images/portrait.jpeg"
          />
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
