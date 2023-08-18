import React from "react";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
const Contact = () => {
  return (
    <div id="contact" className="bg-gray-700 p-1 sm:p-10 md:p-20 flex flex-row justify-between md:justify-center min-w-[100px] w-full sm:gap-10">
      <div className="flex flex-col sm:gap-2">
        <h1 className="text-white text-[11px] sm:text-sm ">
          CONTACT DETAILS
        </h1>
        <div className="flex flex-row sm:gap-2 text-[11px] sm:text-lg text-gray-500 items-center">
            <img src={phone} className="h-4 sm:h-5 " />
            <h1>+994 55 761 50 69</h1>
        </div>
        <div className="flex flex-row sm:gap-2 text-[11px] sm:text-lg text-gray-500 items-center">
            <img src={email} className="h-4 sm:h-5" />
            <h1>misaxanli@gmail.com</h1>
        </div>
      </div>
      <div className="flex flex-col sm:gap-2">
        <h1 className="text-white text-[11px] sm:text-sm">
          SOURCE
        </h1>
        <div className="flex flex-row text-[11px] sm:gap-2 sm:text-lg  text-gray-500 items-center ">
            <img src={github} className="h-3 sm:h-5 -hover:-gray-900 duration-200" />
            <a className="hover:text-gray-950 duration-200" href="https://github.com/MetinVn" target="_blank">Github</a>
        </div>
        <div className="flex flex-row text-[11px] sm:gap-2 sm:text-lg text-gray-500 items-center ">
            <img src={linkedin} className="h-3 sm:h-5"/>
            <a className="hover:text-gray-950 duration-200" href="https://www.linkedin.com/in/metin-isakhanli-217374266/" target="_blank">Linkedin</a>
        </div>
      </div>
      <div className="flex flex-col sm:gap-2">
        <h1 className="text-white text-[11px] sm:text-sm">
          SOCIAL
        </h1>
        <div className="flex flex-row gap-1 text-[11px] sm:text-lg cursor-default text-gray-500 items-center">
            <p>Instagram</p>
        </div>
        <div className="flex flex-row text-[11px] sm:text-lg cursor-default gap-1 text-gray-500 items-center">
            <p>Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
