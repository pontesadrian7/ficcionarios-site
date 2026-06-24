import { Youtube, ArrowUpRight, ChevronDown } from 'lucide-react'
import DecoFrame from '../ui/DecoFrame'
import { hero } from '../../data/content'
import './Hero.css'

/**
 * Hero — a centered editorial panel inside the brand's deco frame, over a photo
 * of the Ficcionarios studio with a deep-green wash for legibility.
 */
export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__bg" src="/hero-studio.jpg" alt="" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__container">
        <DecoFrame className="hero__frame reveal">
          <span className="eyebrow eyebrow--center hero__eyebrow">{hero.eyebrow}</span>

          <h1 className="hero__title">
            <span className="hero__title-lead">{hero.headlineLead}</span>
            <span className="hero__title-accent">{hero.headlineAccent}</span>
          </h1>

          <p className="hero__body">{hero.body}</p>

          <div className="hero__actions">
            <a
              className="btn btn--gold btn--lg"
              href={hero.primary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={16} strokeWidth={1.8} />
              {hero.primary.label}
            </a>
            <a className="btn btn--ghost btn--lg" href={hero.secondary.href}>
              {hero.secondary.label}
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </DecoFrame>

        <a href="#sobre" className="hero__scroll" aria-label="Rolar para baixo">
          <span>Arraste para baixo</span>
          <ChevronDown size={18} strokeWidth={1.6} />
        </a>
      </div>
    </section>
  )
}
