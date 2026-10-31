import { profile, heroIntro } from '../data/content'

function Portrait() {
  const initials = profile.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <div className="relative mx-auto w-full max-w-xs px-6 pb-0 pt-6 sm:max-w-sm sm:pb-4 sm:pt-8">

      {/* polaroid */}
      <figure className="group relative animate-drop rotate-[-3deg] rounded-md bg-white p-3 shadow-2xl shadow-navy/30 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02]">
        {/* gold tape */}
        <span className="absolute -top-3.5 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-[-2deg] bg-gold/80 shadow-sm" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden bg-navy">
          {profile.portrait ? (
            <img src={profile.portrait} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-gold-300" role="img" aria-label="Portrait placeholder">
              <span className="font-display text-8xl font-extrabold tracking-tight">{initials}</span>
              <span className="mt-3 px-4 text-center text-xs text-ivory/50">Add approved portrait in content.js</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" aria-hidden="true" />
        </div>
      </figure>

      {/* floating stickers */}
      <div className="absolute -right-1 top-2 z-20 sm:-right-4"><span className="block animate-pop"><span className="block animate-float rotate-6 rounded-full bg-navy px-4 py-1.5 text-xs font-bold text-gold-300 shadow-lg ring-2 ring-ivory">Social Impact</span></span></div>
      <div className="absolute -left-2 top-[46%] z-20 sm:-left-8"><span className="block animate-pop" style={{ animationDelay: '1.25s' }}><span className="block animate-float -rotate-6 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-navy shadow-lg ring-2 ring-gold" style={{ animationDelay: '-2s' }}>Technology</span></span></div>
      <div className="absolute bottom-4 right-0 z-20 sm:-right-3"><span className="block animate-pop" style={{ animationDelay: '1.4s' }}><span className="flex animate-float items-center justify-center rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy-900 shadow-lg ring-2 ring-ivory" style={{ animationDelay: '-3.5s' }}>Programme Management</span></span></div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-2 pt-28 sm:pb-6 sm:pt-40">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <h1 className="animate-rise font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
            {profile.name}
          </h1>
          <span className="animate-draw mt-6 block h-0.5 w-20 origin-left bg-gold" />
          <p className="animate-rise mt-6 font-display  leading-snug text-navy/90 " style={{ animationDelay: '.15s' }}>
            {profile.tagline}
          </p>
          <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed" style={{ animationDelay: '.3s' }}>{heroIntro[0]}</p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '.45s' }}>
            <a href="#/apply" className="btn-primary">Work With Me</a>
            <a href="#about" className="btn-outline">More About Me</a>
          </div>
        </div>
        <Portrait />
      </div>
    </section>
  )
}
