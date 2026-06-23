import type { ReactNode } from 'react'
import Corner from './Corner'
import './DecoFrame.css'

/**
 * Editorial double-line border with an art-deco sunburst ornament in each
 * corner — the signature framing device of the brand. Wraps any content.
 */
export default function DecoFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`deco-frame ${className ?? ''}`}>
      <Corner className="deco-frame__corner deco-frame__corner--tl" />
      <Corner className="deco-frame__corner deco-frame__corner--tr" />
      <Corner className="deco-frame__corner deco-frame__corner--bl" />
      <Corner className="deco-frame__corner deco-frame__corner--br" />
      <div className="deco-frame__inner">{children}</div>
    </div>
  )
}
