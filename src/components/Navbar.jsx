import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const close = () => setOpen(false)
  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-navy text-ivory transition-all duration-300 ${scrolled ? 'shadow-lg shadow-navy-900/30' : ''}`}>
      <nav aria-label="Primary" className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-[4.5rem]'}`}>
        <a href="#/" onClick={close} className="font-display text-base font-bold tracking-tight sm:text-lg">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="group relative py-1 text-sm text-ivory/80 transition hover:text-ivory">
                {n.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#/apply" className="btn-gold hidden !py-2 sm:inline-flex">Work With Me</a>
          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`grid transition-all duration-500 lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <ul className="container-x flex flex-col gap-1 border-t border-ivory/10 pb-6 pt-3">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={close} className="block rounded-lg px-2 py-3 text-ivory/90 hover:bg-ivory/5">{n.label}</a></li>
            ))}
            <li className="pt-3"><a href="#/apply" onClick={close} className="btn-gold w-full">Work With Me</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
