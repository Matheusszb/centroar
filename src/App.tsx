import {
  AirVent,
  Droplets,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Settings2,
  Sparkles,
} from 'lucide-react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LinkButton } from './components/LinkButton'
import { ServiceCard } from './components/ServiceCard'
import { site } from './config/site'

const serviceIcons = [AirVent, Settings2, Droplets, Sparkles] as const

function App() {
  return (
    <div className="page-shell">
      <main className="page-content">
        <Header />

        <nav className="links" aria-label="Links de contato e redes sociais">
          <LinkButton
            href={site.contact.primaryWhatsApp}
            label={site.links.primary}
            icon={MessageCircle}
            variant="primary"
          />
          <LinkButton
            href={site.contact.alternateWhatsApp}
            label={site.links.alternate}
            icon={Phone}
          />
          <LinkButton href={site.contact.maps} label={site.links.maps} icon={MapPin} />
          <LinkButton href={site.contact.instagram} label={site.links.instagram} icon={Instagram} />
        </nav>

        <section className="services" aria-labelledby="services-title">
          <p className="section-eyebrow">{site.services.eyebrow}</p>
          <h2 id="services-title">{site.services.title}</h2>
          <div className="services__grid">
            {site.services.items.map((service, index) => (
              <ServiceCard key={service.title} {...service} icon={serviceIcons[index]} />
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <p className="section-eyebrow">{site.cta.eyebrow}</p>
          <h2 id="final-cta-title">{site.cta.title}</h2>
          <LinkButton
            href={site.contact.primaryWhatsApp}
            label={site.cta.button}
            icon={MessageCircle}
            variant="primary"
            className="final-cta__button"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
