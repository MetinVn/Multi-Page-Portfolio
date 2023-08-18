import React from "react";
import Auth from "../images/Auth.png";
import Link from "../images/linkto.svg";
import Movie from "../images/MovieApp.png";
import Recipe from "../images/RecipeApp.png";
import Todo from "../images/TodoApp.png";
import Right from "../images/right-stick.svg";
const Projects = () => {
  return (
    <div id="projects" className="h-auto flex bg-[#0077b6]">
      <div className="h-10 md:h-20 absolute w-full bg-gradient-to-b from-black/60 to-[#0077b6]"></div>
      <div className="w-full max-w-[1150px] mt-10 mx-auto flex flex-col justify-center">
        <div className="flex flex-col items-center p-10 md:flex-row gap-10 w-full">
          <img
            src={Movie}
            className="max-w-[500px] min-w-[200px] w-full rounded-lg object-cover object-center"
          />
          <div className="flex flex-col text-white text-[15px] min-w-[200px] md:w-full sm:text-[18px] md:text-lg">
            <div className="flex flex-row group w-full justify-center items-center">
              <img
                loading="lazy"
                src={Right}
                className="h-4 -translate-x-1 group-hover:translate-x-0 duration-200"
              />
              <a
                href="https://github.com/MetinVn/Movie-App"
                target="_blank"
                className="group"
              >
                Movies App
              </a>
              <img
                loading="lazy"
                src={Link}
                className="h-5 scale-0 translate-y-[0%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
              />
            </div>
            <ul className="list-disc">
              <li>Search by name</li>
              <li>Pick among 10000+ movies</li>
              <li>Displays movie ratings</li>
              <li>Displays Overview</li>
              <li>Consumes 3rd party API</li>
              <li>Desktop & Mobile Responsive</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center p-10 md:flex-row gap-10 w-full">
          <img
            loading="lazy"
            src={Recipe}
            className="max-w-[500px] min-w-[200px] w-full rounded-lg object-cover object-center"
          />
          <div className="flex flex-col text-start text-white text-[15px] min-w-[200px] md:w-full sm:text-[18px] md:text-lg">
            <div className="flex flex-row group w-full justify-center items-center">
              <img
                loading="lazy"
                src={Right}
                className="h-4 -translate-x-1 group-hover:translate-x-0 duration-200"
              />
              <a
                href="https://github.com/MetinVn/Recipe-App"
                target="_blank"
                className="group"
              >
                Recipe App
              </a>
              <img
                loading="lazy"
                src={Link}
                className="h-5 scale-0 translate-y-[0%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
              />
            </div>
            <ul className="list-disc">
              <li>Search by name</li>
              <li>Get 10000+ meal recipes</li>
              <li>Save your favorite meal</li>
              <li>Get Ingredients </li>
              <li>Consumes 3rd party API</li>
              <li>Desktop & Mobile Responsive</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center p-10 md:flex-row gap-10 w-full">
          <img
            loading="lazy"
            src={Todo}
            className="max-w-[500px] min-w-[200px] w-full rounded-lg object-cover object-center"
          />
          <div className="flex flex-col text-start text-white text-[15px] min-w-[200px] md:w-full sm:text-[18px] md:text-lg">
            <div className="flex flex-row group w-full justify-center items-center">
              <img
                loading="lazy"
                src={Right}
                className="h-4 -translate-x-1 group-hover:translate-x-0 duration-200"
              />
              <a
                href="https://github.com/MetinVn/TodoApp-Firebase-ReactJS"
                target="_blank"
                className="group"
              >
                Todo App
              </a>
              <img
                loading="lazy"
                src={Link}
                className="h-5 scale-0 translate-y-[0%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
              />
            </div>
            <ul className="list-disc">
              <li>Manage your todos</li>
              <li>Access anytime from Firebase Database</li>
              <li>CRUD Functionality</li>
              <li>Desktop & Mobile Responsive</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center p-10 md:flex-row gap-10 w-full">
          <img
            loading="lazy"
            src={Auth}
            className="max-w-[500px] min-w-[200px] w-full rounded-lg object-cover object-center"
          />
          <div className="flex flex-col text-start text-white text-[15px] min-w-[200px] md:w-full sm:text-[18px] md:text-lg">
            <div className="flex flex-row group w-full items-center justify-center">
              <img
                loading="lazy"
                src={Right}
                className="h-4 -translate-x-1 group-hover:translate-x-0 duration-200"
              />
              <a
                href="https://github.com/MetinVn/User-Atuh-Firebase-ReactJS"
                target="_blank"
                className="group"
              >
                Sign in & Authentication
              </a>
              <img
                loading="lazy"
                src={Link}
                className="h-5 scale-0 translate-y-[0%] group-hover:scale-[100%] group-hover:translate-y-[10%] duration-300"
              />
            </div>
            <ul className="list-disc">
              <li>Multi-Page simple authentication with Firebase</li>
              <li>Email & Password only</li>
              <li>Built with ReactJS & TailwindCSS</li>
              <li>Desktop & Mobile Responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
