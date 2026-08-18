import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import { business, buildWhatsAppLink, whatsappMessages } from '../data/business'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'

const contactItems = [
  { icon: Phone, label: 'Phone', value: business.phoneDisplay, href: `tel:+${business.whatsappNumber}` },
  { icon: MessageCircle, label: 'WhatsApp', value: business.phoneDisplay, href: buildWhatsAppLink(whatsappMessages.general) },
  { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: MapPin, label: 'Address', value: business.address, href: business.googleMapsLink.startsWith('http') ? business.googleMapsLink : undefined },
  { icon: Clock, label: 'Opening Hours', value: business.openingHours },
  { icon: Instagram, label: 'Instagram', value: `@${business.instagramHandle}`, href: business.instagramUrl },
]

const isResolved = (value) => Boolean(value) && !value.includes('[')

export default function ContactSection({ showForm = true, showMap = false }) {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`

  return (
    <section id="contact" className="bg-white">
      <div className="container-px mx-auto py-16 md:py-24">
        <SectionHeading
          label="Get In Touch"
          title="Contact Us"
          description="We’d love to hear from you. Reach out on WhatsApp for the fastest response."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-light/25 text-accent-dark shrink-0">
                    <Icon size={19} strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest2 text-neutral-400">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-black hover:text-accent-dark transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-neutral-700">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={buildWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                Chat With Us on WhatsApp
              </a>
              <a href={`tel:+${business.whatsappNumber}`} className="btn-secondary">
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </motion.div>

          {showForm && <ContactForm />}
        </div>

        {showMap && isResolved(business.address) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >
            <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden border border-neutral-100">
              <iframe
                src={mapEmbedSrc}
                title={`${business.name} location on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
