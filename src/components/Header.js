import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-5xl text-white font-semibold">
            JRB
          </h1>
          <div
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/simssgithub" target="new">
                <FaGithub className="text-3xl"/>
              </a>
              <a href="https://www.linkedin.com/in/jay-bautista-bautista-aa8142b1/" target="new">
                <FaLinkedin className="text-3xl"/>
              </a>
              <a href="https://twitter.com/jrbwebdiebin" target="new">
                <FaSquareXTwitter className="text-3xl"/>
              </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
