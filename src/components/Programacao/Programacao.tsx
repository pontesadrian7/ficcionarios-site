import { programacao } from '../../data/content'
import './Programacao.css'

/**
 * Programação — the Agrishow 2026 special, framed as a cream poster with a
 * grid of editorial guest cards: a full-bleed portrait, a cream airtime badge,
 * and a pine gradient holding the guest's name + role.
 */
export default function Programacao() {
  return (
    <section className="section section--cream prog" id="programacao">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow eyebrow--center">{programacao.eyebrow}</span>
          <h2 className="display prog__title">{programacao.title}</h2>
          <p className="lead">{programacao.intro}</p>
        </div>

        <div className="prog__grid">
          {programacao.items.map((g, i) => (
            <article
              className="prog__card reveal"
              key={g.name}
              style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
            >
              <img className="prog__photo" src={g.photo} alt={g.name} loading="lazy" />
              <span className="badge-time prog__time">{programacao.time}</span>
              <div className="prog__overlay" aria-hidden="true" />
              <div className="prog__info">
                <h3 className="prog__name">{g.name}</h3>
                <p className="prog__role">{g.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
