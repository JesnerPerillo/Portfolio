import { React, useRef, useState } from "react";
import GIFBackground from "./Components/GIF.gif";
import Information from "./Components/Information.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Services from "./Components/Services.jsx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

export default function App() {
  const about = useRef(null);
  const home = useRef(null);
  const project = useRef(null);
  const services = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutScroll = () => {
    about.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const homeScroll = () => {
    home.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const projectScroll = () => {
    project.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const servicesScroll = () => {
    services.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <>
      {/*Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md text-white flex justify-around px-6 md:px-16 h-16 items-center z-50">
        <h1 className="text-2xl md:text-4xl tracking-widest font-bold text-green-700">
          JADP
        </h1>

        {/*Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          <li className="hover:text-green-500 cursor-pointer" onClick={homeScroll}>
            Home
          </li>
          <li className="hover:text-green-500 cursor-pointer" onClick={aboutScroll}>
            About
          </li>
          <li className="hover:text-green-500 cursor-pointer" onClick={projectScroll}>Projects</li>
          <li className="hover:text-green-500 cursor-pointer" onClick={servicesScroll}>Services</li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>

        {/*Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-4 text-white md:hidden">
            <button className="hover:text-green-500" onClick={homeScroll}>
              Home
            </button>
            <button className="hover:text-green-500" onClick={aboutScroll}>
              About
            </button>
            <button className="hover:text-green-500" onClick={projectScroll}>Projects</button>
            <button className="hover:text-green-500" onClick={servicesScroll}>Services</button>
          </div>
        )}
      </header>

      {/*Home Section */}
      <div
        ref={home}
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${GIFBackground})` }}
      >
        <div className=" w-full h-auto ">
          <Information />
        </div>
      </div>

      {/*About Section */}
      <div
        ref={about}
        className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${GIFBackground})` }}
      >
        <About />
      </div>

      {/*Project Section */}
      <div
        ref={project}
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${GIFBackground})` }}
      >
        <Projects />
      </div>

      {/*Services Section */}
      <div
        ref={services}
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${GIFBackground})` }}
      >
        <Services />
      </div>

      <footer className="bg-gray-900 w-full h-40 text-white flex flex-col items-center justify-center">
        <p>&copy; Jesner Arlan D. Perillo</p>
        <p>Still Developing</p>
      </footer>
    </>
  );
}
