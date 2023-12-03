import React from "react";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-10"
        >
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                rem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's 
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pre title */}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
          {/* end for motion*/}
          <div className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pre title */}
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </motion.div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </motion.div>
            {/* image */}
            <motion.div
              variants={fadeIn("right", 0.2)} // Use a different variant for img3
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
              z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pre title */}
              <motion.div
                variants={fadeIn("right", 0.2)} // Use the same variant for consistency
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Design</span>
              </motion.div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
