import React from 'react';

export default function Header() {
  return (
    <div>
      <header className="text-white flex justify-around px-4 md:px-16 h-16 items-center">
        <h1 className="text-2xl md:text-4xl tracking-widest font-bold text-green-700">
          JADP
        </h1>
        <ul className="flex gap-4 md:gap-8 text-sm md:text-base">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Projects</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
      </header>
    </div>
  );
}
