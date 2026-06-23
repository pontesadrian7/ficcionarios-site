import { Instagram, ArrowUpRight } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { convidados } from '../../data/content'
import './Convidados.css'

/**
 * Convidados — the roll-call of guests who have already sat at the table.
 * A left-aligned section head with a "Ver todos" link on the right, over a
 * dense responsive grid of monogram cards that each link out to Instagram.
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
                <span className="convidados__avatar">
                  <Avatar name={guest.name} />
                </span>
                <span className="convidados__name">{guest.name}</span>
                <span className="convidados__handle">
                  <Instagram size={13} strokeWidth={1.8} aria-hidden="true" />
                  {guest.handle}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
