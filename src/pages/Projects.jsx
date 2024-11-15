import React from "react";
import canvax from "../img/canvax.png";

const Projects = () => {
  return (
    <div className="py-10" id="projects">
      <div className="text-red-700 text-2xl font-extrabold text-center">
        PROJECTS
      </div>
      <h1 className="text-center mb-4 text-l">
        I have created these webapplicatiopns using{" "}
        <span className="font-extrabold">React</span> and for Styling I have
        used <span className="font-black">Tailwind Css</span>.Click on projects to view.
      </h1>
      <div>
        <div className=" p-2 flex items-center flex-col md:flex-row gap-2 justify-around ">
          <a
            href="https://canvaxschools.netlify.app/"
            target="_blank "
            className="flex flex-col justify-center items-center border-2 border-red-400 p-2"
          >
            <img src={canvax} alt="" srcset="" className="w-56 h-56" />
            <p className="underline text-blue-600 hover:text-red-600">Canvax Schools</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;