import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

type LinkButtonProps = {
  href: string
  label: string
  icon: LucideIcon
  variant?: 'primary' | 'secondary'
  className?: string
}

export function LinkButton({
  href,
  label,
  icon: Icon,
  variant = 'secondary',
  className = '',
}: LinkButtonProps) {
  return (
    <a
      className={`link-button link-button--${variant} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abre em nova aba)`}
    >
      <span className="link-button__icon">
        <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
      </span>
      <span className="link-button__label">{label}</span>
      <ArrowUpRight className="link-button__arrow" size={19} strokeWidth={1.9} aria-hidden="true" />
    </a>
  )
}
