import React, { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div className="px-10 bg-gradient-to-l  from-cyan-200 to-amber-200 font-medium md:text-lg pb-5">
      <div className="bg-black text-white mb-2  flex justify-between items-center px-2 md:justify-around">
        <a href="#projects"> Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
