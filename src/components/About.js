import React, { useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Nextjs</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>C Sharp</li>
        <li>Microsoft SQL Server</li>
        <li>Microsoft Azure</li>
        <li>Shopify</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Doctor of Philosophy in Business Administration {"(Honoris Causa)"}
        </li>
        <li>Juris Doctor</li>
        <li>BS Information Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Webcon on Information Security</li>
        <li>Primer on Data Privacy Act of 2012</li>
        <li>Basic Linux System Administration Training</li>
        <li>Basic Android Training</li>
        <li>CCNA Routing and Switching: Routing and Switching Essentials</li>
        <li>CCNA Exploration 1: Network Fundamentals</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
       bg-top w-full mix-blend-lighten"
        ></motion.div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[40px] font-tertiary text-gradient mb-2">
            About Me
          </motion.h2>
          <motion.p 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-base lg:text-lg">
            {
              "I am a front end web developer with a passion for creating interactive and responsive web applications. I have experience working with .NET and C sharp for building web application, JavaScript and Bootstrap, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set as a matter of facts this portfolio was created on Reactjs and TailwindCSS also I'm building online shop using Shopify which currently i already publish and being use at the very moment. I am a team player and I am excited to work with others to create amazing applications. "
            }
          </motion.p>
          <motion.div 
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-row justify-start font-tertiary text-gradient mb-2 mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} 
          className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
