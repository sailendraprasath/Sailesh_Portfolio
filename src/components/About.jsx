import profilepic from "../assets/Sailesh2.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-16 text-center text-4xl "
        >
          About <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={profilepic} alt="" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/2 "
          >
            <div className="flex justify-center lg:justify-start ">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
            <div className="flex justify-center lg:justify-start my-8">
              <a
                href="public/Sailendra_Prasath_N.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v16h16V4H4zm4 8l4 4 4-4m-4-4v8"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
