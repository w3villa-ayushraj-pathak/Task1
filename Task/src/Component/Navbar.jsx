import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import Reviews from './Reviews'

const Navbar = () => {
  return (
    <>
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center  flex flex-row justify-between bg-black text-white p-3 text-center items-center text-xl ">
            <div className='w-[15%]'>
                <h1>Advisor</h1>
            </div>
            <div className='flex flex-row justify-between w-[50%]'>
                <a href="">Home</a>
                <a href="">Pages</a>
                <a href="">Services</a>
                <a href="">Project</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
            <div className=' flex justify-between'>
                <input className='outline-o border-2 p-2 rounded-2xl' type="text" placeholder='search'/>
                <button className='ml-3 bg-yellow-400'>Free Quote</button>
            </div>
        </div>
        <Home/>
        <Service/>
        <About/>
        <Reviews/>
    </>
  )
}

export default Navbar