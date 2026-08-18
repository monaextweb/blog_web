import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../data/business'

// Reusable inline WhatsApp CTA button used throughout the site.
// Pass `message` to control the pre-filled WhatsApp text per context.
export default function WhatsAppCTAButton({
  message,
  label = 'Enquire on WhatsApp',
  variant = 'primary',
  className = '',
}) {
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-accent'

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${className}`}
    >
      <MessageCircle size={18} strokeWidth={1.75} />
      {label}
    </a>
  )
}
