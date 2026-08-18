import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, MessageCircle } from 'lucide-react'
import { navLinks, business, buildWhatsAppLink, whatsappMessages } from '../data/business'

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-[82%] max-w-sm bg-white z-50 md:hidden flex flex-col shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <span className="font-heading text-lg">{business.shortName}</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2 text-black hover:text-accent-dark transition-colors"
              >
                <X size={26} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `py-4 text-xl font-heading border-b border-neutral-100 flex items-center justify-between transition-colors ${
                      isActive ? 'text-accent-dark' : 'text-black'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto px-6 py-8 flex flex-col gap-4">
              <a
                href={buildWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
                onClick={onClose}
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-accent-dark transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />@{business.instagramHandle}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
