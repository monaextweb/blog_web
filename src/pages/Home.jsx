import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import InstagramCTA from '../components/InstagramCTA'
import ContactSection from '../components/ContactSection'
import Gallery from '../components/Gallery'
import PageSEO from '../components/PageSEO'
import PlaceholderImage from '../components/PlaceholderImage'
import WhatsAppCTAButton from '../components/WhatsAppCTAButton'
import { services, whyChooseMona, whatsappMessages } from '../data/business'
import { getIcon } from '../lib/icons'

function ServiceHighlight({ service, reverse = false }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <PlaceholderImage
          src={service.image}
          alt={service.name}
          label={service.name}
          icon={service.icon}
          className="w-full aspect-[4/3] rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col gap-4"
      >
        <span className="section-label">Signature Service</span>
        <h3 className="text-3xl md:text-4xl font-heading font-medium">{service.name}</h3>
        <div className="divider-accent" />
        <p className="text-neutral-600 leading-relaxed max-w-md">{service.description}</p>
        <WhatsAppCTAButton
          message={service.whatsappMessage}
          label="Enquire on WhatsApp"
          variant="primary"
          className="mt-2 self-start"
        />
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <PageSEO
        title="Mona Hair Extension & Nail Art Studio and Academy"
        description="Premium hair extension, nail art, hair treatment and women's hair styling services, plus a professional beauty academy at Mona Hair Extension & Nail Art Studio and Academy."
      />

      <Hero
        imageSrc="/images/hero/model-holding-hair-weft.webp"
        imageAlt="Model holding a hair weft at Mona Hair Extension & Nail Art Studio and Academy"
      />

      {/* Introduction */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading
            label="Welcome to Mona"
            title="A Studio Built on Craft, Care and Confidence"
            description="Mona Hair Extension & Nail Art Studio and Academy brings together premium beauty services and professional training under one roof — for clients who want to look their best, and for students who want to build a real career in beauty."
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading label="What We Offer" title="Our Services" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-24 flex flex-col gap-20 md:gap-28">
          {services.map((service, i) => (
            <ServiceHighlight key={service.id} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Academy Introduction */}
      <section className="bg-black text-white">
        <div className="container-px mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest2 text-accent-light font-medium">
              Mona Academy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-medium leading-tight">
              Learn. Create. Master.
            </h2>
            <div className="w-16 h-[2px] bg-accent" />
            <p className="text-neutral-300 leading-relaxed max-w-md">
              Build professional beauty skills with practical training at Mona Hair Extension
              & Nail Art Studio and Academy.
            </p>
            <Link to="/academy" className="btn bg-white text-black hover:bg-rosegold hover:text-white mt-2 self-start">
              Explore Academy
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage
              src="/images/extension-types/butterfly.webp"
              alt="Hair extension technique training at Mona Academy"
              label="Academy training"
              icon="GraduationCap"
              className="w-full aspect-[4/3] rounded-lg bg-neutral-900 border-neutral-800"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Mona */}
      <section className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading label="Our Promise" title="Why Choose Mona?" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseMona.map((item, i) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg border border-neutral-100"
                >
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-light/25 text-accent-dark shrink-0">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <p className="text-neutral-700 leading-relaxed pt-2">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading
            label="Our Work"
            title="Gallery"
            description="A glimpse into our hair, nail and academy work."
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      <InstagramCTA />

      <CTASection
        label="Ready When You Are"
        title="Let's Talk About What You're Looking For"
        description="Message us on WhatsApp for enquiries about services, courses or availability."
        message={whatsappMessages.general}
        buttonLabel="Enquire on WhatsApp"
      />

      <ContactSection />
    </>
  )
}
