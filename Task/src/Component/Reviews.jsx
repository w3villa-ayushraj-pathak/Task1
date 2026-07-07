import React from 'react'

const Reviews = () => {
  return (
    <>
      <div className="mt-16 w-full bg-gray-200 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base font-semibold text-yellow-500 sm:text-lg">
            Testimonials
          </p>

          <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Reviews of our client
          </h1>

          <h1 className="mt-4 text-3xl text-gray-700 sm:text-4xl">Icon</h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-500 sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolores
            sapiente velit voluptates, aperiam ullam nihil itaque quaerat repellat.
            Suscipit modi temporibus veniam? Distinctio ipsam accusamus minima?
            Molestiae, placeat earum, incidunt sed harum omnis accusamus nesciunt
            rem ipsum, dignissimos a.
          </p>

          <h3 className="mt-5 text-lg font-semibold text-yellow-500 sm:text-xl">
            Lizabeth G Mack
          </h3>
          <p className="mt-1 text-sm text-gray-500 sm:text-base">-Marketing Lead</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div>
              <img
                className="h-[70px] w-[70px] rounded-full border-2 border-white object-cover shadow-sm sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
                alt="Client"
              />
            </div>

            <div>
              <img
                className="h-[70px] w-[70px] rounded-full border-2 border-white object-cover shadow-sm sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
                alt="Client"
              />
            </div>

            <div>
              <img
                className="h-[70px] w-[70px] rounded-full border-2 border-white object-cover shadow-sm sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
                alt="Client"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center text-white">
        <div className="bg-black/60">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <h1 className="text-2xl font-extrabold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              Whether you are looking for <br className="hidden sm:block" />
              answer, would like to solve a <br className="hidden sm:block" />
              any business problem
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews