import React, { useState } from "react";
import TabButton from "./TabButton";

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
        <div
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
       bg-top w-full  object-cover rounded-lg"
        ></div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {
              "I am a front end web developer with a passion for creating interactive and responsive web applications. I have experience working with .NET and C sharp for building web application, JavaScript and Bootstrap, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set as a matter of facts this portfolio was created on Nextjs and TailwindCSS also I'm building online shop using Shopify which currently i already publish and being use at the very moment. I am a team player and I am excited to work with others to create amazing applications. "
            }
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
