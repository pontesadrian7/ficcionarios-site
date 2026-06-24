import { Instagram, ArrowUpRight } from 'lucide-react'
import { convidados } from '../../data/content'
import './Convidados.css'

/** Photo path for a guest, derived from the @handle. */
const photoOf = (handle: string) => `/convidados/${handle.replace('@', '')}.jpg`

/**
 * Convidados — the roll-call of guests who have already sat at the table.
 * A left-aligned section head with a "Ver todos" link, over a responsive grid
 * of portrait photo cards (each linking to Instagram), in the editorial style
 * of the reference: full-bleed photo + name and handle over a pine gradient.
 */
export default function Convidados() {
  return (
    <section className="section convidados" id="convidados">
      <div className="container">
        <div className="convidados__head reveal">
          <div className="section-head convidados__intro">
            <span className="eyebrow">{convidados.eyebrow}</span>
            <h2 className="display">{convidados.title}</h2>
            <p className="lead">{convidados.intro}</p>
          </div>

          <a
            className="convidados__see-all"
            href={convidados.seeAll.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {convidados.seeAll.label}
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>

        <ul className="convidados__grid">
          {convidados.items.map((guest, i) => (
            <li
              key={guest.handle}
              className="convidados__item reveal"
              style={{ '--reveal-delay': `${(i % 6) * 60}ms` } as React.CSSProperties}
            >
              <a
                className="convidados__card"
                href={guest.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${guest.name} no Instagram`}
              >
                <img
                  className="convidados__photo"
                  src={photoOf(guest.handle)}
                  alt={guest.name}
                  loading="lazy"
                />
                <span className="convidados__overlay" aria-hidden="true" />
                <span className="convidados__info">
                  <span className="convidados__name">{guest.name}</span>
                  <span className="convidados__handle">
                    <Instagram size={13} strokeWidth={1.8} aria-hidden="true" />
                    {guest.handle}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
