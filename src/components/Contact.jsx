import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='flex min-h-screen w-full flex-col items-center justify center gap-16 p-8'>

      <h1 className='text-center text-6xl font-light text-sky-700'>Let's get in touch!</h1>

      <form className='flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>

        <div className='flex flex-col gap-4'>

          <input type='text' placeholder='Your Name' className='rounded-lg border-2 border-sky-700 px-4
          py-3 text-lg outline-none transition-all duration-200 hover:bg-sky-50 focus:ring-sky-700'/>

          <input type='text' placeholder='Your Email' className='rounded-lg border-2 border-sky-700 px-4
          py-3 text-lg outline-none transition-all duration-200 hover:bg-sky-50 focus:ring-sky-700'/>

        </div>

        <textarea placeholder='Your Message' className='h-32 w-full resize-none rounded-lg
        border-2 border-sky-700 px-4 py-3 text-lg outline-none transition-all duration-200 
        hover:bg-sky-50 focus:ring-sky-700'></textarea>

        <button className='rounded-lg border-2 border-sky-700 bg-sky-700 px-6 py-3 font-semibold
        text-white transition-all duration-200 hover:bg-sky-200 hover:text-sky-800'>Send Message</button>

      </form>
    </div>
  )
}

export default Contact