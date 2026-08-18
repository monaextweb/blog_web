import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import PageSEO from '../components/PageSEO'
import { whatsappMessages, business } from '../data/business'

export default function Contact() {
  return (
    <>
      <PageSEO
        title="Contact Us | Mona Hair Extension & Nail Art Studio and Academy"
        description="Get in touch with Mona Hair Extension & Nail Art Studio and Academy via WhatsApp, phone or email."
      />

      <Hero
        eyebrow="Get In Touch"
        title="Let's Start the Conversation"
        description={`Reach out to ${business.name} for enquiries about services, courses or availability.`}
        primaryCta={{ label: 'Enquire on WhatsApp', message: whatsappMessages.general }}
        secondaryCta={null}
        imageSrc="/images/hero/stylist-cutting-hair.webp"
        imageAlt="Stylist at work at Mona Hair Extension & Nail Art Studio and Academy"
        compact
      />

      <ContactSection showMap />
    </>
  )
}
