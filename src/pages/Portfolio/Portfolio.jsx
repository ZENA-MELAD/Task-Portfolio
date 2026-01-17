import React from "react";
import FrameOne from "../../components/FrameOne/FrameOne";
import FrameTwo from "../../components/FrameTwo/FrameTwo";
const Portfolio = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-10 lg:flex-row lg:items-start lg:gap-x-5">
      <FrameOne />
      <FrameTwo />
    </div>
  );
};
export default Portfolio;


