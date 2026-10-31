import { Award } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section id="achievements" className="section-y bg-navy text-ivory">
      <div className="container-x">
        <SectionHeading title="Achievements & professional development" light>
          My professional journey continues to grow through technical projects, leadership experiences, fellowships, and opportunities to contribute to social impact initiatives.
        </SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={i} delay={i * 120} className="group rounded-2xl border border-ivory/15 p-7 transition duration-500 hover:-translate-y-1 hover:border-gold hover:bg-navy-700">
              <Award className="h-7 w-7 text-gold-300" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold !text-ivory">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ivory/75">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
