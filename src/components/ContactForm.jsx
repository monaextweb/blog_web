import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { business } from '../data/business'

// No backend exists for this site (by design — see prom.md).
// This form does NOT fake a "message sent" confirmation. It opens a
// pre-filled Gmail compose window so a real message is actually delivered
// (Mona's contact address is a Gmail account, so this is used instead of a
// plain mailto: link, which would open whichever mail app is set as the
// visitor's OS default — e.g. Outlook — rather than Gmail).
//
// To connect a real submission service instead (e.g. Formspree, Web3Forms):
// 1. Set FORM_ENDPOINT below to your form-service endpoint URL.
// 2. Replace handleSubmit's Gmail-compose logic with a fetch() POST to FORM_ENDPOINT.
const FORM_ENDPOINT = '' // e.g. 'https://formspree.io/f/xxxxxxx'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (FORM_ENDPOINT) {
      // Wire a real POST request here once FORM_ENDPOINT is configured.
      return
    }

    const subject = encodeURIComponent(`Website enquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(business.email)}&su=${subject}&body=${body}`
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full px-4 py-3 border border-neutral-300 rounded-md bg-white text-black placeholder:text-neutral-400 focus:border-accent-dark focus:outline-none transition-colors text-sm'

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-neutral-50 border border-neutral-100 rounded-lg p-6 md:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-neutral-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs uppercase tracking-widest2 text-neutral-500">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs uppercase tracking-widest2 text-neutral-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-neutral-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us what you're looking for..."
        />
      </div>

      <button type="submit" className="btn-primary self-start mt-2">
        <Send size={17} />
        Send Message
      </button>
      <p className="text-xs text-neutral-400 leading-relaxed">
        This opens Gmail in a new tab with the message pre-filled. For a faster reply, use WhatsApp above.
      </p>
    </motion.form>
  )
}
