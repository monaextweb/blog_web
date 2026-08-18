import { useState } from 'react'
import { getIcon } from '../lib/icons'

// Renders a real <img> when a resolved src is available, otherwise falls
// back to an elegant placeholder block. Swap real photography into
// src/data/business.js (or /public/images/...) and this automatically
// starts rendering actual images — no component changes needed.
export default function PlaceholderImage({
  src,
  alt,
  label,
  icon = 'ImageIcon',
  className = '',
  imgClassName = '',
}) {
  const [failed, setFailed] = useState(false)
  const isPlaceholderPath = !src || src.includes('[')
  const Icon = getIcon(icon)

  if (isPlaceholderPath || failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-100 via-neutral-50 to-accent-light/20 text-neutral-400 overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 border border-neutral-200" />
        <Icon size={28} strokeWidth={1.25} className="text-accent/70" />
        {label && (
          <span className="text-[11px] uppercase tracking-widest2 text-neutral-400 text-center px-4">
            {label}
          </span>
        )}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName} object-cover`}
    />
  )
}
