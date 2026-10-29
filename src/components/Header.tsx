import { MapPin } from 'lucide-react'
import { site } from '../config/site'

export function Header() {
  return (
    <header className="hero">
      <div className="hero__logo-frame">
        <picture className="hero__logo-picture">
          <source srcSet={site.brand.logoWebp} type="image/webp" />
          <img
            className="hero__logo"
            src={site.brand.logo}
            alt="Logomarca original da Centro Ar Climatização"
            width="1038"
            height="1068"
            fetchPriority="high"
          />
        </picture>
      </div>
      <p className="hero__eyebrow">CLIMATIZAÇÃO EM GUARAPARI</p>
      <h1>{site.brand.name}</h1>
      <p className="hero__tagline">{site.brand.tagline}</p>
      <div className="location-badge">
        <MapPin size={15} strokeWidth={2} aria-hidden="true" />
        <span>{site.brand.location}</span>
      </div>
      <p className="hero__description">{site.brand.description}</p>
      <div className="audience-badge">
        <span className="audience-badge__dot" aria-hidden="true" />
        {site.brand.highlight}
      </div>
    </header>
  )
}
