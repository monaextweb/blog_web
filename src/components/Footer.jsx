import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone } from 'lucide-react'
import { business, navLinks } from '../data/business'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="container-px mx-auto py-14 md:py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4 md:col-span-2">
          <span className="font-heading text-xl">{business.name}</span>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
            Premium hair extension, nail art, hair treatment and women’s hair styling services,
            along with professional beauty academy training.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-widest2 text-neutral-400 mb-1">
            Quick Links
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-neutral-600 hover:text-accent-dark transition-colors w-fit"
            >
              {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-widest2 text-neutral-400 mb-1">
            Contact
          </span>
          <a
            href={`tel:+${business.whatsappNumber}`}
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-accent-dark transition-colors w-fit"
          >
            <Phone size={15} strokeWidth={1.5} />
            {business.phoneDisplay}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-accent-dark transition-colors w-fit break-all"
          >
            <Mail size={15} strokeWidth={1.5} />
            {business.email}
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-accent-dark transition-colors w-fit"
          >
            <Instagram size={15} strokeWidth={1.5} />@{business.instagramHandle}
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-100">
        <div className="container-px mx-auto py-6 text-center text-xs text-neutral-400">
          © 2026 {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
