import { Youtube, Play } from 'lucide-react'
import { featured, ytThumb } from '../../data/content'
import './Featured.css'

/**
 * Featured — the spotlight episode: an editorial text column paired with a
 * large clickable thumbnail card that lifts on hover, framed by a thin gold
 * ring and capped by a copper play button.
 */
export default function Featured() {
  return (
    <section className="section featured" id="destaque">
      <div className="container featured__grid">
        <div className="featured__text reveal">
          <span className="eyebrow">{featured.eyebrow}</span>
          <h2 className="display featured__title">{featured.title}</h2>
          <p className="lead featured__body">{featured.body}</p>

          <a
            className="btn btn--gold btn--lg featured__cta"
            href={featured.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={16} strokeWidth={1.8} />
            {featured.cta.label}
          </a>
        </div>

        <a
          className="featured__media reveal"
          href={featured.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={featured.cta.label}
          style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
        >
          <img
            className="featured__thumb"
            src={ytThumb(featured.videoId, 'maxres')}
            onError={(e) => {
              e.currentTarget.src = ytThumb(featured.videoId, 'hq')
            }}
            alt={featured.title}
            loading="lazy"
          />
          <span className="featured__overlay" aria-hidden="true" />
          <span className="featured__play" aria-hidden="true">
            <Play size={26} strokeWidth={1.6} />
          </span>
        </a>
      </div>
    </section>
  )
}
