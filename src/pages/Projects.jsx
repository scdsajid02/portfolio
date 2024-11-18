import React from "react";
import canvax from "../img/canvax.png";
import todo from "../img/todo.png";

const Projects = () => {
  return (
    <div className="py-5 " id="projects">
      <div className="text-red-600 text-2xl font-extrabold text-center mb-4">
        PROJECTS
      </div>
      <div className="bg-gradient-to-l from-slate-600  rounded-md to-teal-700">
        <div className="flex items-center justify-around ">
          <h1 className="text-center mb-4 text-l">
            I have created these webapplicatiopns using{" "}
            <span className="font-extrabold">React</span> and for Styling I have
            used <span className="font-black">Tailwind Css</span>.Click on
            projects to view.
          </h1>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/08/46/bunny-2023329_1280.png"
            alt=""
            srcset=""
            className="w-44"
          />
        </div>
        <hr className="border-2 border-green-400 mt-2" />
        <div className=" p-2 flex flex-wrap items-center  flex-col md:flex-row gap-2 justify-around ">
          <a
            href="https://canvaxschools.netlify.app/"
            target="_blank "
            className="flex flex-col justify-center items-center border-2 border-black shadow-md shadow-black p-2"
          >
            <img src={canvax} alt="" srcset="" className="w-56 h-56" />
            <p className="underline text-blue-400 hover:text-red-600">
              Canvax Schools
            </p>
          </a>
          <a
            href="https://todofuture.netlify.app/"
            target="_blank "
            className="flex flex-col justify-center items-center border-2 border-black shadow-md shadow-black p-2"
          >
            <img src={todo} alt="" srcset="" className="w-56 h-56" />
            <p className="underline text-blue-600 hover:text-red-600">
              Todo List
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
