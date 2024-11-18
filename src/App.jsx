import React, { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div className="md:px-10 bg-black text-white font-medium md:text-lg px-2 pb-5">
      <div className="bg-black text-teal-400 mb-2  flex justify-between pt-3 pb-3 items-center  px-2 md:justify-between">
        <h1 className="font-black text-xl font-serif">SAJID</h1>
        <div className="flex items-center justify-between text-white  font-bold">
          <a
            href="#projects"
            className="mr-4 md:mr-20 hover:font-black transition-all"
          >
            {" "}
            Projects
          </a>
          <a
            href="#skills"
            className="mr-2 md:mr-5 hover:font-black transition-all"
          >
            Skills
          </a>
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
