import React from "react";
import FrameOne from "../../components/FrameOne/FrameOne";
import FrameTwo from "../../components/FrameTwo/FrameTwo";
const Portfolio = () => {
  return (
    <div className="max-w-sm flex flex-col justify-center items-center sm:max-w-md md:max-w-2xl lg:max-w-4xl  lg:flex-row lg:justify-between xl:max-w-5xl">
      <FrameOne />
      <FrameTwo />
    </div>
  );
};
export default Portfolio;


