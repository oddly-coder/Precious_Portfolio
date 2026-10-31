// Set VITE_FORM_ENDPOINT in a .env file (e.g. a Formspree / Getform / your own API URL).
// Without it, submissions are simulated so you can preview the success state.
export async function submitForm(kind, data) {
  const url = 'https://formspree.io/f/mwllnzoa'
  if (!url) { await new Promise((r) => setTimeout(r, 900)); return { ok: true } }
  const body = new FormData()
  body.append('form', kind)
  Object.entries(data).forEach(([k, v]) => v != null && body.append(k, v))
  const res = await fetch(url, { method: 'POST', body, headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error('Submission failed')
  return { ok: true }
}
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
