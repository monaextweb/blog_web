import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'

// Mandatory floating WhatsApp button, fixed bottom-right, visible site-wide.
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white shadow-lg hover:bg-accent-dark transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span className="absolute inset-0 rounded-full bg-black/40 motion-safe:animate-ping motion-reduce:hidden" />
      <MessageCircle
        size={28}
        strokeWidth={1.75}
        className="relative transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  )
}
