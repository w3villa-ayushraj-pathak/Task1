import React from 'react'

const Home = () => {
  return (
    <div
      className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center text-white"
    >
      <div className="bg-black/55">
        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[500px] md:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-400 sm:text-base">
              Business made easy
            </p>

            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Reliably guiding your <br className="hidden sm:block" />
              business to success
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:mt-6 md:text-lg">
              Take your business to the next level with our sales agency for
              business idea management tools for you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="w-fit rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-yellow-500 sm:text-base">
                Discover More
              </button>

              <a
                className="text-sm font-medium underline underline-offset-4 transition duration-300 hover:text-yellow-400 sm:text-base"
                href=""
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home