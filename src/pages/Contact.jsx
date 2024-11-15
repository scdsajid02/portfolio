import React from "react";
import img from "../img/Resume (3).pdf";

const Contact = () => {
  return (
    <div>
      <p className="text-center">
        View my resume here:{" "}
        <a
          href={img}
          target="_blank"
          className="text-xl text-blue-600 hover:text-red-600 underline "
        >
          Resume
        </a>
      </p>
      <h1
        id="contact"
        className="text-center font-extrabold text-2xl text-red-700 mb-7 mt-7"
      >
        Contact
      </h1>

      <p>
        <ol>
          <li className="my-1">Whatsapp/Phone: +91 9347324377</li>
          <li className="my-1">Mail : sajidscd02@gmail.com</li>
          <li className="mt-1">
            linkedin:
            <a
              href="https://www.linkedin.com/in/shaik-sajid-6080b2247/"
              target="_blank" className="text-blue-600 hover:text-red-600"
            >
              {" "}Click
            </a>
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Contact;
