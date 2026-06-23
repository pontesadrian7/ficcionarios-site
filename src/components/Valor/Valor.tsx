import { Youtube, ArrowUpRight } from 'lucide-react'
import DecoFrame from '../ui/DecoFrame'
import { valor } from '../../data/content'
import './Valor.css'

/**
 * Valor — a mid-page call to action: a single centered deco-frame panel
 * floating over the darkest pine field, lit by a soft copper glow.
 * Mirrors the Hero frame treatment for visual continuity.
 */
export default function Valor() {
  return (
    <section className="section valor grain" id="valor">
      <div className="container valor__container">
        <DecoFrame className="valor__frame reveal">
          <span className="eyebrow eyebrow--center valor__eyebrow">{valor.eyebrow}</span>

          <h2 className="display valor__title">{valor.title}</h2>

          <p className="lead valor__body">{valor.body}</p>

          <div className="valor__actions">
            <a
              className="btn btn--gold btn--lg"
              href={valor.primary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={16} strokeWidth={1.8} />
              {valor.primary.label}
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href={valor.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {valor.secondary.label}
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </DecoFrame>
      </div>
    </section>
  )
}
