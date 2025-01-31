import React from "react";
import ParkingSystemImg from './ParkingSystem.png';
import { FaReact, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa6";

export default function Projects(){
  return(
    <div className="flex text-white">
      {/*Right Side */}
      <div className="w-full flex flex-col sm:flex-row justify-around">
        <div className="w-full text-center sm:w-1/2">
          <h1 className="mb-5 text-2xl sm:text-4xl">University Parking System</h1>
          <a href="https://parking-system-rosy.vercel.app/"><img src={ParkingSystemImg} alt="Parking System" className="border rounded"/></a>
        </div>
        <div className="w-full mt-5 sm:w-1/3 sm:mt-0 flex flex-col items-center justify-center">
          <p className="text-xl">This is our capstone project, and I am the one who took the job of being the developer in our group. I use React JS, Tailwind CSS in the frontend development, and PHP in the backend, MySQL for the database. I also use Git and Github for version control and to deploy my frontend through vercel.</p>
          <p className="text-xl mt-10 flex items-center gap-3">Tech Stack used: <FaReact className="text-blue-400"/> <RiTailwindCssFill className="text-blue-400"/>  <FaPhp className="text-blue-800"/>  <SiMysql className="text-blue-400"/>  <FaGitAlt className="text-red-400"/>  <FaGithub /></p>
        </div>
      </div>
    </div>
  )
}