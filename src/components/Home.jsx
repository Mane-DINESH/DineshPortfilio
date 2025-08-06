import React from "react";
import pic from "../../public/Dinesh.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <br />

            <p className="text-sm md:text-md text-justify">
              Passionate and dedicated Computer Science undergraduate with hands-on experience in
              full-stack development, especially with Java-based backend frameworks. Skilled in building
              responsive web applications and eager to contribute to real-world software development
              projects.
            </p>

            <br />

            {/* Social Media + CV + Skills */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/dinesh.mane.9803150" target="_blank" rel="noopener noreferrer">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dinesh-mane1" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.ly/q3yRf" target="_blank" rel="noopener noreferrer">
                      <FaWhatsapp  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/+8RhHpPNt2rxkMjc1" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Download CV */}
              <div className="text-center md:text-left">
                <a
                  href="../../public/DineshMane_Resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md shadow-md transition duration-300 text-sm md:text-base">
                    <FaDownload />
                    Download CV
                  </button>
                </a>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaCss3Alt className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
