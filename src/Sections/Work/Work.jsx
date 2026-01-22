import React from "react";
import Img1 from "../../assets/images/Big Circle.png";
import Img2 from "../../assets/images/3d 2.png"
import Img3 from "../../assets/images/Group 3436.png"
import Img4 from "../../assets/images/Comp 38 2.png"
import Card from "../../components/Card/Card";
const Work = () => {
  return (
    <div id="work" className="relative w-full flex items-center justify-center">
      <div className="relative">
        <img src={Img1} alt="Work Display" className="w-full h-auto" />
      </div>
      <div
        className="absolute w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center, 
            rgba(37, 56, 175, 0.8) 0%, 
            rgba(18, 24, 85, 0.6) 40%, 
            #0F103F 80%
          )`,
        }}
      ></div>
      <div className="absolute w-80 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute flex flex-col justify-center items-center gap-y-4">
      <div><h2 className="text-lg md:text-xl">My recent work</h2></div>
      <div className="w-full relative  flex justify-center items-center gap-20 sm:gap-36">
        <div className="w-1/3">
          <Card src={Img2} title="mockups" color="bg-purple-200/50" size=" h-12 sm:h-28"/>
        </div>
        <div className=" absolute w-1/3 ">
            <Card src={Img3} title="UI designs" color="bg-sky-200/65" size=" h-16 sm:h-32"/>
        </div>
        <div className="w-1/3">
            <Card src={Img4} title="mockups" color="bg-purple-200/50" size=" h-12 sm:h-28"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
