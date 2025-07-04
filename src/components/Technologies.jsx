import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";
import OpenCV from "../assets/openCV.png";
import Python from "../assets/Python.png";
import Excel from "../assets/Excel.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <img
              src={OpenCV}
              alt="OpenCV"
              className="text-7xl w-[75px] bg-white rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <img
              src={Python}
              alt="OpenCV"
              className="text-7xl w-[75px] bg-white rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <img
              src={Excel}
              alt="OpenCV"
              className="text-7xl w-[75px] bg-white rounded-xl"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <FaHtml5 className="text-7xl text-orange-500 bg-white rounded-xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <FaCss3Alt className="text-7xl text-blue-600 bg-white rounded-xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <TbBrandJavascript className="text-7xl text-yellow-400 bg-white rounded-xl " />
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400  bg-white rounded-xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
          >
            <SiTailwindcss className="text-7xl text-cyan-400  bg-white rounded-xl" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
