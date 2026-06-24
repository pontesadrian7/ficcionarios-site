import type { ReactNode } from 'react'
import './DecoFrame.css'

/**
 * Editorial double-line border — the brand's clean framing device. Wraps any content.
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
      <div className="deco-frame__inner">{children}</div>
    </div>
  )
}
