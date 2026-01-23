import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import Img from "../../assets/images/Group 1184 (1).png";
import SideMenu from "../UI/SideMenu/SideMenu";
import Home from "../../Sections/Home/Home";
import About from "../../Sections/About/About";
import Img2 from "../../assets/images/Group 1166.png";
import Img3 from "../../assets/images/Group 1190.png"
const FrameOne = () => {
  return (
    <div className="bg-primary relative mt-10  flex flex-col py-6 w-fit">
      <div className="w-16 absolute z-20 -left-6 -top-8 md:w-32 md:-top-14 md:-left-10 lg:-top-16 lg:-left-16">
        <img src={Img} alt="this is a one image" className="w-full" />
      </div>
      <Navbar />
      <div className="flex gap-x-14 items-start ">
        <SideMenu />
        <Home />
      </div>
      <About />
      <div className=" absolute w-36 -left-16 md:-left-20 -bottom-10 md:w-40  lg:w-48 xl:-left-24 xl:-bottom-20 xl:w-52">
        <img src={Img2} />
      </div>
      <div className=" hidden lg:flex absolute z-20 w-2/3 top-16 lg:-right-32 xl:-right-36">
        <img src={Img3}/>
      </div>
    </div>
  );
};

export default FrameOne;
