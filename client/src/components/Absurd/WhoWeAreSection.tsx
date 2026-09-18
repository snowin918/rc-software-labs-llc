import React from 'react'
import { cityState, dbaName, legalName } from '@/data/company'

const differentiators = [
  'Talent without borders',
  'Integrity before shortcuts',
  'Engineering before politics',
  'Collaboration before hierarchy',
]

const WhoWeAreSection = () => {
  return (
    <section
      id='who-we-are'
      className='py-20 bg-white dark:bg-darkmode scroll-mt-25'>
      <div className='container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start'>
        <div data-aos='fade-right' data-aos-duration='1000'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Who We Are
          </p>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white pt-6 pb-4'>
            About {legalName}
          </h2>
          <p className='text-lg text-grey dark:text-white/70 leading-relaxed mb-6'>
            {legalName} ({dbaName}) is a {cityState}–based engineering collective committed to building intelligent systems and expanding access to meaningful opportunities across borders.
          </p>
          <p className='text-lg text-grey dark:text-white/70 leading-relaxed'>
            Our team spans multiple countries, cultures, and disciplines — unified by strong fundamentals, continuous learning, and a disciplined approach to clean, reliable engineering.
          </p>
        </div>
        <div data-aos='fade-left' data-aos-duration='1000' className='bg-section dark:bg-darklight rounded-lg p-8 border border-border dark:border-dark_border'>
          <h3 className='text-2xl font-semibold text-midnight_text dark:text-white mb-6'>
            What Makes Us Different
          </h3>
          <ul className='space-y-4'>
            {differentiators.map((item) => (
              <li key={item} className='flex gap-4 items-start'>
                <span className='h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold mt-1'>
                  ●
                </span>
                <p className='text-lg text-midnight_text dark:text-white'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

