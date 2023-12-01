import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {}
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2xl 
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50"
        >
          <Link>
            <BiHomeAlt className="cursor-pointer w-[60px] h-[60px] items-center justify-center"/>
          </Link>
          <Link>
            <BiUser className="cursor-pointer w-[60px] h-[60px] items-center justify-center"/>
          </Link>
          <Link>
            <BsClipboardData className="cursor-pointer w-[60px] h-[60px] items-center justify-center"/>
          </Link>
          <Link>
            <BsBriefcase className="cursor-pointer w-[60px] h-[60px] items-center justify-center"/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
