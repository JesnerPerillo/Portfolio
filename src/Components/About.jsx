import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa6";

export default function About() {
  return (
    <div className="flex flex-wrap p-5 justify-center items-center text-white">
      {/* About Me Section */}
      <div className="w-full lg:w-1/3 p-4 text-justify text-center lg:text-left">
        <h1 className="text-3xl border-b-2 w-fit mx-auto lg:mx-0 mb-5">
          ABOUT ME
        </h1>
        <p className="text-lg md:text-xl">
          I am <b>Jesner Arlan D. Perillo</b>, a Bachelor of Science in Computer Science student at the <b>University of Rizal System</b>.  
          I specialize in <b>front-end engineering</b> while currently expanding my skills in back-end development.  
          My primary language is <b>JavaScript</b>, with <b>React JS</b> for front-end and <b>Node JS</b> for back-end.  
          I also work with <b>PHP, Tailwind CSS, MySQL, Git, and GitHub</b> in my capstone development.
        </p>
      </div>

      {/* Skill Set Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0">
        <h1 className="text-3xl border-b-2 w-fit mb-5">SKILL SET</h1>
        <ul className="text-lg md:text-xl grid grid-cols-2 gap-4 md:gap-6">
          <li className="flex items-center gap-2">HTML5 <FaHtml5 className="text-red-500" /></li>
          <li className="flex items-center gap-2">CSS <FaCss3Alt className="text-blue-500" /></li>
          <li className="flex items-center gap-2">JavaScript <IoLogoJavascript className="text-yellow-500" /></li>
          <li className="flex items-center gap-2">React JS <FaReact className="text-blue-400" /></li>
          <li className="flex items-center gap-2">Tailwind CSS <RiTailwindCssFill className="text-blue-400" /></li>
          <li className="flex items-center gap-2">PHP <FaPhp className="text-blue-700" /></li>
          <li className="flex items-center gap-2">MySQL <SiMysql className="text-blue-300" /></li>
          <li className="flex items-center gap-2">Git <FaGitAlt className="text-red-400" /></li>
          <li className="flex items-center gap-2">GitHub <FaGithub /></li>
        </ul>
      </div>
    </div>
  );
}
