import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience, projects } from '../data/content'

const Tag = ({ children }) => <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-navy">{children}</span>

export default function Experience() {
  return (
    <section id="experience" className="section-y bg-ivory-200/60">
      <div className="container-x">
        <SectionHeading title="Experience & projects">A record of the programmes, partnerships, and technical work I have contributed to.</SectionHeading>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="text-xl font-bold">Professional experience</h3>
            <ol className="relative mt-6 space-y-8 border-l border-gold/60 pl-8">
              {experience.map((e, i) => (
                <Reveal as="li" key={i} delay={i * 120} className="relative">
                  <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ivory" aria-hidden="true" />
                  <p className="text-sm text-ink/70">{e.period}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-navy">{e.role}</p>
                  <p className="text-[15px] font-medium">{e.org}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{e.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold">Featured projects</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {projects.map((p, i) => (
                <Reveal key={i} delay={i * 120} className={`group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/10 ${i === 0 ? 'sm:col-span-2' : ''}`}>
                  <div className="flex items-center justify-between gap-3"><Tag>{p.status}</Tag></div>
                  <h4 className="mt-4 text-lg font-bold">{p.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
