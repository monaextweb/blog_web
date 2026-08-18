import { motion } from 'framer-motion'
import { getIcon } from '../lib/icons'
import PlaceholderImage from './PlaceholderImage'
import WhatsAppCTAButton from './WhatsAppCTAButton'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = getIcon(service.icon)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group flex flex-col bg-white border border-neutral-100 hover:border-accent/40 transition-colors duration-300 rounded-lg overflow-hidden"
    >
      <PlaceholderImage
        src={service.image}
        alt={service.name}
        label={service.name}
        icon={service.icon}
        className="w-full aspect-[4/3] overflow-hidden"
        imgClassName="w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-col gap-3 p-6 md:p-7">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-light/25 text-accent-dark">
          <Icon size={20} strokeWidth={1.5} />
        </span>
        <h3 className="text-xl font-heading">{service.name}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
        <WhatsAppCTAButton
          message={service.whatsappMessage}
          label="Enquire on WhatsApp"
          variant="secondary"
          className="mt-2 self-start !py-2.5 !px-5 text-sm"
        />
      </div>
    </motion.div>
  )
}
