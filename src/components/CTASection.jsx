import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../data/business'

// Full-width dark CTA banner — used to drive the primary WhatsApp conversion
// goal at key points in the user journey.
export default function CTASection({
  label = 'Get In Touch',
  title,
  description,
  message,
  buttonLabel = 'Enquire on WhatsApp',
}) {
  return (
    <section className="bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-px mx-auto py-16 md:py-20 flex flex-col items-center text-center gap-5"
      >
        {label && (
          <span className="text-xs md:text-sm uppercase tracking-widest2 text-accent-light font-medium">
            {label}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-heading font-medium max-w-xl leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-neutral-300 max-w-lg leading-relaxed">{description}</p>
        )}
        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-black hover:bg-rosegold hover:text-white mt-2"
        >
          <MessageCircle size={18} />
          {buttonLabel}
        </a>
      </motion.div>
    </section>
  )
}
