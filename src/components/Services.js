import React from "react";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { GiInjustice } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Experienced in enhancing how customers engage with our products, designing simple and enjoyable interfaces for new and long-time users to ensure satisfaction and engagement.",
  },
  {
    name: "Management",
    description:
      "Experienced in third-party hosting oversight, ensuring seamless web project deployment. Proficient in MSSQL, Azure database administration, and managing company email.",
  },
  {
    name: "Legal Works",
    description:
      "Interact with materials concerning legal compliance, contract formation, and company policy in the legal realm.",
  },
  {
    name: "Side Hustle",
    description:
      "Offering support for MBA students software theses through system development, excluding documentation services. This work is exclusively conducted during my free time.",
  },
];

const getIconForService = (serviceName) => {
  switch (serviceName.toLowerCase()) {
    case "ui/ux design":
      return <TbBrandJavascript />;
    case "management":
      return <SiMicrosoftsqlserver />;
    case "legal works":
      return <GiInjustice />;
    case "side hustle":
      return <LiaCoinsSolid />;
    // Add more cases for other services and icons as needed
    default:
      return null; // Return a default icon or null if no match is found
  }
};

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {"I'm a Web and Mobile Developer also a Paralegal Adviser"}
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              {services.map((service, index) => {
                const { name, description } = service;
                const ServiceIcon = getIconForService(name); // Get the icon for the service

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-6 font-tertiary text-gradient">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <span className="text-4xl">{ServiceIcon}</span>{" "}
                      {/* Render the icon and apply a larger size */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
