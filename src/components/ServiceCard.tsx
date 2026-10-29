import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = {
  title: string
  detail: string
  icon: LucideIcon
}

export function ServiceCard({ title, detail, icon: Icon }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__icon">
        <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{detail}</p>
    </article>
  )
}
