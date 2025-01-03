import React from 'react'
import pfp from '../../public/image.png'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Home = () => {
    return (
        <div id='Home' className='flex min-h-screen
        w-full items-center justify-center'>

            <div className='flex flex-col items-center
            justify-center gap-8 p-5 text-center'>

                <img src={pfp} alt='' className='w-[300px]
                sm:w-[350px] rounded-full'/>

                <div className="space-y-1 sm:space-y-3">
                    <h1 className='bg-gradient-to-r from-sky-500 to-sky-950
                    bg-clip-text text-4xl font-semibold text-transparent
                    md:text-5xl lg:text-6xl'>Pranavi Gollanapalli</h1>

                    <h3 className='bg-gradient-to-r from-sky-500 to-sky-950
                    bg-clip-text text-xl font-semibold text-transparent
                    md:text-2xl lg:text-3xl'>CS & BIM Student @ UC Irvine</h3>

                    <p className='max-w-[900px] mx-auto text-md text-gray-700'>My name is 
                    Pranavi, and I’m a Computer Science and Business Information 
                    Management double major at UC Irvine. I’m passionate about 
                    exploring new ways technology can help people and make a 
                    difference in the world. I’m also a proud member of UCI’s 
                    Information and Computer Science Student Council because I love 
                    giving back to my ICS community and connecting with others who share 
                    my interests. When I’m not programming, you can find me hiking, 
                    cooking, reading, or trying something new! I look forward to 
                    connecting with you!</p>
                </div>

                <div className='flex gap-3'>
                    <a href="https://github.com/pranavigpalli" target="_blank" rel="noopener noreferrer">
                        <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2
                        border-transparent bg-sky-700 p-2 text-white transition-all
                        duration-200 hover:scale-110 hover-sky-700 hover:bg-white
                        hover:text-sky-700 md:h-12 md:w-12'/>
                    </a>

                    <a href="https://www.linkedin.com/in/pranavigpalli/" target="_blank" 
                    rel="noopener noreferrer">
                        <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2
                        border-transparent bg-sky-700 p-2 text-white transition-all
                        duration-200 hover:scale-110 hover-sky-700 hover:bg-white
                        hover:text-sky-700 md:h-12 md:w-12'/>
                    </a>
                </div>

            </div>
        </div>
    )
}


export default Home