import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { business } from '../data/business'

export default function InstagramCTA() {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-px mx-auto py-16 md:py-20 flex flex-col items-center text-center gap-5 border-t border-neutral-100"
      >
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light/25 text-accent-dark">
          <Instagram size={26} strokeWidth={1.5} />
        </span>
        <span className="section-label">Follow Our Work</span>
        <h2 className="text-3xl md:text-4xl font-heading font-medium max-w-lg leading-tight">
          Discover our latest hair transformations, nail art and academy work on Instagram.
        </h2>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-2"
        >
          <Instagram size={18} />
          Follow on Instagram
        </a>
        <span className="text-sm text-neutral-500">@{business.instagramHandle}</span>
      </motion.div>
    </section>
  )
}
