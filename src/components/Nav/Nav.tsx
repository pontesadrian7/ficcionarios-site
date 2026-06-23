import { useState } from 'react'
import { Menu, X, Youtube } from 'lucide-react'
import KingMark from '../ui/KingMark'
import { nav, site } from '../../data/content'
import { useScrolled } from '../../hooks/useScrolled'
import './Nav.css'

export default function Nav() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={close} aria-label={site.fullName}>
          <KingMark className="nav__mark" />
          <span className="nav__wordmark">
            Ficcionarios
            <small>Podcast</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primária">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="btn btn--gold nav__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube size={15} strokeWidth={1.8} />
          {nav.cta.label}
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <ul>
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.cta.href}
              className="btn btn--gold btn--block"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              {nav.cta.label}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
