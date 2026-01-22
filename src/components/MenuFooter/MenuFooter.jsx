import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const MenuFooter = () => {
  return (
    <div className="text-xs font-light capitalize">
      <ul className=" flex flex-col justify-center items-center gap-y-8 sm:flex-row gap-x-8">
        
        <li>
          <a href="#home" className="flex items-center gap-x-1.5">
            <IoMdHome />
            <span>home</span>
          </a>
        </li>

        <li>
          <a href="#about" className="flex items-center gap-x-1.5">
            <IoMdPerson />
            <span>about me</span>
          </a>
        </li>

        <li>
          <a href="#work" className="flex items-center gap-x-1.5">
            <IoBag />
            <span>works</span>
          </a>
        </li>

        <li>
          <a href="#contact" className="flex items-center gap-x-1.5">
            <FaPhoneAlt size={12} />
            <span>contact</span>
          </a>
        </li>

      </ul>
    </div>
  );
};


export default MenuFooter