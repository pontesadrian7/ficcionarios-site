import { Play, Youtube } from 'lucide-react'
import { acervo, ytThumb, ytWatch } from '../../data/content'
import './Acervo.css'

/**
 * Acervo — the back-catalogue. A cream section pairing an editorial header with
 * the YouTube subscribe CTA, over a tidy grid of episode cards: 16:9 thumbnail
 * with a copper play overlay and an "EP 0N" chip, then serif title + summary.
 */
export default function Acervo() {
  return (
    <section className="section section--cream acervo" id="episodios">
      <div className="container">
        <div className="acervo__head reveal">
          <div className="acervo__head-text">
            <span className="eyebrow">{acervo.eyebrow}</span>
            <h2 className="display acervo__title">{acervo.title}</h2>
            <p className="lead">{acervo.intro}</p>
          </div>

          <a
            className="btn btn--gold acervo__cta"
            href={acervo.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={16} strokeWidth={1.8} />
            {acervo.cta.label}
          </a>
        </div>

        <div className="acervo__grid">
          {acervo.episodes.map((ep, i) => (
            <a
              key={ep.videoId}
              className="acervo__card reveal"
              href={ytWatch(ep.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="acervo__thumb">
                <img
                  src={ytThumb(ep.videoId, 'maxres')}
                  onError={(e) => {
                    e.currentTarget.src = ytThumb(ep.videoId, 'hq')
                  }}
                  alt={ep.title}
                  loading="lazy"
                />
                <span className="chip acervo__ep">
                  EP {String(ep.n).padStart(2, '0')}
                </span>
                <span className="acervo__play" aria-hidden="true">
                  <Play size={20} strokeWidth={1.6} />
                </span>
              </div>

              <div className="acervo__body">
                <h3 className="acervo__card-title">{ep.title}</h3>
                <p className="acervo__desc">{ep.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
