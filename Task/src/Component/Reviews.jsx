import React from 'react'

const Reviews = () => {
  return (
    <>
        <div className='flex justify-center items-center p-8 w-[100%] bg-gray-200 mt-15'>
            <div className='text-center w-[50%]'>
                <p className='text-xl text-yellow-500'>.Testimonials</p>
                <h1 className='font-bold text-4xl mt-3'>Reviews of our client</h1>
                <h1 className='mt-3 text-4xl'>Icon</h1>
                <p className='text-gray-400 mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores sapiente velit voluptates, aperiam ullam nihil itaque quaerat repellat. Suscipit modi temporibus veniam? Distinctio ipsam accusamus minima? Molestiae, placeat earum, incidunt sed harum omnis accusamus nesciunt rem ipsum, dignissimos a.</p>
                <h3 className='text-yellow-500 mt-3 text-xl '>Lizabeth G Mack</h3>
                <p className='text-gray-500'>-Marketing Lead</p>

                <div className='flex  justify-center gap-3 mt-5'>
                    <div>
                        <img className='h-[90px] w-[90px] rounded-full border-2 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="" />
                    </div>
                    <div ><img className='h-[90px] w-[90px] rounded-full border-2 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="" /></div>
                    <div ><img className='h-[90px] w-[90px] rounded-full border-2 text-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10" alt="" /></div>
                </div>
            </div>

        </div>

        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center h-64  bg-black p-25 text-white h-[300px]">
            <h1 className='font-extrabold text-3xl'>Whether you are looking for <br />answer, would like to solve a <br /> any business problem</h1>
        </div>
    </>
  )
}

export default Reviews