import { useState } from "react";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import About from "./About";
import Reviews from "./Reviews";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(true);
  };

  const closeHamburger = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex min-h-screen overflow-x-hidden">
     
      <div
        className={`w-full transition-all duration-300 ${
          isOpen ? "mr-[260px]" : "mr-0"
        }`}
      >
        <div
          className="w-full text-white shadow-md
          bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
                Advisor
              </h1>
            </div>

            <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 text-sm lg:text-base font-medium">
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Home <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Pages <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Services{" "}
                <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Project{" "}
                <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Blog <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-yellow-400 transition duration-300"
              >
                Contact{" "}
                <FontAwesomeIcon icon={faAngleDown} className="text-xs" />
              </a>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button className="text-lg hover:text-yellow-400 transition duration-300">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>

              <button className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-black transition duration-300 hover:bg-yellow-500 sm:px-4 lg:px-5">
                Free Quote
              </button>

              {!isOpen && (
            <button
                onClick={handleHamburger}
                className="text-3xl font-bold cursor-pointer text-right hover:text-yellow-400 transition duration-300 md:hidden"
            >
                ☰
            </button>
            )}
            </div>
          </div>
        </div>

        <Home />
        <Service />
        <About />
        <Reviews />
      </div>

      <Hamburger isOpen={isOpen} closeHamburger={closeHamburger} />
    </div>
  );
};

export default Navbar;