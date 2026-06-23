import './Avatar.css'

/** Monogram avatar — serif initials on a pine disc with a gold ring. */
export default function Avatar({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <span className={`avatar ${className ?? ''}`} aria-hidden="true">
      <span className="avatar__initials">{initials}</span>
    </span>
  )
}
