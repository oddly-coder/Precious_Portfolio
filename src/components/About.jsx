import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { aboutPreview, heroIntro, journey, drivers, focusAreas, education, pillars } from '../data/content'

export default function About() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section id="about" className="pb-14 pt-8 sm:pb-28 sm:pt-10">
        <div className="container-x">
          <SectionHeading title="About me" />
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <Reveal className="space-y-5 text-lg leading-relaxed">
              {aboutPreview.map((p) => <p key={p}>{p}</p>)}
              <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="about-more" className="btn-outline mt-2">
                {open ? 'Show less' : 'More About Me'}
                <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${open ? 'rotate-180' : ''}`} />
              </button>
            </Reveal>
            <Reveal delay={150} className="rounded-3xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg font-bold">Education</h3>
              <p className="mt-4 font-display text-xl font-semibold text-navy">{education.degree}</p>
              <p className="mt-1 text-ink/80">{education.school}</p>
              <h3 className="mt-8 text-lg font-bold">Areas of focus</h3>
              <ul className="mt-4 space-y-2.5">
                {focusAreas.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div id="about-more" className={`grid transition-all duration-700 ease-in-out ${open ? 'mt-14 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="grid gap-12 border-t border-navy/10 pt-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold">My professional journey</h3>
                  <div className="mt-5 space-y-4 leading-relaxed">{journey.map((p) => <p key={p}>{p}</p>)}</div>
                  <div className="mt-5 space-y-4 leading-relaxed text-ink/80">{heroIntro.slice(1).map((p) => <p key={p}>{p}</p>)}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">What drives my work</h3>
                  <dl className="mt-5 space-y-5">
                    {drivers.map((d) => (
                      <div key={d.title} className="border-l-2 border-gold pl-5">
                        <dt className="font-display font-semibold text-navy">{d.title}</dt>
                        <dd className="mt-1 text-[15px] leading-relaxed">{d.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Professional pillars" className="bg-navy py-20 text-ivory sm:py-24">
        <div className="container-x grid gap-px overflow-hidden rounded-3xl bg-ivory/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="group bg-navy p-8 transition-colors duration-500 hover:bg-navy-700 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold-300 transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                <Icon name={p.icon} />
              </div>
              <h3 className="mt-6 text-xl font-bold !text-ivory">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ivory/80">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
