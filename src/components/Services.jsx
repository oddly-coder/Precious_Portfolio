import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Icon from './Icons'
import { services, servicesIntro, engagements } from '../data/content'

export default function Services() {
  const [active, setActive] = useState(services[0].id)
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <SectionHeading title="Services">{servicesIntro}</SectionHeading>

        <div className="mt-12 divide-y divide-navy/15 border-y border-navy/15">
          {services.map((s) => {
            const open = active === s.id
            return (
              <Reveal key={s.id}>
                <h3>
                  <button onClick={() => setActive(open ? null : s.id)} aria-expanded={open} aria-controls={`svc-${s.id}`}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${open ? 'border-navy bg-navy text-gold-300' : 'border-gold/60 text-gold group-hover:border-navy'}`}>
                      <Icon name={s.icon} />
                    </span>
                    <span className="flex-1 font-display text-lg font-bold text-navy sm:text-2xl">{s.title}</span>
                    <Plus className={`h-6 w-6 shrink-0 text-navy transition-transform duration-500 ${open ? 'rotate-45' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`svc-${s.id}`} role="region" className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-8 sm:pl-[4.5rem] lg:grid-cols-2">
                      <div>
                        <p className="text-sm font-semibold text-navy">For: <span className="font-normal text-ink/85">{s.audience}</span></p>
                        <p className="mt-4 leading-relaxed">{s.text}</p>
                        <a href={`#/apply?service=${s.id}`} className="btn-primary mt-6">{s.cta}</a>
                      </div>
                      <div>
                        <ul className="space-y-2.5">
                          {s.items.map((it) => <li key={it} className="flex gap-3 text-[15px]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{it}</li>)}
                        </ul>
                        <p className="mt-5 rounded-xl bg-gold/10 p-4 text-sm leading-relaxed">{s.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <h3 className="mt-20 text-2xl font-bold">Engagement options</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 120} className="rounded-2xl border border-navy/10 bg-white p-7 transition duration-500 hover:border-gold hover:shadow-lg hover:shadow-navy/5">
              <h4 className="text-lg font-bold">{e.title}</h4>
              <p className="mt-3 text-[15px] leading-relaxed">{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
