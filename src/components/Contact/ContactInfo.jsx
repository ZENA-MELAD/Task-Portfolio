import React from "react";
import { PiPhoneFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const ContactInfo = () => {
  return (
    <div className="flex flex-col  gap-y-2 md:w-1/2">
      <h2 className="font-bold text-lg">Get in touch</h2>
      <p className="text-xs md:w-3/4  font-extralight lg:text-xxs">
        I’m very approachable and would love to speak to you. Feel free to call,
        send me an email . Follow me in social media or simply complete the
        enquiry form.
      </p>
      <div className="mt-2 flex flex-col justify-center gap-y-2">
        <div className="flex gap-x-1.5">
          <div className="w-8 h-8 rounded-full bg-[#1C1C65] flex justify-center items-center">
            <PiPhoneFill size={22} />
          </div>
          <p className="mt-1 text-xs lg:text-xxs xl:text-xs">
            <span>1-514-781-3212</span>
          </p>
        </div>
        <div className="flex gap-x-1.5">
          <div className="w-8 h-8 rounded-full bg-[#1C1C65] flex justify-center items-center">
            <MdEmail size={20} />
          </div>
          <p className="mt-1 text-xs lg:text-xxs xl:text-xs">
            <a href="mailto:Sou12@gmail.com" className="underline">
              Sou12@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
