import { motion } from 'framer-motion'
import { Check, Clock, Award } from 'lucide-react'
import PlaceholderImage from './PlaceholderImage'
import WhatsAppCTAButton from './WhatsAppCTAButton'
import { whatsappMessages, buildWhatsAppLink } from '../data/business'

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col bg-white border border-neutral-100 hover:border-accent/40 transition-colors duration-300 rounded-lg overflow-hidden"
    >
      <PlaceholderImage
        src={course.image}
        alt={course.name}
        label={course.name}
        icon="GraduationCap"
        className="w-full aspect-[16/10]"
      />
      <div className="flex flex-col gap-4 p-6 md:p-7 flex-1">
        <h3 className="text-xl md:text-2xl font-heading leading-snug">{course.name}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{course.description}</p>

        <ul className="flex flex-col gap-2 text-sm text-neutral-700">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <Check size={16} className="text-accent-dark mt-0.5 shrink-0" strokeWidth={2} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 text-sm text-neutral-600 border-t border-neutral-100 pt-4 mt-1">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-accent-dark shrink-0" strokeWidth={1.75} />
            Duration: <span className="text-neutral-500">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-accent-dark shrink-0" strokeWidth={1.75} />
            Certification: <span className="text-neutral-500">{course.certification}</span>
          </div>
        </div>

        <WhatsAppCTAButton
          message={whatsappMessages.academy}
          label="Enquire on WhatsApp"
          variant="primary"
          className="mt-auto"
        />
      </div>
    </motion.div>
  )
}
