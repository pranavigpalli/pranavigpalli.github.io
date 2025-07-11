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

            <p className='font-light text-lg text-gray-700'>SWE Intern, Jan 2025 - June 2025</p>

            <p className='text-sm text-gray-700'>
              Built a scalable Python ETL pipeline (Pandas, NumPy, SQL) to process 17k+ inventory records 
              for thermal inertia analysis. Integrated NLP system to automate thermal heat capacity estimation with 98% accuracy.
              Extracted insights from pipeline output, leading to strategies projected to reduce energy consumption 
              by 25% and saving $3M+ annually.
</p>

            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full
            bg-sky-700'>
            </span>
          </div>

          <div className="relative space-y-1 border-l-2 p-8 
          border-gray-400 text-left">

            <h3 className='text-xl font-semibold md:text-2xl'>Simulated Annealing Haplotype 
              Aligner Research Project @ UCI</h3>

            <p className='font-light text-lg text-gray-700'>Developer, Sep 2024 - July 2025 </p>

            <p className='text-sm text-gray-700'>
            Refactored C-based haplotype alignment algorithm, reducing runtime by 20% on single nucleotide polymorphism (SNPs).
            Engineered a custom k-mer algorithm to align polyploid genomes, reducing error rates by 50% (from 8% to 4%) on datasets of up to 20,000 SNPs.
            Recognized with the Chancellor’s Award for Excellence in Undergraduate Research (Top 1% of 500+ applicants).

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

              <p className='font-light text-lg text-gray-700'>Vice President, Dec 2023 - Present</p>

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