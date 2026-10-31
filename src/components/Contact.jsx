import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { Field, inputProps, SuccessPanel, ErrorBanner } from './FormBits'
import { profile } from '../data/content'
import { submitForm, isEmail } from '../lib/submit'

const empty = { name: '', email: '', organisation: '', subject: '', message: '', website: '' }

function ContactForm() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const set = (e) => setV({ ...v, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const er = {}
    if (!v.name.trim()) er.name = 'Please enter your full name.'
    if (!v.email.trim()) er.email = 'Please enter your email address.'
    else if (!isEmail(v.email)) er.email = 'Enter a valid email address, like name@example.com.'
    if (!v.subject.trim()) er.subject = 'Please add a subject.'
    if (!v.message.trim()) er.message = 'Please write a message.'
    setErrors(er)
    if (Object.keys(er).length) return document.getElementById(Object.keys(er)[0])?.focus()
    if (v.website) return setStatus('done') // honeypot: silently drop bots
    setStatus('sending')
    try { await submitForm('contact', v); setStatus('done'); setV(empty) } catch { setStatus('error') }
  }

  if (status === 'done') return <SuccessPanel title="Message sent" onReset={() => setStatus('idle')}>Thank you for reaching out. Your message has been submitted. I appreciate your interest and will respond.</SuccessPanel>

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name}><input {...inputProps('name', errors.name)} value={v.name} onChange={set} autoComplete="name" /></Field>
        <Field label="Email address" name="email" required error={errors.email}><input {...inputProps('email', errors.email)} type="email" value={v.email} onChange={set} autoComplete="email" /></Field>
      </div>
      <Field label="Organisation" name="organisation"><input {...inputProps('organisation')} value={v.organisation} onChange={set} autoComplete="organization" /></Field>
      <Field label="Subject" name="subject" required error={errors.subject}><input {...inputProps('subject', errors.subject)} value={v.subject} onChange={set} /></Field>
      <Field label="Message" name="message" required error={errors.message}><textarea {...inputProps('message', errors.message)} rows={5} value={v.message} onChange={set} /></Field>
      <input name="website" value={v.website} onChange={set} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === 'error' && <ErrorBanner>Your message could not be sent. Check your connection and try again.</ErrorBanner>}
      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Send Message'}<Send className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}

export default function Contact() {
  const links = [
    profile.email && { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.linkedin && { label: 'LinkedIn', value: 'View profile', href: profile.linkedin },
    ...profile.otherLinks.map((l) => ({ label: l.label, value: l.label, href: l.href })),
  ].filter(Boolean)
  return (
    <section id="contact" className="section-y bg-ivory-200/60">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading title="Let’s connect">
            I’m open to meaningful professional conversations, opportunities, collaborations, and projects that connect technology, effective programme delivery, and positive social impact.
          </SectionHeading>
          <Reveal delay={150} className="mt-6 space-y-4 leading-relaxed">
            <p>Whether you represent an organisation, are exploring a potential partnership, have a project in mind, or simply want to connect professionally, I welcome your message.</p>
            {links.length > 0 && (
              <ul className="space-y-3 pt-2">
                {links.map((l) => (
                  <li key={l.label} className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                    <span className="font-semibold text-navy">{l.label}:</span> <a className="underline decoration-gold underline-offset-4 hover:text-navy" href={l.href}>{l.value}</a></li>
                ))}
              </ul>
            )}
            <div className="rounded-2xl border border-gold/50 bg-white p-6">
              <p className="text-[15px]">Looking for paid work, a collaboration, or pro bono support? Use the dedicated service application so I can review your request properly.</p>
              <a href="#/apply" className="btn-gold mt-4">Submit a Service Request</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}><ContactForm /></Reveal>
      </div>
    </section>
  )
}
