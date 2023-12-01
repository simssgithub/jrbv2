import React from "react";
import myPic from "../assets/mypic.png"; // Adjust the import based on the correct path and filename
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa"; // Fix the import name here
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              JAY <span>BAUTISTA</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Dev",
                  2000,
                  "Mobile Dev",
                  2000,
                  "Paralegal Adviser",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a
                href="https://www.google.com"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/simssgithub">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/jay-bautista-bautista-aa8142b1/">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://twitter.com/jrbwebdiebin">
                <FaTwitterSquare className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={myPic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
