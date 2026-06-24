import { Youtube, Instagram, Linkedin, Link } from 'lucide-react'
import KingMark from '../ui/KingMark'
import { footer, site, nav } from '../../data/content'
import './Footer.css'

/**
 * Footer — a calm, editorial close on the deepest pine field.
 * Brand block + social row on the left, navigation and social links in two
 * lean columns, then a hairline and a quiet copyright / legal bar.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand reveal">
            <a href="#top" className="footer__mark-link" aria-label={site.fullName}>
              <KingMark className="footer__mark" variant="outline" title="" />
              <span className="footer__wordmark">
                {site.name}
                <small>Podcast</small>
              </span>
            </a>

            <p className="footer__tagline">{footer.tagline}</p>

            <div className="footer__social">
              <a
                className="icon-btn"
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={18} strokeWidth={1.8} />
              </a>
              <a
                className="icon-btn"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.8} />
              </a>
              <a
                className="icon-btn"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.8} />
              </a>
              <a
                className="icon-btn"
                href={site.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
              >
                <Link size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className="footer__col reveal"
            aria-label={footer.navLabel}
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            <h3 className="footer__heading">{footer.navLabel}</h3>
            <ul className="footer__list">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div
            className="footer__col reveal"
            style={{ '--reveal-delay': '160ms' } as React.CSSProperties}
          >
            <h3 className="footer__heading">{footer.socialLabel}</h3>
            <ul className="footer__list">
              <li>
                <a href={site.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram <span className="footer__handle">{site.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.linktree} target="_blank" rel="noopener noreferrer">
                  Linktree
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule footer__rule" />

        <div className="footer__bar">
          <p className="footer__copyright">{footer.copyright}</p>
          <ul className="footer__legal">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
