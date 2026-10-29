import { site } from '../config/site'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__rule" aria-hidden="true" />
      <p>{site.brand.copyright}</p>
    </footer>
  )
}
