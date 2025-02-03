import React from "react"
import ReactLogo from './react.png';
import TailwindLogo from './tailwind.png';
import ResponsiveImg from './responsive.png';
import PHPImg from './php.png';
import MySQLImg from './Mysql.png';
import GitImg from './git.png';
import GithubImg from './github.png';
import GitBashImg from './gitbash.png';
import VSCodeImg from './vscode.png';

export default function Services() {
  return (
    <div className="w-full h-full flex flex-col justify-center mt-20">
      <h1 className="text-5xl text-white mb-10 text-center sm:mb-20"><span className="border-b-2 border-l-2 pl-2 font-bold">SERVICES</span></h1>
      <div className="h-1/2 flex justify-evenly flex-col sm:flex-row sm:h-1/3">
        {/*Right Side */}
        <div className="bg-gray-800 border text-white h-[15rem] w-full flex flex-col p-2 items-center justify-around rounded mb-10 hover:scale-105 transition-transform cursor-pointer sm:w-1/3 sm:mb-0">
          <h1 className="text-2xl mb-10 sm:mb-0">Frontend Development</h1>
          <div className="flex justify-center items-center">
            <img src={ReactLogo} alt="React Logo" className="w-28 h-28 sm:w-24 sm:h-24"/>
            <img src={TailwindLogo} alt="Tailwind Logo" className="w-28 h-16 sm:w-32 sm:h-16"/>
          </div>
        </div>
        {/*Left Side */}
        <div className="bg-gray-800 border text-white h-[15rem] w-full flex flex-col items-center justify-around rounded hover:scale-105 transition-transform cursor-pointer sm:w-1/3">
          <h1 className="text-2xl">Responsive Design</h1>
          <div className="flex justify-center items-center p-2">
            <img src={ResponsiveImg} alt="Responsive Image" className="h-40 sm:w-40 sm:h-40"/>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex justify-evenly mt-5 flex-col sm:flex-row sm:h-1/3">
        {/*Right Side */}
        <div className="bg-gray-800 border text-white h-[15rem] w-full flex flex-col p-2 items-center justify-around rounded mb-10 hover:scale-105 transition-transform cursor-pointer sm:w-1/3 sm:mb-0">
          <h1 className="text-2xl mb-10 sm:mb-0">Backend Development</h1>
          <div className="flex justify-center items-center">
            <img src={PHPImg} alt="PhP Logo" className="w-28 h-14 sm:w-40 sm:h-20"/>
            <img src={MySQLImg} alt="MySQL Logo" className="w-28 h-16 mb-2 ml-2 sm:w-40 sm:h-24"/>
          </div>
        </div>
        {/*Left Side */}
        <div className="bg-gray-800 border text-white h-[15rem] w-full flex flex-col items-center justify-around rounded hover:scale-105 transition-transform cursor-pointer sm:w-1/3">
          <h1 className="text-2xl">Tools</h1>
          <div className="flex w-5/6 justify-around items-center p-2 items-center">
            <img src={GitImg} alt="Git Image" className="h-20 sm:w-20 sm:h-20"/>
            <img src={GithubImg} alt="GitHub Image" className="h-20 sm:w-20 sm:h-20"/>
            <img src={GitBashImg} alt="Git Bash Image" className="h-20 sm:w-20 sm:h-20"/>
            <img src={VSCodeImg} alt="Visual Studio Code Image" className="h-20 sm:w-20 sm:h-20"/>
          </div>
        </div>
      </div>
    </div>
  )
}