import React from 'react'
import { legalName } from '@/data/company'

const guides = [
  {
    title: 'Compassion over conflict',
    description:
      'We embrace complexity with empathy, designing systems that reflect real human needs and constraints.',
  },
  {
    title: 'Opportunity-centered engineering',
    description:
      'Equitable platforms create pathways where one breakthrough can multiply into lasting impact.',
  },
  {
    title: 'Shared growth',
    description:
      'When partners rise, our global collective rises with them.',
  },
]

const PhilosophySection = () => {
  return (
    <section
      id='philosophy'
      className='bg-section dark:bg-darklight py-20 scroll-mt-25'>
      <div className='container mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-12 items-start'>
        <div className='md:col-span-6' data-aos='fade-right' data-aos-duration='1000'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Philosophy
          </p>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white pt-6 pb-4'>
            Navigating life’s complexities with purpose
          </h2>
          <div className='space-y-4 text-grey dark:text-white/70 text-lg leading-relaxed'>
            <p>
              Everyone carries dreams — and faces challenges on the journey to bring those dreams to life. Opportunity is powerful, but access to it is not equally distributed. This is where collaboration becomes transformative.
            </p>
            <p>
              At {legalName}, we believe wisdom comes from navigating both light and dark with compassion. Instead of resisting complexity, we engage with it — listening first, understanding deeply, and engineering solutions that honor human experience as much as technical precision.
            </p>
          </div>
        </div>
        <div className='md:col-span-6 space-y-6' data-aos='fade-left' data-aos-duration='1000'>
          <p className='text-sm font-semibold text-midnight_text dark:text-white uppercase tracking-[0.25em]'>
            What Guides Us
          </p>
          <div className='space-y-4'>
            {guides.map((item) => (
              <div
                key={item.title}
                className='bg-white dark:bg-darkmode p-6 rounded-lg border border-border dark:border-dark_border shadow-service'>
                <h3 className='text-xl font-semibold text-midnight_text dark:text-white'>
                  {item.title}
                </h3>
                <p className='text-grey dark:text-white/70 mt-2 text-base'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection

