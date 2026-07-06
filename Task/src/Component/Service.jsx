import React from 'react'

const Service = () => {
  return (
    <div className='flex flex-col items-center mt-6'>
        <p className='text-yellow-400 font-bold'>.Our dedicated services</p>
        <h1 className=' text-4xl font-extrabold mt-2'>Services we Provide</h1>
        <div className='grid grid-cols-4 gap-8 mt-5 w-[80%]'>
            <div className='shadow-md border-2 text-center'>
                <img className='h-[60px]  w-[280px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10" alt="" />
                <h3 className='font-bold text-xl'>Strategic Planning</h3>
                <p className='mt-3'>We help a business generate new product ideas with intelligence.</p>
                <hr />
                <a className='font-semibold' href="">Read more</a>
            </div>
            <div className='border-2 text-center '>
                <img className='h-[60px] w-[280px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10" alt="" />
                <h3 className='font-bold text-xl'>Strategic Planning</h3>
                <p className='mt-3'>We help a business generate new product ideas with intelligence.</p>
                <hr />
                <a className='font-semibold' href="">Read more</a>
            </div>
            <div className='border-2 text-center '>
                <img className='h-[60px] w-[280px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10" alt="" />
                <h3 className='font-bold text-xl'>Strategic Planning</h3>
                <p className='mt-3'>We help a business generate new product ideas with intelligence.</p>
                <hr />
                <a className='font-semibold' href="">Read more</a>
            </div>
            <div className='border-2 text-center '>
                <img className='h-[60px] w-[280px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10" alt="" />
                <h3 className='font-bold text-xl'>Strategic Planning</h3>
                <p className='mt-3'>We help a business generate new product ideas with intelligence.</p>
                <hr />
                <a className='font-semibold' href="">Read more</a>
            </div>
        </div>
        <p className='mt-7'>We're committed to create a change that matters!</p>

        <div className='grid grid-cols-2 mt-12 bg-gray-200 p-20'>
            <div>
                <img className=' h-[400px] w-[300px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAL3070JOZ7XDgllFInMjb1f4BfctTM6z5CQ6p-7_YA&s=10" alt="image" />
                <div className='bg-black absolute text-white w-[90px] '>
                    <p>Trusted By</p>
                    <h1>75K</h1>
                </div>
            </div>
            <div className='mb-5'>
                <p className='text-yellow-500 '>.About us </p>
                <h1 className='text-3xl font-bold'>The Essentail steps for <br /> business success</h1>
                <p className='mt-5'>
                    Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships
                </p>
                <div className='grid grid-cols-2 mt-5 h-[100px]'>
                    <div className='flex flex-col justify-center'>
                        <div>
                            <h1 className='font-semibold text-xl'>Business Innovations</h1>
                            <p>Best working</p>
                        </div>
                        <div>
                            <h1 className='mt-3 font-semibold text-xl'>Market Solution</h1>
                            <p>Best working</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAL3070JOZ7XDgllFInMjb1f4BfctTM6z5CQ6p-7_YA&s=10" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service