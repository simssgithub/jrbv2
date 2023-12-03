import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section pb-24" id="contact"> {/* Added pb-24 for padding at the bottom */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase font-medium text-gradient mb-2
              tracking-wide">
                {"Let's Connect"}
              </h4>
              <h2 className="text-[20px] lg:text-[40px] leading-none mb-12">
                {
                  "I'm currently looking for new opportunities"
                }
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 max-w-[500px] border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
               placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none 
              w-full placeholder:text-white focus:border-accent transition-all 
              resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
