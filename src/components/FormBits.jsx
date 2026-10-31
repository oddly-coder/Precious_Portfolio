import { CheckCircle2 } from 'lucide-react'
export function Field({ label, name, error, required, hint, children }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}{required ? <span className="text-red-700"> *</span> : <span className="font-normal text-ink/60"> (optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-ink/60">{hint}</p>}
      {error && <p id={`${name}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-700">{error}</p>}
    </div>
  )
}
export const inputProps = (name, error) => ({ id: name, name, 'aria-invalid': !!error, 'aria-describedby': error ? `${name}-error` : undefined, className: `input ${error ? '!border-red-700' : ''}` })

export function SuccessPanel({ title = 'Thank you', children, onReset }) {
  return (
    <div role="status" className="animate-rise rounded-2xl border border-gold/50 bg-white p-8 text-center sm:p-12">
      <CheckCircle2 className="mx-auto h-12 w-12 text-gold" aria-hidden="true" />
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/85">{children}</p>
      {onReset && <button onClick={onReset} className="btn-outline mt-7">Send another</button>}
    </div>
  )
}
export const ErrorBanner = ({ children }) => (
  <p role="alert" className="rounded-xl border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800">{children}</p>
)
