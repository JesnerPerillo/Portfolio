import React from "react";

export default function Header() {
  return (
    <div>
      <header className="text-white flex h-20 justify-around items-center">
        <h1 className="text-4xl tracking-widest font-bold text-green-700">JADP</h1>
        <ul className="flex w-1/4 justify-around">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  )
}