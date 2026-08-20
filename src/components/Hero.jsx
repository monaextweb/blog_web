import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buildWhatsAppLink, whatsappMessages } from '../data/business'
import PlaceholderImage from './PlaceholderImage'

function HeroSlider({ images, imageAlt }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero({
  eyebrow = 'Mona Hair Extension & Nail Art Studio and Academy',
  title = 'Where Beauty Meets Artistry',
  description = 'Premium hair extension, nail art, hair treatment and women’s hair styling services, along with professional beauty training.',
  imageSrc,
  images,
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
          {images && images.length > 0 ? (
            <HeroSlider images={images} imageAlt={imageAlt} />
          ) : (
            <PlaceholderImage
              src={imageSrc}
              alt={imageAlt}
              label="[HERO_IMAGE] — replace with premium hair, nail & academy photography"
              icon="Sparkles"
              className="w-full aspect-[4/5] md:aspect-[3/4] rounded-lg"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
