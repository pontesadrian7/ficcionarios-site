import KingMark from '../ui/KingMark'
import { sobre } from '../../data/content'
import './Sobre.css'

/**
 * Sobre — the manifesto. An editorial headline assembled line-by-line (gold
 * italic on accented words), a script accent + lead paragraph, a 4-up grid of
 * pillar cards, and a hairline-bounded stats strip. Lives on the dark pine body.
 */
export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container">
        <div className="section-head sobre__head reveal">
          <span className="eyebrow">{sobre.eyebrow}</span>

          <h2 className="display sobre__title">
            {sobre.lines.map((line, i) => (
              <span className="sobre__line" key={i}>
                {line.accent ? <em>{line.text}</em> : line.text}{' '}
              </span>
            ))}
          </h2>

          <p className="script sobre__script">{sobre.scriptLine}</p>
          <p className="lead sobre__lead">{sobre.paragraph}</p>
        </div>

        <ul className="sobre__pillars">
          {sobre.pillars.map((pillar, i) => (
            <li
              className="sobre__pillar reveal"
              key={pillar.title}
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="sobre__pillar-top">
                <span className="gold-text sobre__index">{String(i + 1).padStart(2, '0')}</span>
                <KingMark className="sobre__pillar-mark" title="" />
              </div>
              <h3 className="sobre__pillar-title">{pillar.title}</h3>
              <p className="sobre__pillar-text">{pillar.text}</p>
            </li>
          ))}
        </ul>

        <div className="rule sobre__rule" />
        <dl className="sobre__stats reveal">
          {sobre.stats.map((stat) => (
            <div className="sobre__stat" key={stat.label}>
              <dt className="gold-text sobre__stat-value">{stat.value}</dt>
              <dd className="sobre__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
        <div className="rule sobre__rule" />
      </div>
    </section>
  )
}
