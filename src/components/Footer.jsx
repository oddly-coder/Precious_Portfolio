import { nav, profile } from '../data/content'
export default function Footer() {
  const quick = nav.filter((n) => n.label !== 'Achievements')
  return (
    <footer className="bg-navy-900 text-ivory">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-gold-300">Social Impact | Technology | Programme Management</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">Connecting ideas, people, and practical solutions to create meaningful impact.</p>
        </div>
        <nav aria-label="Quick links">
          <p className="font-display font-semibold">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            {quick.map((n) => <li key={n.href}><a className="transition hover:text-gold-300" href={n.href}>{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="font-display font-semibold">Professional links</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            {profile.linkedin && <li><a className="transition hover:text-gold-300" href={profile.linkedin}>LinkedIn</a></li>}
            {profile.email && <li><a className="transition hover:text-gold-300" href={`mailto:${profile.email}`}>Email</a></li>}
            <li><a className="transition hover:text-gold-300" href="#contact">Contact form</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-ivory/60 sm:flex-row sm:justify-between">
          <p>© {profile.launchYear} {profile.name}. All rights reserved.</p>
          <a href="#/privacy" className="hover:text-gold-300">Privacy Notice</a>
        </div>
      </div>
    </footer>
  )
}
