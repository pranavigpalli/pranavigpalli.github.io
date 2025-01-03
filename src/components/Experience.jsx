import React from 'react'

const Experience = () => {
  return (
    <div id='Experience' className='flex min-h-screen
    w-full flex-col items-center justify-center gap-20
    p-14 md:p-20 lg:p-36'>

      <h1 className='text-center text-5xl font-light'>
        Experience</h1>

      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>

        <div className='flex-1'>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Lineage Logistics</h3>

            <p className='font-light text-lg text-gray-700'>Intern, Jan 2025 - Present</p>

            <p className='text-sm text-gray-700'>
              Starting Soon!</p>

            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
            bg-sky-700'>
            </span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Simulated Annealing Haplotype 
              Aligner Research Project @ UCI</h3>

            <p className='font-light text-lg text-gray-700'>Developer, Sep 2024 - Present </p>

            <p className='text-sm text-gray-700'>
            Enhanced and optimized haplotype assembly algorithms by refining genome read 
            prioritization strategies, achieving a 20% reduction in runtime for datasets 
            with over 500 single nucleotide polymorphisms (SNPs). Contributed to solving 
            the Weighted Minimum Error Correction (wMEC) problem for diploid data by 
            implementing advanced C++ modifications to the existing SAHap algorithm.
            </p>

            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
            bg-sky-700'>
            </span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Paul Merage School of Business</h3>

            <p className='font-light text-lg text-gray-700'>IT Intern, July 2024 - Present</p>

            <p className='text-sm text-gray-700'>
            Enhanced operational efficiency across Windows, Mac OS, and Linux platforms by upgrading 
            and maintaining systems, resulting in faster performance and smoother workflows. Optimized 
            the troubleshooting and help ticket process for WiFi and networked printer issues, resulting 
            in faster resolution times for UCI staff and students. Communicated complex technical issues 
            to non-technical users, fostering better understanding and reducing confusion during support 
            interactions. </p>

            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
            bg-sky-700'>
            </span>
          </div>
        
        </div>

        <div className='flex-1'>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

              <h3 className='text-xl font-semibold md:text-2xl'>UCI ICS Student Council</h3>

              <p className='font-light text-lg text-gray-700'>PR Team Member, Dec 2023 - Present</p>

              <p className='text-sm text-gray-700'>
              Collaborated with committee members on all external communications such as blog posts, 
              newsletters, social media, etc. Hosted a series of interviews called “Humans of ICS” 
              to recognize and appreciate outstanding members of the ICS faculty. </p>

              <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
              bg-sky-700'>
              </span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

              <h3 className='text-xl font-semibold md:text-2xl'>PONDER Lab @ CUNY Hunter College</h3>

              <p className='font-light text-lg text-gray-700'>Research Intern, July 2022 – Aug 2022 </p>

              <p className='text-sm text-gray-700'>
              Evaluated the performance of a developing Eclipse plugin that hybridizes code between 
              eager and deferred execution to optimize performance. Discovered a bug in the program 
              that caused errors during testing and assisted the principal investigator in fixing it.
              Authored a research paper analyzing the results of the data and showcased my completed 
              research at an NYU Symposium. </p>

              <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
              bg-sky-700'>
              </span>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Experience