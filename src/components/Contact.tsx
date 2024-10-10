import { motion } from "framer-motion";
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";


export function Contact() {
  return (
    <div className="text-center mb-24">
      <h1 className="font-manrope-bold text-4xl">Get connected with me!</h1>
      <div className="my-8 font-manrope text-2xl">
        <p>
          Email:{" "}
          <span className="">
            <a className="hover:underline" href="mailto:samlaconico@gmail.com">
              samlaconico@gmail.com
            </a>
          </span>
        </p>

        <div className="flex w-full justify-center gap-4 m-auto text-center pt-2 text-4xl">
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
              href="https://github.com/samlaconico"
            >
              <RiGithubFill/>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
              href="https://www.linkedin.com/in/sam-laconico-971b70275/"
            >
              <RiLinkedinBoxFill />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
              href="https://github.com/samlaconico"
            >
              <RiMailLine/>
            </motion.a>
          </div>
      </div>
    </div>
  );
}

export default Contact;
