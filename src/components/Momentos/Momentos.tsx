import { Instagram } from 'lucide-react'
import KingMark from '../ui/KingMark'
import { momentos } from '../../data/content'
import './Momentos.css'

/**
 * Momentos — behind-the-scenes "gallery" with no photos on hand.
 * Instead of empty frames we build an intentional, curated mosaic of
 * deep-green tiles: each a varied-height card with a faded king watermark
 * and a single uppercase label, lifting and brightening on hover.
 */

/** Decorative tiles. `span` drives the grid-row span for a dynamic rhythm. */
const tiles = [
  { label: 'Bastidores', span: 2 },
  { label: 'Ao vivo', span: 1 },
  { label: 'Estúdio', span: 1 },
  { label: 'AgroBrasília', span: 2 },
  { label: 'Comunidade', span: 1 },
  { label: '19H', span: 1 },
] as const

export default function Momentos() {
  return (
    <section className="section momentos grain" id="momentos">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">{momentos.eyebrow}</span>
          <h2 className="display">{momentos.title}</h2>
          <p className="lead">{momentos.intro}</p>
        </div>

        <div className="momentos__mosaic">
          {tiles.map((tile, i) => (
            <figure
              key={tile.label}
              className="momentos__tile reveal"
              style={
                {
                  '--tile-span': tile.span,
                  '--reveal-delay': `${i * 80}ms`,
                } as React.CSSProperties
              }
            >
              <span className="momentos__watermark" aria-hidden="true">
                <KingMark title="" />
              </span>
              <figcaption className="momentos__label">{tile.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="momentos__cta reveal" style={{ '--reveal-delay': '240ms' } as React.CSSProperties}>
          <a
            className="btn btn--ghost"
            href={momentos.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} strokeWidth={1.8} />
            {momentos.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
