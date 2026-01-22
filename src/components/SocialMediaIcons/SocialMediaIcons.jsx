import React from "react";
import {
  FaInstagram,
  FaTwitter,
 FaLinkedinIn,
   FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center gap-x-4">
      <button className="w-5 h-5 rounded-full bg-[#C13584] flex justify-center items-center cursor-pointer">
        <FaInstagram size={12} />
      </button>
      <button className="w-5 h-5 rounded-full bg-blue-500 flex justify-center items-center cursor-pointer">
        <FaTwitter size={12} />
      </button>
      <button className="w-5 h-5 rounded-full bg-blue-700 flex justify-center items-center cursor-pointer">
        <FaLinkedinIn size={12} />
      </button>
      <button className="w-5 h-5 rounded-full bg-blue-800 flex justify-center items-center cursor-pointer">
        <FaFacebookF size={12} />
      </button>
      <button className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center cursor-pointer">
        <FaYoutube size={12} />
      </button>
    </div>
  );
};

export default SocialMediaIcons;
