import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight">
        {title}
      </h2>
      <div className={`divider-accent ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && (
        <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
