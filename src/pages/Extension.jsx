import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Check, X as XIcon } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PageSEO from '../components/PageSEO'
import PlaceholderImage from '../components/PlaceholderImage'
import WhatsAppCTAButton from '../components/WhatsAppCTAButton'
import {
  extensionTypes,
  hairTypes,
  hairQuality,
  hairLengths,
  whatsappMessages,
  whyChooseMona,
  extensionTypeWhatsAppMessage,
} from '../data/business'

const faqs = [
  {
    q: 'How long does a hair extension appointment take?',
    a: 'Appointment duration depends on the technique and your hair — anywhere from 30 minutes for clip-ins to several hours for strand-by-strand methods. Message us on WhatsApp and we’ll guide you.',
  },
  {
    q: 'Which extension type is right for me?',
    a: 'This depends on your hair goals, hair type and lifestyle. Browse the techniques above or message our team for a personalised recommendation.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'Simply tap any "Enquire on WhatsApp" button on this page and our team will assist you.',
  },
]

function ExtensionTypeCard({ type, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="bg-white border border-neutral-100 hover:border-accent/40 transition-colors duration-300 rounded-lg overflow-hidden flex flex-col"
    >
      <PlaceholderImage
        src={type.image}
        alt={type.name}
        label={type.name}
        icon="Sparkles"
        className="w-full aspect-[4/3]"
      />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-heading leading-snug">{type.name}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed">{type.summary}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center gap-1.5 text-xs uppercase tracking-widest2 text-accent-dark font-medium mt-1 self-start"
        >
          {open ? 'Hide Details' : 'View Details'}
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-4 pt-3 border-t border-neutral-100 mt-1">
            <p className="text-sm text-neutral-600 leading-relaxed">{type.description}</p>

            <div>
              <span className="text-xs uppercase tracking-widest2 text-neutral-400">Duration</span>
              <p className="text-sm text-neutral-700 mt-1">{type.duration}</p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest2 text-neutral-400">Advantages</span>
              <ul className="mt-2 flex flex-col gap-1.5">
                {type.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check size={15} className="text-accent-dark mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest2 text-neutral-400">Consider</span>
              <ul className="mt-2 flex flex-col gap-1.5">
                {type.disadvantages.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-neutral-500">
                    <XIcon size={15} className="text-neutral-400 mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest2 text-neutral-400">Best For</span>
              <p className="text-sm text-neutral-700 mt-1">{type.bestFor}</p>
            </div>
          </div>
        </motion.div>

        <WhatsAppCTAButton
          message={extensionTypeWhatsAppMessage(type.name)}
          label="Enquire on WhatsApp"
          variant="secondary"
          className="mt-auto self-start !py-2.5 !px-5 text-sm"
        />
      </div>
    </motion.div>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-medium text-base md:text-lg">{item.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-accent-dark transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-neutral-600 leading-relaxed">{item.a}</p>
      </motion.div>
    </div>
  )
}

export default function Extension() {
  return (
    <>
      <PageSEO
        title="Hair Extension Types & Services | Mona Hair Extension & Nail Art Studio and Academy"
        description="Explore 12 professional hair extension techniques at Mona Hair Extension & Nail Art Studio and Academy — Tape-In, Clip-In, Weft, Micro Ring, Hot Fusion, Nano Ring, Ice Gel, UV Light, Butterfly and 6D/10D extensions, plus hair type and hair quality guidance."
      />

      <Hero
        eyebrow="Hair Extension Services"
        title="Hair That Moves With You"
        description="Professional hair extension services designed to enhance length, volume and overall appearance."
        primaryCta={{ label: 'Enquire on WhatsApp', message: whatsappMessages.hairExtension }}
        secondaryCta={{ label: 'Explore Academy', to: '/academy' }}
        imageSrc="/images/hero/model-holding-hair-weft.webp"
        imageAlt="Hair extension bundle held up at Mona Hair Extension & Nail Art Studio and Academy"
        compact
      />

      {/* Introduction */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading
            label="About Our Extensions"
            title="Crafted for a Natural, Beautiful Finish"
            description="Our hair extension services are designed to enhance length, volume and overall appearance, with a focus on a natural, blended result tailored to your hair type and goals."
          />
        </div>
      </section>

      {/* Hair Types */}
      <section className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading label="Know Your Hair" title="Common Types of Hair" />
          <div className="mt-12 grid sm:grid-cols-3 gap-6 md:gap-8">
            {hairTypes.map((type, i) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-neutral-100 rounded-lg overflow-hidden"
              >
                <PlaceholderImage
                  src={type.image}
                  alt={type.name}
                  label={type.name}
                  icon="Sparkles"
                  className="w-full aspect-[3/4]"
                />
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-lg font-heading">{type.name}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{type.description}</p>
                  <p className="text-xs uppercase tracking-widest2 text-accent-dark mt-1">
                    Best for: {type.bestFor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Quality: Human vs Synthetic, Remy vs Non-Remy */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading
            label="Quality Matters"
            title="The Hair Behind Your Extensions"
            description="Understanding what your extensions are made of helps you choose the right option."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <PlaceholderImage
                src={hairQuality.image}
                alt="Human hair compared to synthetic hair"
                label="Human Hair vs Synthetic Hair"
                icon="Sparkles"
                className="w-full aspect-[3/2] rounded-lg"
              />
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {hairQuality.origin.map((group) => (
                <div key={group.name} className="flex flex-col gap-2">
                  <h3 className="text-base font-heading">{group.name}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {group.points.map((p) => (
                      <li key={p} className="text-sm text-neutral-600 leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {hairQuality.remyGrade.map((group) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-50 border border-neutral-100 rounded-lg p-6 flex flex-col gap-2"
              >
                <h3 className="text-base font-heading">{group.name}</h3>
                <ul className="flex flex-col gap-1.5">
                  {group.points.map((p) => (
                    <li key={p} className="text-sm text-neutral-600 leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Lengths */}
      <section className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading label="Choosing a Length" title="Hair Lengths for Extensions" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hairLengths.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white border border-neutral-100 rounded-lg p-6 flex flex-col gap-2"
              >
                <h3 className="text-base font-heading">{l.name}</h3>
                <p className="text-sm text-accent-dark">{l.length}</p>
                <p className="text-sm text-neutral-600 leading-relaxed mt-1">{l.bestFor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section id="techniques" className="bg-white">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading
            label="12 Professional Techniques"
            title="Hair Extension Types We Offer"
            description="Every technique below is taught and applied at Mona — tap a card to see how it's applied, how long it lasts, and what to consider."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {extensionTypes.map((type, i) => (
              <ExtensionTypeCard key={type.id} type={type} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mona */}
      <section className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading label="Our Promise" title="Why Choose Mona?" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseMona.slice(0, 3).map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 bg-white p-6 rounded-lg border border-neutral-100"
              >
                <p className="text-neutral-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-20 max-w-2xl">
          <SectionHeading label="Questions" title="Frequently Asked Questions" />
          <div className="mt-10">
            {faqs.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Book a Consultation"
        title="Ready for Your Hair Transformation?"
        description="Chat with us on WhatsApp to discuss the best hair extension option for you."
        message={whatsappMessages.hairExtension}
        buttonLabel="Enquire on WhatsApp"
      />
    </>
  )
}
