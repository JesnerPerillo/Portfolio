import React from 'react';
import GIFBackground from './Components/GIF.gif'
import Header from './Components/Header.jsx';
import Information from './Components/Information.jsx';

export default function App() {
  return(
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${GIFBackground})`,
      }}
    >
      <div>
        <Header />
      </div>

      <div className="mt-52">
        <Information />
      </div>
    </div>
  )
}