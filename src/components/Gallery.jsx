import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryCategories, placeholderImages } from '../data/business'
import PlaceholderImage from './PlaceholderImage'

const categoryImageMap = {
  'hair-extensions': placeholderImages.gallery.hairExtensions,
  'nail-art': placeholderImages.gallery.nailArt,
  'hair-treatment': placeholderImages.gallery.hairTreatment,
  'hair-styling': placeholderImages.gallery.hairStyling,
  academy: placeholderImages.gallery.academy,
  'student-work': placeholderImages.gallery.studentWork,
}

function buildItems() {
  const items = []
  galleryCategories.forEach((cat) => {
    const images = categoryImageMap[cat.id] || []
    images.forEach((src, i) => {
      items.push({
        id: `${cat.id}-${i}`,
        category: cat.id,
        categoryLabel: cat.label,
        src,
      })
    })
  })
  return items
}

export default function Gallery() {
  const allItems = useMemo(buildItems, [])
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? allItems
        : allItems.filter((item) => item.category === activeCategory),
    [allItems, activeCategory],
  )

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 text-xs md:text-sm uppercase tracking-wide rounded-full border transition-colors ${
            activeCategory === 'all'
              ? 'bg-black text-white border-black'
              : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
          }`}
        >
          All
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs md:text-sm uppercase tracking-wide rounded-full border transition-colors ${
              activeCategory === cat.id
                ? 'bg-black text-white border-black'
                : 'border-neutral-300 text-neutral-600 hover:border-black hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((item, idx) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
            onClick={() => openLightbox(idx)}
            className="mb-4 w-full block break-inside-avoid group relative overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`View ${item.categoryLabel} image ${idx + 1}`}
          >
            <PlaceholderImage
              src={item.src}
              alt={`${item.categoryLabel} — Mona Hair Extension & Nail Art Studio and Academy`}
              label={item.categoryLabel}
              className="w-full aspect-[4/5]"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close preview"
              className="absolute top-5 right-5 text-white hover:text-accent-light transition-colors"
            >
              <X size={30} strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 text-white hover:text-accent-light transition-colors"
            >
              <ChevronLeft size={36} strokeWidth={1.25} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 text-white hover:text-accent-light transition-colors"
            >
              <ChevronRight size={36} strokeWidth={1.25} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <PlaceholderImage
                src={filtered[lightboxIndex].src}
                alt={`${filtered[lightboxIndex].categoryLabel} — Mona Hair Extension & Nail Art Studio and Academy`}
                label={filtered[lightboxIndex].categoryLabel}
                className="w-full aspect-[4/5] md:aspect-[16/10] rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
