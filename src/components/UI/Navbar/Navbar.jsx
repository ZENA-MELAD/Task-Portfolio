import React, { useState } from "react";
import Logo from "../../../assets/images/Logo name.png";
import { Sling as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-1 md:p-6 lg:py-4">
      <div className="flex items-center justify-around md:hidden">
        <div className="w-6">
          <img src={Logo} alt="Company logo" />
        </div>
        <div className=" z-50">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            duration={0.5}
            size={20}
            label="Toggle menu"
          />
        </div>
      </div>
      <ul
        className={`flex flex-col justify-center items-center gap-y-2 capitalize font-light
        md:flex-row md:justify-center md:gap-x-10 md:gap-y-0 transition-all duration-700 ease-in-out text-sm
         overflow-hidden md:max-h-96 md:opacity-100 md:pointer-events-auto md:text-base
         ${isOpen?" max-h-96 opacity-100 pointer-events-auto":"max-h-0 opacity-0 pointer-events-none"} `}
      >
        <li>
          <a href="#" onClick={()=>setIsOpen(false)}>home</a>
        </li>
        <li>
          <a href="#" onClick={()=>setIsOpen(false)}>about</a>
        </li>
        <li className="hidden md:block">
          <img src={Logo} alt="Company logo" className="w-8" />
        </li>
        <li>
          <a href="#" onClick={()=>setIsOpen(false)}>work</a>
        </li>
        <li>
          <a href="#" onClick={()=>setIsOpen(false)}>contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
