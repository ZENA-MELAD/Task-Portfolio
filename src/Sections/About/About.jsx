import React, { useState } from "react";
import Img1 from "../../assets/images/Small Circle.png";
import Img2 from "../../assets/images/Frame 3 (1).png";

const About = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div id="about" className="w-full flex flex-col justify-center items-center gap-y-5">
      <div className="w-full  relative bottom-5 mt-28 flex justify-center items-center">
        <div className="w-3/5">
          <img src={Img1} className="" />
        </div>
        <div className=" absolute w-3/4 h-3/4  rounded-full bg-[#242B80] blur-3xl"></div>
        <div className="bg-gradient-to-b  from-[#b556c8] from-10%  to-[#1c3f79] to-90% rounded-full absolute bottom-9 md:bottom-12 flex justify-end items-center w-56 h-56 md:w-72 md:h-72">
          <div className=" w-1/2  text-balance flex flex-col gap-y-2">
            <h1 className="text-xs md:text-sm">About me </h1>
            <p className="text-xxs font-extralight">
              My name is Sourasith Phomhome. I’m a UI Designer and a instrutor
              based in Montreal. I’m curently working with Design+Code.
            </p>
            <button className="w-3/4 text-left capitalize cursor-pointer text-xs md:text-sm transition-all ease-in-out duration-500 hover:text-primary" onClick={()=>setIsOpen(!isOpen)}>
             {`${isOpen?"Show Less":"Read More"}`}
            </button>
          </div>
        </div>
        <div className="w-56 h-56 md:w-72 md:h-72 absolute bottom-9 md:bottom-12 rounded-full flex pointer-events-none">
          <div className="relative bottom-[69px] md:bottom-[88px]">
            <img src={Img2} className="object-contain" />
          </div>
        </div>
      </div>
      <div className={`${isOpen?"opacity-100 max-h-20 translate-y-0 scale-100":"opacity-0 max-h-0 -translate-y-2 scale-95"} w-1/2 transition-all ease-in-out duration-700 overflow-hidden`}>
        <p className="text-xs md:text-sm text-balance">
          My name is Sourasith Phomhome. I’m a UI Designer and a instrutor based
          in Montreal. I’m curently working with Design+Code. I’m passionate
          about creating digital experiences and teaching design. My goal is to
          help beginners to grow their skills.
        </p>
      </div>
    </div>
  );
};

export default About;
