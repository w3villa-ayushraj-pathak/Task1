import React from 'react'

const Hamburger = ({ isOpen, closeHamburger }) => {
  return (
    <>
      <div
        onClick={closeHamburger}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[260px] bg-black text-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-700 px-5 py-4">
          <h2 className="text-xl font-bold text-yellow-400">Menu</h2>
          <button
            onClick={closeHamburger}
            className="text-3xl font-bold hover:text-yellow-400"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 text-lg">
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Home</a>
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Pages</a>
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Services</a>
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Project</a>
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Blog</a>
          <a href="#" className="rounded-md px-4 py-3 hover:bg-gray-800">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Hamburger