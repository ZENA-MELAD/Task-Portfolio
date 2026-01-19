import React from "react";
import ContactInfo from "./ContactInfo";
import Form from "../UI/Form/Form";
const Contact = () => {
  return (
    <div className="p-11 w-11/12 mx-auto flex flex-col gap-y-4 md:flex-row md:justify-around md:p-10  bg-[#2F2F8A] rounded-2xl border border-indigo-950">
      <ContactInfo />
      <Form />
    </div>
  );
};

export default Contact;
