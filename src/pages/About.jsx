import React from "react";
import img from "../img/dp.jpg";

const About = () => {
  return (
    <section id="section">
      <div className="flex items-center justify-center  md:flex-row-reverse flex-col ">
        <div className=" ">
          <img
            src={img}
            alt=""
            srcset=""
            className="border-2 border-black  w-56 "
          />
        </div>
        <ol className="list-disc font-medium mr-10 ">
          <li className="my-2">
            Hey I'm <span className="text-lg font-extrabold">Sajid</span> a
            passionate Frontend Developer with a keen eye for design and a love
            for crafting seamless user experiences. As a fresher in the
            industry, I bring a strong foundation in web development
            technologies and a drive to continually learn and grow.
          </li>

          <li className="my-2">
            I specialize in using modern web technologies like HTML, CSS,
            JavaScript, and React to build responsive and dynamic web
            applications. My toolkit also includes Tailwind CSS, which allows me
            to create beautiful, efficient, and maintainable styles with ease.
          </li>
          <li className="my-2">
            Throughout my journey, I've completed various projects that
            demonstrate my ability to turn creative ideas into functional and
            engaging web experiences. Whether it's a simple landing page or a
            complex web application, I enjoy tackling new challenges and pushing
            my skills to the next level.
          </li>
          <li className="my-2">
            I'm excited about the endless possibilities in the world of frontend
            development and look forward to making my mark in the industry.
          </li>
        </ol>
      </div>
      <div className="my-3">
        <h1 className="text-center font-extrabold text-2xl py-3 text-red-700">
          EDUCATION
        </h1>
        <p>
          I have pursued a Bachelor of Technology in Computer Science and
          Engineering from Vel Tech Rangarajan Dr. Sagunthala R&D Institute of
          Science and Technology.
        </p>
      </div>
      <div className="my-6" id="skills">
        <h1 className="text-center font-extrabold text-2xl text-red-700 my-3  ">
          SKILLS
        </h1>
        <div className="flex flex-wrap gap-3 flex-col md:flex-row items-center md:justify-around">
          <div className=" border-2 border-red-400 p-2 h-56 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out ">
            <img
              className="w-44"
              src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
              alt=""
              srcset=""
            />
            <p>HTML</p>
          </div>
          <div className="border-2 border-red-400 p-2 h-56 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
            <img
              className="w-44 h-52"
              src="https://tse3.mm.bing.net/th?id=OIP.Nu828M2xSc-sD-nW0IDcGQHaEJ&pid=Api&P=0&h=180"
              alt=""
              srcset=""
            />
            <p>Tailwind</p>
          </div>
          <div className="border-2 border-red-400  h-56 p-2 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
            <img
              className="w-44"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt=""
              srcset=""
            />
            <p>Java Script</p>
          </div>
          <div className="border-2 border-red-400 p-2 h-56 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
            <img
              className="w-44"
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt=""
              srcset=""
            />
            <p>React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
