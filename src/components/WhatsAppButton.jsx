import { buildWhatsAppLink, whatsappMessages } from '../data/business'

// Mandatory floating Book Now button, fixed bottom-right, visible site-wide.
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(whatsappMessages.consultation)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Now"
      className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center justify-center px-6 h-14 md:h-16 rounded-full bg-black text-white shadow-lg hover:bg-rosegold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span className="absolute inset-0 rounded-full bg-black/40 motion-safe:animate-ping motion-reduce:hidden" />
      <span className="relative font-medium tracking-wide transition-transform duration-300 group-hover:scale-105">
        Book Now
      </span>
    </a>
  )
}
