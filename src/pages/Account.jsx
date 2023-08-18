import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import closeBtn from "../images/close.svg";
const Account = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  if (user !== null) {
    user.providerData.forEach((profile) => {
      localStorage.setItem("name", profile.displayName);
      localStorage.setItem("email", profile.email);
    });
  }
  return (
    <div className="h-screen w-full min-w-[100px] flex flex-col bg-[url('./images/bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col p-10 w-full gap-5 sm:flex-row justify-around text-center items-center font-[Poppins]">
        <a
          className="px-5 text-xs sm:text-md py-2 border-2 rounded-md text-white hover:bg-white hover:text-black duration-300"
          href="/Multi-Page-Portfolio/"
        >
          Home
        </a>
        {clicked ? (
          <div className="py-5 flex flex-col gap-5 backdrop-blur-[2px]">
            <button onClick={handleClick}>
              <img
                className="absolute h-8 top-0 right-0 cursor-pointer border-2 rounded-md hover:opacity-80"
                src={closeBtn}
              />
            </button>
            <p className="p-2 text-[13px] whitespace-pre overflow-scroll md:overflow-hidden text-white border-2 rounded-lg hover:text-black hover:bg-white duration-300">
              Name: {localStorage.getItem("name")}
            </p>
            <p className="p-2 text-[13px] whitespace-pre overflow-scroll md:overflow-hidden text-white border-2 rounded-lg hover:text-black hover:bg-white duration-300">
              Email: {localStorage.getItem("email")}
            </p>
          </div>
        ) : (
          <button
            className="px-5 py-2 border-2 text-xs sm:text-md rounded-md text-white hover:bg-white hover:text-black duration-300"
            onClick={handleClick}
          >
            Personal Info
          </button>
        )}
      </div>
    </div>
  );
};

export default Account;
