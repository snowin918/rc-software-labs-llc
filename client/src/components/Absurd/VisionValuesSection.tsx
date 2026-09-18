import React from 'react'

const values = [
  'Courage to think independently',
  'Discipline to build consistently',
  'Commitment to shared growth',
  'Curiosity to keep learning',
]

const VisionValuesSection = () => {
  return (
    <section id='values' className='py-20 bg-white dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start'>
        <div data-aos='fade-right' data-aos-duration='1000'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Mission
          </p>
          <h3 className='text-3xl font-semibold text-midnight_text dark:text-white pt-6 pb-4'>
            To empower global developers, deliver world-class technology, and build bridges between international talent and U.S. markets.
          </h3>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold mt-10'>
            Vision
          </p>
          <h3 className='text-3xl font-semibold text-midnight_text dark:text-white pt-6 pb-4'>
            A world where skill and integrity matter more than geography — where opportunity is shared, and progress is collective.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default VisionValuesSection

