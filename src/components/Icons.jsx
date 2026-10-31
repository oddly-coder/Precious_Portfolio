import { HeartHandshake, Cpu, ClipboardCheck, FileText, Code2, GraduationCap } from 'lucide-react'
const map = { impact: HeartHandshake, tech: Cpu, programme: ClipboardCheck, project: FileText, training: GraduationCap, code: Code2 }
export default function Icon({ name, className = 'h-6 w-6' }) {
  const C = map[name] || ClipboardCheck
  return <C className={className} aria-hidden="true" strokeWidth={1.6} />
}
