import React from 'react'

const Projects = () => {
  return (
    <div id='Projects' className='min-h-screen w-full flex flex-col items-center justify-center
    gap-20 p-10 md:p-16 xl:px-32'>

      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200
        cursor-pointer px-8 py-10 border-sky-700 rounded-lg hover:bg-sky-200'>
          <h1 className='text-3xl font-semibold'>This Portfolio!</h1>
          <h3 className='text-xl text-gray-800'>React, Tailwind</h3>
          <p className='text-sm text-gray-700'>This portfolio utilizes React and Tailwind to showcase
            my ideas, experience, skills, and more! </p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200
        cursor-pointer px-8 py-10 border-sky-700 rounded-lg hover:bg-sky-200'>
          <h1 className='text-3xl font-semibold'>ZotBright</h1>
          <h3 className='text-xl text-gray-800'>Python, SQL, HTML, CSS, JS</h3>
          <p className='text-sm text-gray-700'>Designed a color-coded & interactive map of UCI's 
            walkways to highlight safer, well-lit paths for nighttime navigation. Includes a 
            user-submitted form for reporting broken lights or other walkway 
            issues, ensuring dynamic, up-to-date information for enhanced campus safety. </p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200
        cursor-pointer px-8 py-10 border-sky-700 rounded-lg hover:bg-sky-200'>
          <h1 className='text-3xl font-semibold'>Weather Reporting Program</h1>
          <h3 className='text-xl text-gray-800'>Python, NWS & Nominatim API's</h3>
          <p className='text-sm text-gray-700'>Program identifies the nearest weather station to 
            optimize data retrieval speed and accuracy. Displays key metrics, including temperature, 
            feels-like temperature, humidity, wind speed, and precipitation. </p>
        </div>

      </div>
    </div>
  )
}

export default Projects