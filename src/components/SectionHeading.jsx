import Reveal from './Reveal'
export default function SectionHeading({ title, children, light = false, className = '' }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <h2 className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${light ? '!text-ivory' : ''}`}>{title}</h2>
      <span className="mt-5 block h-0.5 w-14 bg-gold" />
      {children && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-ivory/80' : 'text-ink/85'}`}>{children}</p>}
    </Reveal>
  )
}
