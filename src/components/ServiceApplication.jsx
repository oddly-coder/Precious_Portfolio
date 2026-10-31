import { useState } from 'react'
import { Paperclip } from 'lucide-react'
import { Field, inputProps, SuccessPanel, ErrorBanner } from './FormBits'
import { serviceOptions, engagementTypes, services } from '../data/content'
import { submitForm, isEmail } from '../lib/submit'

const MAX_MB = 10
const required = { name: 'full name', email: 'email address', title: 'request title', describe: 'description of your organisation or project', challenge: 'challenge or need', support: 'support requested', outcomes: 'expected outcomes' }

function initial() {
  const q = new URLSearchParams(window.location.hash.split('?')[1] || '').get('service')
  const idx = services.findIndex((s) => s.id === q)
  return { name: '', email: '', phone: '', organisation: '', role: '', profile: '', service: idx >= 0 ? serviceOptions[idx] : '', title: '', describe: '', challenge: '', support: '', outcomes: '', beneficiaries: '', location: '', start: '', timeline: '', engagement: '', links: '', confirm: false, website: '' }
}

const Group = ({ title, children }) => (
  <fieldset className="space-y-5 border-t border-navy/10 pt-8 first:border-0 first:pt-0">
    <legend className="mb-5 font-display text-xl font-bold text-navy">{title}</legend>{children}
  </fieldset>
)
const Choice = ({ name, type = 'radio', options, value, onChange, error }) => (
  <div role={type === 'radio' ? 'radiogroup' : undefined} className="grid gap-3 sm:grid-cols-2">
    {options.map((o) => (
      <label key={o} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition duration-300 ${value === o ? 'border-navy bg-navy text-ivory' : 'border-navy/20 bg-white hover:border-gold'} ${error ? 'border-red-700' : ''}`}>
        <input type={type} name={name} value={o} checked={value === o} onChange={onChange} className="h-4 w-4 accent-[#B78B52]" />{o}
      </label>
    ))}
  </div>
)

export default function ServiceApplication() {
  const [v, setV] = useState(initial)
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (e) => setV({ ...v, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  const pickFile = (e) => {
    const f = e.target.files[0]
    if (f && f.size > MAX_MB * 1024 * 1024) { setErrors({ ...errors, file: `File is larger than ${MAX_MB} MB. Choose a smaller file or share a link instead.` }); e.target.value = ''; return }
    setErrors({ ...errors, file: undefined }); setFile(f || null)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const er = {}
    Object.entries(required).forEach(([k, label]) => { if (!String(v[k]).trim()) er[k] = `Please enter your ${label}.` })
    if (v.email && !isEmail(v.email)) er.email = 'Enter a valid email address, like name@example.com.'
    if (!v.service) er.service = 'Select the service you need.'
    if (!v.engagement) er.engagement = 'Select an engagement type.'
    if (!v.confirm) er.confirm = 'Please confirm the statement above before submitting.'
    if (errors.file) er.file = errors.file
    setErrors(er)
    const first = Object.keys(er)[0]
    if (first) return document.getElementById(first)?.focus() || document.querySelector(`[name="${first}"]`)?.focus()
    if (v.website) return setStatus('done')
    setStatus('sending')
    try { await submitForm('service-application', { ...v, document: file }); setStatus('done'); window.scrollTo({ top: 0, behavior: 'smooth' }) } catch { setStatus('error') }
  }

  return (
    <section className="container-x max-w-3xl pb-24 pt-32 sm:pt-40">
      <div className="animate-rise">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Apply for a service</h1>
        <span className="mt-5 block h-0.5 w-14 bg-gold" />
        <p className="mt-6 leading-relaxed">Thank you for your interest in working with me. Please complete the form below with information about your project, the support you need, and your expected outcomes. Your submission will help me understand the request and assess whether I am available and suitably positioned to support it.</p>
        <p className="mt-4 rounded-xl bg-gold/10 p-4 text-sm leading-relaxed">Submitting an application does not automatically confirm acceptance or establish a professional engagement. If your request is suitable, I will contact you to discuss the next steps.</p>
      </div>

      {status === 'done' ? (
        <div className="mt-10"><SuccessPanel title="Request received">Thank you for submitting your service request. Your information has been received for review. If your request aligns with my services, availability, and capacity, I will contact you using the details provided.</SuccessPanel>
          <a href="#/" className="btn-outline mt-6">Back to home</a></div>
      ) : (
        <form onSubmit={submit} noValidate className="mt-10 space-y-10 rounded-3xl border border-navy/10 bg-white p-6 sm:p-10">
          <Group title="Contact information">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required error={errors.name}><input {...inputProps('name', errors.name)} value={v.name} onChange={set} autoComplete="name" /></Field>
              <Field label="Email address" name="email" required error={errors.email}><input {...inputProps('email', errors.email)} type="email" value={v.email} onChange={set} autoComplete="email" /></Field>
              <Field label="Phone number" name="phone"><input {...inputProps('phone')} type="tel" value={v.phone} onChange={set} autoComplete="tel" /></Field>
              <Field label="Organisation or business name" name="organisation"><input {...inputProps('organisation')} value={v.organisation} onChange={set} /></Field>
              <Field label="Role or position" name="role"><input {...inputProps('role')} value={v.role} onChange={set} /></Field>
              <Field label="Website or professional profile" name="profile"><input {...inputProps('profile')} type="url" value={v.profile} onChange={set} placeholder="https://" /></Field>
            </div>
          </Group>

          <Group title="Service selection">
            <Choice name="service" options={serviceOptions} value={v.service} onChange={set} error={errors.service} />
            {errors.service && <p role="alert" className="text-xs font-medium text-red-700">{errors.service}</p>}
          </Group>

          <Group title="Project information">
            <Field label="Project or request title" name="title" required error={errors.title}><input {...inputProps('title', errors.title)} value={v.title} onChange={set} /></Field>
            <Field label="Briefly describe your organisation, project, or idea" name="describe" required error={errors.describe}><textarea {...inputProps('describe', errors.describe)} rows={4} value={v.describe} onChange={set} /></Field>
            <Field label="What challenge or need would you like support with?" name="challenge" required error={errors.challenge}><textarea {...inputProps('challenge', errors.challenge)} rows={4} value={v.challenge} onChange={set} /></Field>
            <Field label="What specific support are you requesting?" name="support" required error={errors.support}><textarea {...inputProps('support', errors.support)} rows={4} value={v.support} onChange={set} /></Field>
            <Field label="What outcomes or deliverables do you expect?" name="outcomes" required error={errors.outcomes}><textarea {...inputProps('outcomes', errors.outcomes)} rows={4} value={v.outcomes} onChange={set} /></Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Who will benefit from the work?" name="beneficiaries"><input {...inputProps('beneficiaries')} value={v.beneficiaries} onChange={set} /></Field>
              <Field label="Where will the work take place?" name="location"><input {...inputProps('location')} value={v.location} onChange={set} /></Field>
              <Field label="Preferred start date" name="start"><input {...inputProps('start')} type="date" value={v.start} onChange={set} /></Field>
              <Field label="Expected completion date or timeline" name="timeline"><input {...inputProps('timeline')} value={v.timeline} onChange={set} /></Field>
            </div>
          </Group>

          <Group title="Engagement type">
            <Choice name="engagement" options={engagementTypes} value={v.engagement} onChange={set} error={errors.engagement} />
            {errors.engagement && <p role="alert" className="text-xs font-medium text-red-700">{errors.engagement}</p>}
          </Group>

          <Group title="Supporting documents">
            <Field label="Project brief, terms of reference, or reference document" name="file" error={errors.file} hint={`PDF, Word, or image files up to ${MAX_MB} MB.`}>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-navy/30 bg-ivory px-4 py-4 text-sm transition hover:border-gold">
                <Paperclip className="h-5 w-5 text-gold" aria-hidden="true" />{file ? file.name : 'Choose a file'}
                <input id="file" name="file" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={pickFile} className="sr-only" />
              </label>
            </Field>
            <Field label="Links to relevant documents" name="links"><input {...inputProps('links')} value={v.links} onChange={set} placeholder="https://" /></Field>
          </Group>

          <Group title="Confirmation">
            <label className="flex gap-3 text-sm leading-relaxed">
              <input type="checkbox" id="confirm" name="confirm" checked={v.confirm} onChange={set} aria-invalid={!!errors.confirm} className="mt-1 h-4 w-4 shrink-0 accent-[#B78B52]" />
              <span>I confirm that the information provided is accurate to the best of my knowledge and understand that submitting this request does not guarantee acceptance.</span>
            </label>
            {errors.confirm && <p role="alert" className="text-xs font-medium text-red-700">{errors.confirm}</p>}
            <p className="text-sm">Read the <a href="#/privacy" className="underline decoration-gold underline-offset-4 hover:text-navy">privacy notice</a>.</p>
            <input name="website" value={v.website} onChange={set} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            {status === 'error' && <ErrorBanner>Your request could not be submitted. Check your connection and try again.</ErrorBanner>}
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">{status === 'sending' ? 'Submitting…' : 'Submit Service Request'}</button>
          </Group>
        </form>
      )}
    </section>
  )
}
