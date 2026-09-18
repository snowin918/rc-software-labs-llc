import React from 'react'

const expertise = [
  {
    title: 'Web Application Development',
    description:
      'Fast, modern, scalable platforms built with React, Next.js, Django, Node.js, Go, Ruby, and more.',
  },
  {
    title: 'Mobile Development',
    description:
      'Cross-platform or native experiences using React Native, Flutter, Swift, and Kotlin.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'AWS, GCP, Azure, Kubernetes, CI/CD pipelines, container orchestration, automated deployments.',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'LLM integration, automation, predictive systems, NLP pipelines, and custom model optimization.',
  },
  {
    title: 'Full-Stack Project Delivery',
    description:
      'From concept → design → architecture → development → launch → long-term maintenance.',
  },
]

const ExpertiseSection = () => {
  return (
    <section id='expertise' className='py-20 bg-section dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            Expertise
          </p>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white pt-6 pb-4'>
            Our Core Expertise
          </h2>
          <p className='text-lg text-grey dark:text-white/70'>
            We deliver end-to-end, modern engineering across the full product lifecycle.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className='bg-white dark:bg-darkmode rounded-xl p-6 border border-border dark:border-dark_border shadow-service flex gap-4 items-start'>
              <span className='text-2xl font-bold text-primary shrink-0'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className='text-xl font-semibold text-midnight_text dark:text-white'>
                  {item.title}
                </h3>
                <p className='text-base text-grey dark:text-white/70 mt-2'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection

