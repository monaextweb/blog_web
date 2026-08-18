import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'
import PlaceholderImage from './PlaceholderImage'

export default function Hero({
  eyebrow = 'Mona Hair Extension & Nail Art Studio and Academy',
  title = 'Where Beauty Meets Artistry',
  description = 'Premium hair extension, nail art, hair treatment and women’s hair styling services, along with professional beauty training.',
  imageSrc,
  imageAlt = 'Mona Hair Extension & Nail Art Studio and Academy',
  primaryCta = { label: 'Enquire on WhatsApp', message: whatsappMessages.general },
  secondaryCta = { label: 'Explore Academy', to: '/academy' },
  compact = false,
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className={`container-px mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
          compact ? 'py-16 md:py-20' : 'py-16 md:py-28'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <span className="section-label">{eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-heading font-medium leading-[1.1]">
            {title}
          </h1>
          <div className="divider-accent" />
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-md">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={buildWhatsAppLink(primaryCta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} />
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn-secondary">
                {secondaryCta.label}
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-1 md:order-2"
        >
          <PlaceholderImage
            src={imageSrc}
            alt={imageAlt}
            label="[HERO_IMAGE] — replace with premium hair, nail & academy photography"
            icon="Sparkles"
            className="w-full aspect-[4/5] md:aspect-[3/4] rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
