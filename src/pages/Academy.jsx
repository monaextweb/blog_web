import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import CTASection from '../components/CTASection'
import PageSEO from '../components/PageSEO'
import { business, courses, whatsappMessages, whyChooseMona } from '../data/business'
import { getIcon } from '../lib/icons'

export default function Academy() {
  return (
    <>
      <PageSEO
        title="Beauty Academy Courses | Mona Hair Extension & Nail Art Studio and Academy"
        description="Professional academy courses in hair extension, nail art and hair treatment at Mona Hair Extension & Nail Art Studio and Academy."
      />

      <Hero
        eyebrow="Mona Academy"
        title="Learn. Create. Master."
        description="Build professional beauty skills with practical training at Mona Hair Extension & Nail Art Studio and Academy."
        primaryCta={{ label: 'Enquire on WhatsApp', message: whatsappMessages.academy }}
        secondaryCta={{ label: 'View Courses', to: '/academy#courses' }}
        imageSrc="/images/hero/stylist-cutting-hair.webp"
        imageAlt="Hands-on hairstyling technique taught at Mona Academy"
        compact
      />

      {/* About the Academy */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-20">
          <SectionHeading
            label="About Mona Academy"
            title="A Professional Training Platform"
            description={business.academyAbout}
          />
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-neutral-50">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading
            label="Professional Training"
            title="Academy Courses"
            description="Practical, hands-on training designed to build real professional beauty skills."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Mona */}
      <section className="bg-white">
        <div className="container-px mx-auto py-16 md:py-24">
          <SectionHeading label="Our Promise" title="Why Train With Mona?" />
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
                  className="flex items-start gap-4 bg-neutral-50 p-6 rounded-lg border border-neutral-100"
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

      <CTASection
        label="Start Your Journey"
        title="Ready to Build Your Beauty Career?"
        description="Enquire about our academy courses on WhatsApp and our team will guide you through the next steps."
        message={whatsappMessages.academy}
        buttonLabel="Enquire About the Course"
      />
    </>
  )
}
