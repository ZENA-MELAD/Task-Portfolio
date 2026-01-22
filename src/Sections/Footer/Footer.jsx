import React from "react";
import MenuFooter from "../../components/MenuFooter/MenuFooter";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="mt-32 px-6 py-10 bg-[#2F2F8A] w-full flex flex-col justify-center items-center gap-y-8">
      <MenuFooter />
      <SocialMediaIcons />
      <hr className="w-full h-1 text-white/15" />
      <div className="self-end text-xxs font-extralight">
        <p className="text-white/70">Terms of Service - Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
