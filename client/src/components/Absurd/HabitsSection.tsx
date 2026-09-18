import React from 'react'

const habits = [
  {
    title: 'Be Proactive',
    description:
      'We anticipate needs, remove blockers, and take responsibility for outcomes.',
  },
  {
    title: 'Begin with the End in Mind',
    description:
      'Roadmaps, architecture, and metrics always align with partner goals.',
  },
  {
    title: 'Put First Things First',
    description:
      'Critical path items move first to maximize velocity and impact.',
  },
  {
    title: 'Think Win-Win',
    description:
      'Engagements are structured so both engineers and U.S. partners thrive.',
  },
  {
    title: 'Seek First to Understand',
    description:
      'We listen deeply before designing or proposing solutions.',
  },
  {
    title: 'Synergize',
    description:
      'Cross-functional pods combine AI, cloud, product, and delivery strengths.',
  },
  {
    title: 'Sharpen the Saw',
    description:
      'Continuous learning, retros, and mentorship keep our collective future-ready.',
  },
]

const HabitsSection = () => {
  return (
    <section id='habits' className='py-20 bg-section dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <p className='text-primary uppercase tracking-[0.25em] text-sm font-semibold'>
            7 Habits Framework
          </p>
          <h2 className='text-4xl font-bold text-midnight_text dark:text-white pt-6 pb-4'>
            Guided by Dr. Stephen Covey’s 7 Habits
          </h2>
          <p className='text-lg text-grey dark:text-white/70'>
            Our global engineering collective aligns every engagement around Covey’s proven leadership framework — ensuring proactive ownership, clarity, and collaborative success across cultures and time zones.
          </p>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
          {habits.map((habit) => (
            <div
              key={habit.title}
              className='bg-white dark:bg-darkmode rounded-xl p-6 border border-border dark:border-dark_border shadow-service'>
              <h3 className='text-xl font-semibold text-midnight_text dark:text-white'>
                {habit.title}
              </h3>
              <p className='text-base text-grey dark:text-white/70 mt-3'>
                {habit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HabitsSection

