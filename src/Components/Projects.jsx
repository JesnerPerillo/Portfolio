import React from "react";
import ParkingSystemImg from './ParkingSystem.png';
import { FaReact, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa6";

export default function Projects(){
  return(
    <div className="flex flex-col justify-center mt-[350px] sm:mt-0">
      <h1 className="text-5xl text-white font-bold mb-5 mt-10 text-center sm:mb-20 sm:mt-0"><span className="border-t-2 border-r-2 font-bold pr-2">PROJECTS</span></h1>
      <div className="flex text-white h-5/6">
        {/*Right Side */}
        <div className="w-full flex flex-col items-center sm:flex-row justify-around">
          <div className="w-full text-center sm:w-1/2">
            <h1 className="mb-5 text-2xl sm:text-4xl">University Parking System</h1>
            <a href="https://parking-system-rosy.vercel.app/"><img src={ParkingSystemImg} alt="Parking System" className="border rounded transition-transform hover:scale-105"/></a>
          </div>
          <div className="w-full mt-5 sm:w-1/3 sm:mt-0 flex flex-col items-center justify-center">
            <p className="text-2xl">This is our capstone project, and I am the one who took the job of being the developer in our group. I use React JS, Tailwind CSS in the frontend development, and PHP in the backend, MySQL for the database. I also use Git and Github for version control and to deploy my frontend through vercel.</p>
            <p className="text-2xl mt-10 flex items-center gap-3">Tech Stack: <FaReact className="text-blue-400"/> <RiTailwindCssFill className="text-blue-400"/>  <FaPhp className="text-blue-800"/>  <SiMysql className="text-blue-400"/>  <FaGitAlt className="text-red-400"/>  <FaGithub /></p>
          </div>
        </div>
      </div>
    </div>
  )
}