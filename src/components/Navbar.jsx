import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/Protect";
import Left from "../images/Left.svg";
import Right from "../images/Right.svg";
import Down from "../images/down.svg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = UserAuth();
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  const handleSignout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <>
      <div
        id="home"
        className="h-screen flex flex-col justify-center text-center bg-[url('./images/bg.jpg')] bg-cover bg-center"
      >
        <div className="fixed hidden md:flex top-0 h-20 z-10 w-full mx-auto p-10 flex-row items-center justify-between font-[Poppins]">
          <div>
            <Link
              to="/Multi-Page-Portfolio/"
              id="animate1"
              className="text-xs sm:text-md md:text-2xl text-white select-none"
            >
              Metin Isakhanli
            </Link>
          </div>
          <div className="flex text-white items-center gap-5">
            <a href="#home" id="animate">
              Home
            </a>
            <a href="#about" id="animate">
              About
            </a>
            <a href="#projects" id="animate">
              Projects
            </a>
            <a href="#contact" id="animate">
              Contact
            </a>

            <div className="flex gap-5">
              {user?.displayName ? (
                <button
                  className="border-2 border-red-400 rounded-md px-4 py-2 hover:bg-red-400 hover:text-white duration-300"
                  onClick={handleSignout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="border-2 border-black text-white bg-black  rounded-md px-8 py-2 hover:bg-transparent  duration-300"
                  to="/Multi-Page-Portfolio/signin"
                >
                  Sign in
                </Link>
              )}
              {user?.displayName ? (
                <Link
                  className="border-2 rounded-md px-4 py-2 text-white border-green-400 bg-trasnparent hover:bg-green-400 duration-300"
                  to="/Multi-Page-Portfolio/account"
                >
                  Account
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="w-15 text-white h-5 m-auto flex flex-col items-center group">
          <h1>You have landed!</h1>
          <a
            href="#about"
            className="underline text-xl text-white hover:text-opacity-60 duration-300 "
          >
            Explore...
          </a>
          <img
            loading="lazy"
            src={Down}
            className="h-5 scale-0 translate-y-[-40%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
          />
        </div>
      </div>
      {/* //Sidebar */}

      <div className="md:hidden z-10 fixed top-0 right-0 bottom-0 min-w-[40%] h-auto min-w-[150px">
        <button onClick={handleNavbar}>
          {navbar ? (
            <img
              loading="lazy"
              className="md:hidden absolute top-5 right-0 h-5 m-2 z-10"
              src={Right}
            />
          ) : (
            <img
              loading="lazy"
              className="md:hidden absolute top-5 right-0 h-5 m-2 z-10"
              src={Left}
            />
          )}
        </button>
        <div
          className={
            navbar
              ? "md:hidden flex flex-col bg-transparent/60 justify-start h-full items-center border-2 rounded-l-md backdrop-blur-[1px] translate-x-1 ease-in duration-300"
              : "translate-x-[101%] flex flex-col justify-start h-full items-center border-2 rounded-l-md backdrop-blur-[1px] ease-out duration-300"
          }
        >
          <div className="py-3 flex flex-col text-center">
            <a className="p-2" href="#home" id="animate">
              Home
            </a>
            <a className="p-2" href="#about" id="animate">
              About
            </a>
            <a className="p-2" href="#projects" id="animate">
              Projects
            </a>
            <a className="p-2" href="#contact" id="animate">
              Contact
            </a>
          </div>
          <div className="flex flex-col justify-center min-w-[40px] gap-3">
            {user?.displayName ? (
              <button
                className=" text-white text-center text-xs p-3 px-3 sm:px-8 border-2 border-white rounded-md  hover:bg-white hover:text-black duration-300"
                onClick={handleSignout}
              >
                Logout
              </button>
            ) : (
              <Link
                className="text-white text-center text-xs p-3 px-3 sm:px-8 border-2 border-white rounded-md  hover:bg-white hover:text-black duration-300"
                to="/Multi-Page-Portfolio/signin"
              >
                Sign in
              </Link>
            )}
            {user?.displayName ? (
              <Link
                className=" text-white text-center text-xs p-3 px-3 sm:px-8  items-center border-2 border-white rounded-md  hover:bg-white hover:text-black duration-300"
                to="/Multi-Page-Portfolio/account"
              >
                Account
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Navbar;
