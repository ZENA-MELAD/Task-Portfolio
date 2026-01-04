import React from "react";
import ActionButton from "../../components/UI/ActionButton/ActionButton";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-3.5 w-3/5 mt-16">
      <h1 className="font-bold text-3xl">Creative UI Designer Sourasith Phomhome Based in Monteal</h1>
      <div className=" flex justify-center items-center gap-x-3 w-10/12">
        <ActionButton label="hire me" color="bg-gray-600" />
        <ActionButton
          label="download cv"
          color="bg-gradient-to-r from-[#C961DE] to-[#2957A3]"
        />
      </div>
    </div>
  );
};

export default Home;
