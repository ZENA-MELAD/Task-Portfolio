import React from "react";
import ActionButton from "../../components/UI/ActionButton/ActionButton";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-start gap-y-3.5 w-3/4 md:w-3/5  mt-16">
      <h1 className="font-bold text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl">Creative UI Designer Sourasith Phomhome Based in Monteal</h1>
      <div className="flex flex-col items-start gap-y-3.5 md:flex-row md:justify-center md:items-center gap-x-3 w-full md:w-10/12">
        <ActionButton label="hire me" color="bg-gray-600" />
        <ActionButton
          label="download cv"
          color="bg-gradient-to-r from-[#C961DE] to-[#2957A3]"
        />
      </div>
    </section>
  );
};

export default Home;
