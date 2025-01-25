import React from 'react';
import Pic from './pic.jpeg';
import Linkedin from './linkedin.png';
import Facebook from './facebook.png';
import Gmail from './gmail.png';
import GitHub from './github.png';
import { BsDownload } from 'react-icons/bs';

export default function Information() {
  return (
    <div className="px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-96">
        {/* Left Section */}
        <div className="text-white flex flex-col items-center md:items-start justify-center text-center md:text-left mb-8 md:mb-0">
          <p className="text-lg md:text-3xl">Hi, I am</p>
          <h1 className="text-4xl md:text-6xl text-green-500 font-bold tracking-widest mt-5 mb-5">
            JESNER PERILLO,
          </h1>
          <p className="text-lg md:text-3xl">
            and I am a{' '}
            <span className="text-green-400 text-2xl md:text-5xl ml-0 md:ml-5">
              Software Engineer
            </span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-start w-full md:w-2/3 items-center mt-5 gap-4">
            <a href="https://www.linkedin.com/in/jesner-perillo-448084278/">
              <img
                src={Linkedin}
                className="w-6 h-6 md:w-8 md:h-8 hover:cursor-pointer"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.facebook.com/jesner.perillo.9">
              <img
                src={Facebook}
                className="w-6 h-6 md:w-8 md:h-8 hover:cursor-pointer"
                alt="Facebook"
              />
            </a>
            <a href="mailto:perillojesner15@gmail.com">
              <img
                src={Gmail}
                className="w-6 h-6 md:w-8 md:h-8 hover:cursor-pointer"
                alt="Gmail"
              />
            </a>
            <a href="https://github.com/JesnerPerillo">
              <img
                src={GitHub}
                className="w-6 h-6 md:w-8 md:h-8 hover:cursor-pointer"
                alt="GitHub"
              />
            </a>
            <a
              href="./Resume - Perillo, Jesner Arlan D..pdf"
              download="Resume - Perillo, Jesner Arlan D."
            >
              <button className="duration-150 flex bg-red-500 text-white p-2 w-28 md:w-36 items-center justify-around rounded hover:bg-white hover:text-red-500">
                Download CV <BsDownload />
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-auto md:h-full">
          <img
            className="w-60 md:w-80 h-60 md:h-full object-cover rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            src={Pic}
            alt="Profile Pic"
          />
        </div>
      </div>
    </div>
  );
}
