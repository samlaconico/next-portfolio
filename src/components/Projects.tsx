"use client";

import { motion, useAnimate } from "framer-motion";
import { projects } from "@/data";

type projectProps = {
  children: string;
  image: string;
  body: string;
  tech: string[];
  techColors: string[];
  link: string;
  reversed: boolean;
};

export function Projects() {
  return (
    <>
      <motion.div
        initial={{}}
        animate={{}}
        transition={{}}
        id="projects"
        className="my-16 overflow-hidden"
      >
        <h1 className="text-center font-manrope-bold text-4xl">
          Selected Work
        </h1>

        {projects.map((data, index) => {
          if (index % 2 == 0) {
            return (
              <div key={index} className="">
                <div className="flex justify-start">
                  <Project
                    key={index}
                    body={data.body}
                    image={data.image}
                    tech={data.tech}
                    techColors={data.techColors}
                    link={data.link}
                    reversed
                  >
                    {data.title}
                  </Project>
                </div>
                <div className="select-none text-center font-extrabold">
                  {index != projects.length - 1 ? "|" : ""}
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="">
                <div className="flex justify-end">
                  <Project
                    key={index}
                    body={data.body}
                    image={data.image}
                    tech={data.tech}
                    techColors={data.techColors}
                    link={data.link}
                    reversed={false}
                  >
                    {data.title}
                  </Project>
                </div>
                <div className="select-none text-center font-extrabold">
                  {index != projects.length - 1 ? "|" : ""}
                </div>
              </div>
            );
          }
        })}
      </motion.div>
    </>
  );
}

async function Project({
  children,
  image,
  body,
  tech,
  techColors,
  link,
  reversed,
}: projectProps) {
  const [scope, animate] = useAnimate();

  if (reversed) {
    return (
      <>
        <motion.div className="my-8 grid h-[30rem] w-screen grid-cols-1 grid-rows-2 justify-between overflow-hidden rounded-xl border-[1px] bg-neutral-100 shadow-md md:h-96 md:w-5/6 md:grid-cols-2 md:grid-rows-1">
          <div className="flex flex-col justify-between p-4">
            <div className="">
              <h1 className="text-wrap text-left font-manrope-bold text-3xl">
                {children}
              </h1>
              <p className="font-manrope text-lg md:text-xl">{body}</p>
            </div>

            <div className="no-scrollbar flex flex-shrink gap-2 overflow-x-scroll">
              {tech.map((value, index) => {
                return (
                  <Tech key={index} color={techColors[index]}>
                    {value}
                  </Tech>
                );
              })}
            </div>
          </div>
          <a
            ref={scope}
            onMouseEnter={() => {
              animate(
                scope.current,
                { rotate: -3, scale: 1.04 },
                { duration: 0.2 },
              );
            }}
            onMouseLeave={() => {
              animate(
                scope.current,
                { rotate: 0, scale: 1 },
                { duration: 0.2 },
              );
            }}
            onClick={() => {
              animate(scope.current, {rotate:0, scale: 25}, {duration: 2})
            }}
            href={link}
          >
            <img
              src={image}
              className="h-full w-full overflow-hidden object-cover"
            ></img>
          </a>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <motion.div className="my-8 grid h-[30rem] w-screen grid-cols-1 grid-rows-2 justify-between overflow-hidden rounded-xl border-[1px] bg-neutral-100 shadow-md md:h-96 md:w-5/6 md:grid-cols-2 md:grid-rows-1">
          <a
            ref={scope}
            onMouseEnter={() => {
              animate(
                scope.current,
                { rotate: 3, scale: 1.04 },
                { duration: 0.2 },
              );
            }}
            onMouseLeave={() => {
              animate(
                scope.current,
                { rotate: 0, scale: 1 },
                { duration: 0.2 },
              );
            }}
            onClick={() => {
              animate(scope.current, {rotate:0, scale: 25}, {duration: 2})
            }}
            href={link}
          >
            <img
              src={image}
              className="h-full w-full overflow-hidden object-cover"
            ></img>
          </a>
          <div className="flex flex-col justify-between p-4 text-right">
            <div className="">
              <h1 className="text-wrap font-manrope-bold text-3xl">
                {children}
              </h1>
              <p className="font-manrope text-xl">{body}</p>
            </div>

            <div className="flex justify-end gap-2">
              {tech.map((value, index) => {
                return (
                  <Tech key={index} color={techColors[index]}>
                    {value}
                  </Tech>
                );
              })}
            </div>
          </div>
        </motion.div>
      </>
    );
  }
}

function Tech({ children, color }: { children: string; color: string }) {
  return (
    <p
      className={`w-min rounded-md font-manrope-bold ${color} px-2 text-sm text-white`}
    >
      {children}
    </p>
  );
}

export default Projects;
