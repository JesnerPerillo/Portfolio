import React from "react"
import ReactLogo from './react.png';
import TailwindLogo from './tailwind.png';
import ResponsiveImg from './responsive.png';

export default function Services() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h1 className="text-5xl text-white mb-10 text-center sm:mb-20"><span className="border-b-2 border-l-2 pl-2 font-bold">SERVICES</span></h1>
      <div className="h-1/2 flex justify-evenly flex-col sm:flex-row sm:h-1/3">
        {/*Right Side */}
        <div className="bg-gray-800 border text-white h-full w-full flex flex-col items-center justify-around rounded mb-10 hover:scale-105 transition-transform cursor-pointer sm:w-1/3 sm:mb-0">
          <h1 className="text-2xl">Frontend Development</h1>
          <div className="flex justify-center items-center">
            <img src={ReactLogo} alt="React Logo" className="w-28 h-28 sm:w-40 sm:h-40"/>
            <img src={TailwindLogo} alt="Tailwind Logo" className="w-28 h-20 sm:w-40 sm:h-24"/>
          </div>
        </div>
        {/*Left Side */}
        <div className="bg-gray-800 border text-white h-full w-full flex flex-col items-center justify-around rounded hover:scale-105 transition-transform cursor-pointer sm:w-1/3">
          <h1 className="text-2xl">Responsive Design</h1>
          <div className="flex justify-center items-center p-2">
            <img src={ResponsiveImg} alt="Responsive Image" className="h-40 sm:w-80 sm:h-60"/>
          </div>
        </div>
      </div>
    </div>
  )
}