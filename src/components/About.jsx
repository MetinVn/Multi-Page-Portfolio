import React from "react";
import person from "../images/person.jpg";
import Down from "../images/down.svg";
const Home = () => {
  return (
    <>
      <div
        id="about"
        className="flex h-auto md:h-screen flex-col justify-center bg-[url('./images/circle.jpg')] bg-cover bg-top w-full"
      >
        <div className="font-[Bricolage Grotesque] flex flex-col md:flex-row gap-2 max-w-[1250px] px-5 py-10 w-full mx-auto">
          <div>
            <img
              src={person}
              className="rounded-md object-cover object-center h-full w-[800px] shadow-lg shadow-black"
            />
          </div>
          <div className="border-2 flex flex-col leading-4 sm:leading-6 md:leading-10 text-[13px] sm:text-sm sm:p-5 md:text-xl justify-between border-blue-300 p-3 md:p-10 backdrop-blur-sm rounded-md shadow-lg shadow-blue-300">
            <h1 className="text-start text-white md:text-3xl">
              Hi! I'm Metin,
              <br />{" "}
              <span className="text-[#48cae4] md:text-2xl">
                Frontend Developer
              </span>
            </h1>
            <h1 className="text-start text-white  font-thin">
              I love designing responsive websites for clients all over the
              globe.
            </h1>
            <h1 className="text-start text-white  font-thin">
              I have been designing for the web for quite a while, but that
              doesn't matter much now,everything is changing! I rather say i'll
              never stop learning and having curiousity.
            </h1>
          </div>
        </div>
        <div className="hidden md:flex w-full text-white p-2 flex-col items-center group">
          <a
            href="#projects"
            className="underline text-xl text-white hover:text-opacity-60 duration-300 "
          >
            Explore my work
          </a>
          <img
            src={Down}
            className="h-5 scale-0 translate-y-[-40%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
