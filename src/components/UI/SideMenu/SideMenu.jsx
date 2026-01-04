import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import SvgComponent from "../../SvgComponent/SvgComponent";
const SideMenu = () => {
  return (
    <div className="bg-gray-500 relative left-0 rounded-tr-3xl  rounded-br-3xl w-fit mt-16">
      <SvgComponent />
      <div className=" absolute top-0  z-10 flex flex-col justify-center items-center gap-y-10  w-full h-full">
        <a href="#">
          <IoMdHome />
        </a>
        <a href="#">
          <IoMdPerson />
        </a>
        <a href="#">
          <IoBag />
        </a>
        <a href="#">
          <FaPhoneAlt  size={12}/>
        </a>
        <a href="#">
          <IoIosSearch />
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
