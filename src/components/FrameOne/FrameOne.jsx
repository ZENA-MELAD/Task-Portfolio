import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import Img from "../../assets/images/Group 1184 (1).png";
const FrameOne = () => {
  return (
    <div className="bg-primary relative mt-10 w-11/12 sm:w-full lg:w-2/3">
          <div className="w-16 absolute z-20 -left-6 -top-8 md:w-28 md:-top-16 md:-left-16 lg:-left-14">
        <img src={Img} alt="this is a one image" className="w-full" />
      </div>
     <Navbar />
    
    </div>
  );
};

export default FrameOne;
