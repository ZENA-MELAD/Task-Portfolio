import React from "react";
import Contact from "../../components/Contact/Contact";
import Img from "../../assets/images/working.png";

const ContactMe = () => {
  return (
 <section id="contact" className="w-full relative mt-32 md:mt-36">
<div>
   <Contact />
</div>
<div className="z-20 absolute w-60 h-60 flex justify-center items-center -left-10 -top-40 md:-top-48 md:w-80 md:-left-14 lg:w-64 lg:-top-44 lg:-left-10 ">
    <img
      src={Img}
      className=""
    />
  </div>
 
</section>
  );
};

export default ContactMe;
