import React from 'react'

const partnerValues = [
  'Senior-level engineering at efficient cost',
  'Strong communication and ownership mentality',
  'Adaptive, fast-learning global teams',
  'Reliable, long-term collaboration',
  'Ethical, transparent processes',
]

const approach = [
  {
    title: 'We simplify complexity.',
    description:
      'Clear architecture, clean abstractions, and thoughtful systems thinking.',
  },
  {
    title: 'We communicate clearly.',
    description:
      'Direct, honest, and proactive alignment with stakeholders.',
  },
  {
    title: 'We build efficiently.',
    description:
      'High-leverage engineering focused on delivering the most meaningful work first.',
  },
  {
    title: 'We deliver consistently.',
    description:
      'Stable velocity, predictable outcomes, and resilient systems.',
  },
]

const PartnersSection = () => {
  return (
    <section id='partners' className='py-20 bg-white dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-start'>
        <div data-aos='fade-right' data-aos-duration='1000'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Why partners choose us
          </p>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white pt-6 pb-4'>
            What U.S. partners value
          </h2>
          <ul className='space-y-4'>
            {partnerValues.map((item) => (
              <li key={item} className='flex gap-4 items-start'>
                <span className='h-3 w-3 rounded-full bg-primary mt-2'></span>
                <p className='text-lg text-grey dark:text-white/70'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos='fade-left' data-aos-duration='1000' className='bg-section dark:bg-darklight rounded-lg p-8 border border-border dark:border-dark_border'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Our approach
          </p>
          <div className='space-y-6 mt-6'>
            {approach.map((item) => (
              <div key={item.title}>
                <h3 className='text-xl font-semibold text-midnight_text dark:text-white'>
                  {item.title}
                </h3>
                <p className='text-base text-grey dark:text-white/70 mt-2'>
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

export default PartnersSection

