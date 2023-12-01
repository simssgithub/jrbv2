import React from "react";
import Image from "../assets/mypic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              JAY <span>BAUTISTA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[40px] font-secondary 
            font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Dev",
                  1000,
                  "Mobile Dev",
                  1000,
                  "Paralegal Adviser",
                  1000,
                ]}
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            >
              {
                "A front-end web developer and entrepreneur, I am a results-driven professional with a solid history in developing, testing, and maintaining web projects. I have a proven track record in effectively overseeing copyright issues across all company projects, guaranteeing the protection of intellectual property and adherence to regulations."
              }
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full btn btn-lg mt-3">
                <span className="btn btn-lg">
                  Hire me
                </span>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-800 via-blue-500 to-teal-100 hover:bg-slate-500 text-white mt-3">
                <span className="block bg-indigo-800 hover:bg-slate-800 rounded-full px-5 py-2">
                  Download My CV
                </span>
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
