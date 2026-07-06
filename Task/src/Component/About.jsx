import React from 'react'

const About = () => {
  return (
    <div>
        <div className='bg-gray-500 text-white h-[300px]  p-25'>
            <h1 className='text-black font-extrabold text-3xl'>Offering the best experience of <br /> business consulting </h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className='shadow-gray shadow-md bg-white border-2 grid grid-cols-4 absolute h-[170px] w-[70%] p-15'>
                <div>
                    <h1 className='text-2xl font-bold'>25+</h1>
                    <p>Year od experience</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>23k</h1>
                    <p>Project Completed</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>236+</h1>
                    <p>Consultation</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>958+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>

            
        </div>

        <div className=' mt-60 '>
            <p  className='text-center text-yellow-300'>.Meet our team</p>
            <h1 className='mb-10 text-center text-2xl font-bold'>Our Specialized Team</h1>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-4 w-[70%]'>
                    <div className='p-5 bg-gray-100 flex flex-col justify-center items-center '>
                        <img className='h-[120px] w-[120px] rounded-full border-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="Profile" />
                        <h3 className='mt-2 font-bold '>Amy Jenkins</h3>
                        <p className='text-gray-500 mt-2'>Financial Analyst</p>
                    </div>

                    <div className='bg-gray-100 p-5 flex flex-col justify-center items-center '>
                        <img className='h-[120px] w-[120px] rounded-full border-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="Profile" />
                        <h3 className='mt-2 font-bold '>Amy Jenkins</h3>
                        <p className='text-gray-500 mt-2'>Financial Analyst</p>
                    </div>

                    <div className='bg-gray-100 p-5 flex flex-col justify-center items-center '>
                        <img className='h-[120px] w-[120px] rounded-full border-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="Profile" />
                        <h3 className='mt-2 font-bold '>Amy Jenkins</h3>
                        <p className='text-gray-500 mt-2'>Financial Analyst</p>
                    </div>

                    <div className='bg-gray-100 p-5 flex flex-col justify-center items-center '>
                        <img className='h-[120px] w-[120px] rounded-full border-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="Profile" />
                        <h3 className='mt-2 font-bold '>Amy Jenkins</h3>
                        <p className='text-gray-500 mt-2'>Financial Analyst</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About