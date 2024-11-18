import React from "react";


const About = () => {
  return (
    <section id="section">
      {/*  */}
      <div className="flex  justify-between bg-gradient-to-l from-green-700  rounded-md to-slate-600 pt-4 md:pb-7   flex-col  ">
        <div className=" flex justify-around md:justify-center md:gap-24 md:pl-20">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/12/12/46/rabbit-146204_1280.png"
            alt=""
            srcset=""
            className="max-w-56"
          />
          <div className="flex flex-col items-center justify-center ">
            <p className=" transition-shadow  typing-text text-2xl font-black text-black md:text-6xl">
              Hey <br />
              There <span className="text-orange-500 font-black">.</span>
              <span className="text-white font-black">.</span>
              <span className="text-green-900 font-black">.</span>
              <br className="" />
            </p>
            <a
              href="#contact"
              className="text-neutral-300 md:w-40 text-center bg-black p-2 mt-2 rounded-md  text-xl font-bold hover:font-black"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <ol className="list-disc font-medium ml-10">
            <li className="mb-2">
              Hey I'm <span className="text-lg font-extrabold">Sajid</span> a
              passionate Frontend Developer with a keen eye for design and a
              love for crafting seamless user experiences. As a fresher in the
              industry, I bring a strong foundation in web development
              technologies and a drive to continually learn and grow.
            </li>

            <li className="my-2">
              I specialize in using modern web technologies like HTML, CSS,
              JavaScript, and React to build responsive and dynamic web
              applications. My toolkit also includes Tailwind CSS, which allows
              me to create beautiful, efficient, and maintainable styles with
              ease.
            </li>
            <li className="my-2">
              Throughout my journey, I've completed various projects that
              demonstrate my ability to turn creative ideas into functional and
              engaging web experiences. Whether it's a simple landing page or a
              complex web application, I enjoy tackling new challenges and
              pushing my skills to the next level.
            </li>
            <li className="my-2">
              I'm excited about the endless possibilities in the world of
              frontend development and look forward to making my mark in the
              industry.
            </li>
          </ol>
        </div>
      </div>
      <div className="my-3 ">
        <h1 className="text-center font-extrabold text-2xl py-3 text-red-600">
          EDUCATION
        </h1>
        <div className="flex items-center bg-gradient-to-l from-slate-600  rounded-md to-green-700 md:justify-around">
          <p className="md:w-1/3 pl-1">
            I have pursued a Bachelor of Technology in Computer Science and
            Engineering from Vel Tech Rangarajan Dr. Sagunthala R&D Institute of
            Science and Technology(Chennai)
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2017/02/01/11/04/animal-2029676_640.png"
            alt=""
            srcset=""
            className="w-36 md:w-56"
          />
        </div>
      </div>
      <div className="my-6" id="skills">
        <h1 className="text-center font-extrabold text-2xl text-red-600 my-3  ">
          SKILLS
        </h1>
        <div className="flex justify-around  gap-3  bg-gradient-to-l from-green-700  rounded-md to-slate-600  md:flex-row items-center  md:justify-around">
          <img
            src="https://cdn.pixabay.com/photo/2024/07/12/22/50/bunny-8891146_640.png"
            alt=""
            srcset=""
            className="w-40 md:w-56"
          />
          <div className="grid grid-rows-2 grid-cols-2 gap-2 md:gap-4 items-center pr-1">
            <div className=" border-2 h-20 border-red-400 w-20 md:w-32 md:h-36 bg-slate-400 items-center justify-center flex flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out ">
              <img
                className="w-10 md:w-24"
                src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                alt=""
                srcset=""
              />
              <p>HTML</p>
            </div>
            <div className="border-2  w-20 h-20 md:h-36 border-red-400  md:w-32 bg-slate-400  items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
              <img
                className="w-14 md:w-28 md:h-24"
                src="https://tse3.mm.bing.net/th?id=OIP.Nu828M2xSc-sD-nW0IDcGQHaEJ&pid=Api&P=0&h=180"
                alt=""
                srcset=""
              />
              <p>Tailwind</p>
            </div>
            <div className="border-2 border-red-400  h-20 w-20 md:h-36 md:w-32 p-2 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
              <img
                className="w-12 md:w-24"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt=""
                srcset=""
              />
              <p>JS</p>
            </div>
            <div className="border-2 md:h-36 md:w-32 border-red-400 p-2 h-20 bg-slate-400 items-center justify-center flex  flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-7 ease-in-out">
              <img
                className="w-10 md:w-24"
                src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                alt=""
                srcset=""
              />
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
