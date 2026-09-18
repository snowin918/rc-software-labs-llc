'use client'

import React from 'react'
import Link from 'next/link'
import { email, legalName } from '@/data/company'

const STORY_BEACONS = [
  {
    label: 'Dreams & challenges',
    copy: 'Everyone carries dreams — and equally real constraints. We hold both in the same room.',
  },
  {
    label: 'Opportunity & access',
    copy: 'Opportunity is powerful, but access isn’t evenly distributed. We design the bridges in between.',
  },
  {
    label: 'Collaboration transforms',
    copy: 'When we move together, collaboration becomes the force that re-distributes possibility.',
  },
  {
    label: 'Light + dark literacy',
    copy: 'Wisdom grows by sitting with both light and dark, listening first, then engineering with care.',
  },
]

const ROOM_LEGENDS = [
  {
    label: 'Laptop glow',
    detail: 'Signals clarity cutting through a dark backdrop — insight stays bright even when the world feels dim.',
  },
  {
    label: 'Listening lamp',
    detail: 'A small, steady warmth that reminds everyone the conversation is held with compassion.',
  },
  {
    label: 'Desk & artifacts',
    detail: 'Tools, notes, and grounded surfaces where engineering rigor meets lived human experience.',
  },
]

const Hero = () => {
  const heroSummary = {
    title: 'Navigating life’s complexities with purpose',
    lead: 'Everyone carries dreams — and faces challenges on the journey to bring those dreams to life. Opportunity is powerful, but access to it is not equally distributed. This is where collaboration becomes transformative.',
    body: `At ${legalName}, we believe wisdom comes from navigating both light and dark with compassion. Instead of resisting complexity, we engage with it — listening first, understanding deeply, and engineering solutions that honor human experience as much as technical precision.`,
  }

  return (
    <section
      id='home'
      className='relative isolate overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-[#EEF2FF] to-white text-midnight_text dark:from-[#030617] dark:via-[#050A1A] dark:to-[#01030B] dark:text-white'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/15 blur-[140px]' />
        <div className='absolute bottom-0 left-[-15%] h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-[160px]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(12,23,61,0.07),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]' />
      </div>

      <div className='relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 lg:flex-row lg:items-start lg:gap-20 lg:pb-32 lg:pt-32'>
        <div className='w-full space-y-8'>
          <div className='inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-2 text-xs font-semibold tracking-[0.4em] text-slate-500 backdrop-blur dark:border-white/20 dark:bg-white/5 dark:text-white/70'>
            {legalName.toUpperCase()} • COMPASSIONATE SYSTEMS
            <span className='h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse' />
          </div>

          <div className='space-y-6'>
            <h1 className='font-display text-4xl font-semibold leading-tight text-midnight_text dark:text-white sm:text-5xl lg:text-[56px]'>
              {heroSummary.title}
            </h1>
            <p className='text-lg text-grey dark:text-white/80'>{heroSummary.lead}</p>
            <p className='text-base text-grey dark:text-white/70'>{heroSummary.body}</p>
          </div>

          <div className='flex flex-wrap gap-4'>
            <a
              href={`mailto:${email}`}
              className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-[#5B8DFF] px-10 py-3 text-base font-semibold text-white shadow-[0_15px_35px_rgba(64,113,255,0.35)] transition-all duration-300 hover:translate-y-[1px] hover:shadow-[0_12px_26px_rgba(64,113,255,0.45)]'>
              Start a build
            </a>
            <Link
              href='/brief.pdf'
              target='_blank'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-midnight_text/15 bg-white/80 px-10 py-3 text-base font-semibold text-midnight_text transition-all duration-300 hover:border-midnight_text/40 hover:bg-white dark:border-white/30 dark:bg-white/5 dark:text-white'>
              View capabilities <span aria-hidden='true'>↗</span>
            </Link>
          </div>
        </div>

        <div className='w-full space-y-10'>
          <div className='rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_rgba(12,17,43,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_120px_rgba(0,0,0,0.6)]'>
            <p className='text-xs uppercase tracking-[0.5em] text-primary/80'>Story beacons</p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {STORY_BEACONS.map((beacon) => (
                <div
                  key={beacon.label}
                  className='rounded-2xl border border-white/50 bg-white/80 p-4 text-sm text-grey shadow-[0_20px_50px_rgba(15,20,40,0.08)] dark:border-white/15 dark:bg-white/5 dark:text-white/80'>
                  <p className='text-[10px] uppercase tracking-[0.45em] text-primary/70'>{beacon.label}</p>
                  <p className='mt-3 text-base text-midnight_text dark:text-white'>{beacon.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_rgba(12,17,43,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_120px_rgba(0,0,0,0.6)]'>
            <p className='text-xs uppercase tracking-[0.5em] text-primary/80'>Room legend</p>
            <p className='mt-3 text-base text-grey dark:text-white/80'>
              Each element of the studio is a metaphor for how we work: the glow, the lamp, and the artifacts all hold space for complexity.
            </p>
            <div className='mt-6 space-y-4'>
              {ROOM_LEGENDS.map((legend) => (
                <div
                  key={legend.label}
                  className='rounded-2xl border border-white/50 bg-white/80 p-4 text-sm text-grey shadow-sm dark:border-white/20 dark:bg-white/5 dark:text-white/80'>
                  <p className='text-[10px] uppercase tracking-[0.45em] text-primary/70'>{legend.label}</p>
                  <p className='mt-2 text-base text-midnight_text dark:text-white'>{legend.detail}</p>
                </div>
              ))}
            </div>
            <div className='mt-6 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.45em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-white'>
              Move with purpose • Engage the room • Honor nuance
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
