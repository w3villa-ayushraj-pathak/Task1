import React from "react";

const Hamburger = ({ isOpen, closeHamburger }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 min-h-screen bg-black text-white shadow-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? "w-[260px]" : "w-0"
      }`}
    >
      <div className="h-full px-6 py-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={closeHamburger}
            className="text-3xl font-bold hover:text-yellow-400 transition duration-300"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-3 text-lg font-medium">
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Home
          </li>
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Pages
          </li>
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Services
          </li>
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Project
          </li>
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Blog
          </li>
          <li className="px-4 py-3 rounded-lg text-right cursor-pointer hover:bg-yellow-400 hover:text-black transition-all duration-300">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;