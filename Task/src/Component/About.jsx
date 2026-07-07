import React from 'react'



const About = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-500 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24
      bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfLY1q-5vXFVWKKvOx_6S_UgRsKUrWM6wPpWKAG2lDA&s=10')] bg-cover bg-center text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-extrabold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
            Offering the best experience of <br className="hidden sm:block" />
            business consulting
          </h1>
        </div>
      </div>

      <div className="relative mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:-mt-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:grid-cols-2 md:grid-cols-4 md:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">25+</h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">Year of experience</p>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">23k</h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">Project Completed</p>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">236+</h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">Consultation</p>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">958+</h1>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">Happy Clients</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-center text-base font-bold text-yellow-400 sm:text-lg">
          Meet our team
        </p>

        <h1 className="mb-10 mt-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Our Specialized Team
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-sm transition duration-300 hover:shadow-md">
            <img
              className="h-[110px] w-[110px] rounded-full border-2 border-yellow-300 object-cover sm:h-[120px] sm:w-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
              alt="Profile"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Amy Jenkins</h3>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">Financial Analyst</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-sm transition duration-300 hover:shadow-md">
            <img
              className="h-[110px] w-[110px] rounded-full border-2 border-yellow-300 object-cover sm:h-[120px] sm:w-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
              alt="Profile"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Amy Jenkins</h3>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">Financial Analyst</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-sm transition duration-300 hover:shadow-md">
            <img
              className="h-[110px] w-[110px] rounded-full border-2 border-yellow-300 object-cover sm:h-[120px] sm:w-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
              alt="Profile"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Amy Jenkins</h3>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">Financial Analyst</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-sm transition duration-300 hover:shadow-md">
            <img
              className="h-[110px] w-[110px] rounded-full border-2 border-yellow-300 object-cover sm:h-[120px] sm:w-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAf6BuPm0XMnrN2ib9O3EfgK0OL1m3DprwIkiJSGw5A&s=10"
              alt="Profile"
            />
            <h3 className="mt-4 text-xl font-bold text-gray-900">Amy Jenkins</h3>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">Financial Analyst</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About