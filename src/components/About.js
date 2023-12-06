import React, { useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Web Development</h2>
    <p>
      NextJS, ReactJS, JavaScript, Bootstrap, HTML, CSS, GitHub
    </p>
  </div>
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Backend Development and Frameworks</h2>
    <p>
      .NET Blazor, C#, Management of MSSQL and Azure Database
    </p>
  </div>
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Mobile App Development</h2>
    <p>
      Android using Android Studio
    </p>
  </div>
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Content Management Systems (CMS)</h2>
    <p>
      Shopify, WordPress, Joomla
    </p>
  </div>
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Server and System Administration</h2>
    <p>
      Installation, Configuration and Management of Microsoft Window Server and Active Directory
    </p>
  </div>
  <div className="border border-gray-300 rounded p-4">
    <h2 className="text-lg font-bold mb-2">Hosting and Deployment</h2>
    <p>
      Netlify (deployment and hosting), Smarterasp.net (hosting provider)
    </p>
  </div>
</div>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Juris Doctor</li>
        <li>BS Information Technology</li>
      </ul>
    ),
  },
  {
    title: "Award",
    id: "award",
    content: (
      <ul className="list-disc pl-2">
        Doctor of Philosophy in Business Administration {"(Honoris Causa)"}<br/>
        Awarded by Asian University International {"(AUI-MUN)"}. 
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
