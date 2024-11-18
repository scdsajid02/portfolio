import React from "react";


const Contact = () => {
  return (
    <div>
      <h1
        id="contact"
        className="text-center font-extrabold text-2xl text-red-700 mb-5 mt-4"
      >
        Contact
      </h1>
      <div className="bg-gradient-to-l from-slate-600 flex items-center justify-around  rounded-md to-teal-700">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_640.png"
            alt=""
            srcset=""
            className="w-64 h-72 md:w-96 md:h-96"
          />
        </div>
        <ol>
          {/* resume*/}
          <div className="flex flex-col items-center">
            <a
              target="_blank"
              className="text-blue-700 font-bold text-xl border-4 p-1 border-black bg-white shadow-md shadow-black hover:font-black "
              href="https://drive.google.com/file/d/139Eqxmyw0JykHFnbHcNF8-mO6AwrBMAj/view?usp=sharing"
            >
              {" "}
              RESUME
            </a>
          </div>
          <div className="mt-4 flex items-center flex-col md:flex-row md:gap-6">
            <a
              target="-blank"
              href="https://api.whatsapp.com/send?phone=919347324377"
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png"
                alt=""
                srcset=""
                className="w-10 mt-2 hover:wd:14 md:w-14 md:hover:w-16"
              />
            </a>
            <a target="-blank" href="mailto:sajidscd02@gmail.com">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/28/19/00/mail-44042_640.png"
                alt=""
                srcset=""
                className="w-10 mt-2 hover:wd:14 md:w-14 md:hover:w-16"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-sajid-6080b2247/"
              target="_blank"
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/06/27/04/57/linkedin-2446228_640.png"
                alt=""
                srcset=""
                className="w-10 mt-2 hover:wd:14 md:w-14 md:hover:w-16"
              />
            </a>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Contact;
