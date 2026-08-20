// ---------------------------------------------------------------------------
// CENTRAL BUSINESS CONFIGURATION
// Edit everything about the business (contact info, links, placeholders,
// course/service copy) from this single file.
// ---------------------------------------------------------------------------

export const business = {
  name: 'Mona Hair Extension & Nail Art Studio and Academy',
  shortName: 'Mona',
  tagline: 'Where Beauty Meets Artistry',
  heroSupportingText:
    'Premium hair extension, nail art, hair treatment and women’s hair styling services, along with professional beauty training.',

  // From Mona's own academy training material.
  academyAbout:
    'MONA Hair Extension Academy is a professional training platform dedicated to empowering individuals with advanced skills in hair extension techniques. We specialize in teaching a wide range of methods, including permanent and temporary hair extensions, using high-quality materials and modern tools. Our academy focuses on both theoretical knowledge and hands-on practical training to ensure students gain confidence and expertise in real-world salon environments.',

  email: 'Monahairextensions@gmail.com',
  phone: '7200466536',
  phoneDisplay: '+91 72004 66536',
  whatsappNumber: '917200466536', // country code 91 + number, digits only

  instagramHandle: 'mona_hairextension',
  instagramUrl:
    'https://www.instagram.com/mona_hairextension?igsh=NHhzbnJtMTZ4MWo0&utm_source=qr',

  address:
    'No.210/911, Natarajan Street, Camp Road Junction, Mahalakshmi Nagar, Selaiyur, Tambaram, Chennai, Tamil Nadu 600073',
  googleMapsLink: 'https://share.google/1vJ82vlMd7i5XRBHt',
  openingHours: '10 am -7:30 pm',

  // Not yet provided by the client — keep as clearly marked placeholder.
  facebookLink: '[FACEBOOK_LINK]',
}

// WhatsApp click-to-chat message templates — edit freely.
export const whatsappMessages = {
  general: `Hi ${business.name}, I would like to know more about your services.`,
  hairExtension: `Hi ${business.name}, I would like to enquire about your hair extension services.`,
  nailArt: `Hi ${business.name}, I would like to enquire about your nail art services.`,
  hairTreatment: `Hi ${business.name}, I would like to enquire about your hair treatment services.`,
  hairStyling: `Hi ${business.name}, I would like to enquire about your women's hair styling services.`,
  academy: `Hi ${business.name}, I would like to know more about the professional academy courses.`,
  consultation: `Hi ${business.name}, I would like to book a consultation.`,
}

export function buildWhatsAppLink(message = whatsappMessages.general) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`
}

export function extensionTypeWhatsAppMessage(typeName) {
  return `Hi ${business.name}, I would like to enquire about ${typeName}.`
}

export const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'EXTENSION', path: '/extension' },
  { label: 'ACADEMY', path: '/academy' },
  { label: 'CONTACT', path: '/contact' },
]

// Placeholder image paths — replace with real client photography.
// See README.md for exact folders/filenames to drop images into.
export const placeholderImages = {
  logo: '/logo.webp',
  hero: '/images/hero/hair-extension-application.webp',
  gallery: {
    hairExtensions: [
      '/images/extension-types/tape-in.webp',
      '/images/extension-types/weft.webp',
    ],
    nailArt: [
      '/images/gallery/nail-art-1.webp',
      '/images/gallery/nail-art-2.webp',
    ],
    hairTreatment: [
      '/images/gallery/hair-treatment-2.webp',
      '/images/gallery/hair-treatment-1.webp',
    ],
    hairStyling: [
      '/images/hair-types/straight-hair.webp',
      '/images/hair-types/wavy-hair.webp',
    ],
    academy: [
      '/images/extension-types/micro-ring.webp',
      '/images/extension-types/uv-light.webp',
    ],
    studentWork: [
      '/images/hair-types/curly-hair.webp',
      '/images/extension-types/feather.webp',
    ],
  },
}

export const services = [
  {
    id: 'hair-extension',
    name: 'Hair Extension',
    description:
      'Professional hair extension services designed to enhance length, volume and overall appearance.',
    icon: 'Sparkles',
    image: '/images/extension-types/weft.webp',
    whatsappMessage: whatsappMessages.hairExtension,
    link: '/extension',
  },
  {
    id: 'nail-art',
    name: 'Nail Art',
    description:
      'Creative and stylish nail art services with modern designs.',
    icon: 'Gem',
    image: '/images/gallery/nail-art-2.webp',
    whatsappMessage: whatsappMessages.nailArt,
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment',
    description:
      'Professional hair treatments focused on improving the look and feel of hair.',
    icon: 'Droplet',
    image: '/images/gallery/hair-treatment-2.webp',
    whatsappMessage: whatsappMessages.hairTreatment,
  },
  {
    id: 'hair-styling',
    name: "Women's Hair Styling",
    description:
      'Elegant women’s hairstyling for different occasions and preferences.',
    icon: 'Scissors',
    image: '/images/hair-types/straight-hair.webp',
    whatsappMessage: whatsappMessages.hairStyling,
  },
]

// Common hair types clients bring in — from Mona's academy training material.
export const hairTypes = [
  {
    id: 'straight',
    name: 'Straight Hair',
    image: '/images/hair-types/straight-hair.webp',
    description:
      'Smooth and shiny with no curl pattern. Easy to maintain and style, and blends well with naturally straight hair.',
    bestFor: 'Sleek & professional looks',
  },
  {
    id: 'wavy',
    name: 'Wavy Hair',
    image: '/images/hair-types/wavy-hair.webp',
    description:
      'A soft “S” pattern with natural volume and movement, needing less maintenance than curly hair.',
    bestFor: 'Natural, everyday looks',
  },
  {
    id: 'curly',
    name: 'Curly Hair',
    image: '/images/hair-types/curly-hair.webp',
    description:
      'Defined curls or coils with high volume and bounce, needing more care and hydration.',
    bestFor: 'Bold, voluminous styles',
  },
]

// Hair quality reference — helps clients understand what goes into their extensions.
export const hairQuality = {
  image: '/images/hair-quality/human-vs-synthetic.webp',
  origin: [
    {
      name: 'Human Hair',
      points: [
        '100% natural hair',
        'Can be dyed, styled and heat-styled',
        'Long-lasting (6 months to 2+ years with care)',
        'Premium quality',
      ],
    },
    {
      name: 'Synthetic Hair',
      points: [
        'Made from artificial fibers',
        'Cannot handle high heat (most types)',
        'Lower cost',
        'Shorter lifespan',
      ],
    },
  ],
  remyGrade: [
    {
      name: 'Remy Hair (Premium Quality)',
      points: [
        'Cuticles aligned in one direction, root to tip',
        'Collected carefully from a single donor',
        'Smooth, soft and tangle-free with natural shine',
        'Long lifespan, easy to style and maintain',
      ],
    },
    {
      name: 'Non-Remy Hair (Lower Quality)',
      points: [
        'Cuticles not aligned (mixed directions)',
        'Collected from multiple sources',
        'Tangles more easily after a few washes',
        'Shorter lifespan, needs more maintenance',
      ],
    },
  ],
}

export const hairLengths = [
  {
    name: 'Short Hair Extensions',
    length: '8–14 inches (20–35 cm)',
    bestFor: 'Adding volume rather than length; shoulder-length or bob haircuts',
  },
  {
    name: 'Medium Hair Extensions',
    length: '16–22 inches (40–55 cm)',
    bestFor: 'Shoulder to mid-back length; medium-long hairstyles',
  },
  {
    name: 'Long Hair Extensions',
    length: '24–30 inches (60–75 cm)',
    bestFor: 'Mid-back to waist-length hair; dramatic transformations',
  },
  {
    name: 'Extra Long Extensions',
    length: '32–40 inches (80–100 cm)',
    bestFor: 'Special occasions, bridal looks, photo shoots',
  },
]

// All 12 extension techniques taught and offered by Mona, with full detail
// from the academy's own training material. `image: null` means no client
// photo is available yet for that specific technique — it renders as a
// clearly labeled placeholder until one is supplied.
export const extensionTypes = [
  {
    id: 'tape-in',
    name: 'Tape-In Extension',
    image: '/images/extension-types/tape-in.webp',
    summary: 'Semi-permanent extensions attached with a thin, medical-grade adhesive strip.',
    description:
      'Small sections of natural hair are sandwiched between two tape extension pieces (the “sandwich method”), keeping them flat and natural-looking.',
    duration: '6–8 weeks before re-adjustment. Reusable 2–3 times with new tape.',
    advantages: [
      'Very natural and flat, not bulky',
      'Quick installation (30–60 minutes)',
      'Comfortable and lightweight',
      'Blends well with natural hair',
    ],
    disadvantages: [
      'Cannot apply oil near roots (tape may slip)',
      'Needs maintenance every 6–8 weeks',
      'Not suitable for very oily scalp',
    ],
    bestFor: 'Clients who want a natural, flat, low-maintenance semi-permanent option.',
  },
  {
    id: 'clip-in',
    name: 'Clip-In Extension',
    image: '/images/extension-types/clip-in.webp',
    summary: 'Temporary extensions with clips attached to wefts — no glue, heat or chemicals.',
    description:
      'Clip-in extensions can be attached and removed anytime, taking just 5–15 minutes to apply and blend with natural hair.',
    duration: 'Same-day wear, removed before sleep. Lifespan of 6 months to 1 year depending on care.',
    advantages: [
      'No damage to natural hair',
      'Very easy to use (DIY)',
      'Instant length & volume',
      'Affordable compared to permanent methods',
    ],
    disadvantages: [
      'Not suitable for very thin hair (clips may show)',
      'Can feel heavy over long hours',
      'Must be removed daily',
    ],
    bestFor: 'Bridal looks, parties, photoshoots and quick transformations without commitment.',
  },
  {
    id: 'weft',
    name: 'Weft Extension',
    image: '/images/extension-types/weft.webp',
    summary: 'A stitched strip (track) of hair attached to natural hair for length, thickness and volume.',
    description:
      'Available as Machine Weft, Hand-Tied Weft or an ultra-flat Invisible/Genius Weft, attached via sew-in (braid), beaded/micro ring, or glue methods.',
    duration: '6–8 weeks before tightening/maintenance. Hair can be reused multiple times.',
    advantages: [
      'Best for full volume and thickness',
      'Long-lasting and secure',
      'No daily removal needed',
      'Blends naturally with thick hair',
    ],
    disadvantages: [
      'Requires professional installation',
      'Can feel tight if done incorrectly',
      'Not ideal for very thin or weak hair',
    ],
    bestFor: 'Clients who want permanent-looking volume without daily removal.',
  },
  {
    id: 'micro-ring',
    name: 'Micro Ring Extension',
    image: '/images/extension-types/micro-ring.webp',
    summary: 'Strand-by-strand extensions attached using tiny metal rings — no glue, heat or chemicals.',
    description:
      'A small section of natural hair is looped through a bead with the extension strand, then clamped securely with pliers.',
    duration: '2–3 months before maintenance. Reusable with new beads.',
    advantages: [
      'No heat or glue damage',
      'Very natural movement',
      'Lightweight and flexible',
      'Reusable hair',
    ],
    disadvantages: [
      'Time-consuming installation (2–4 hours)',
      'Can slip if not fitted properly',
      'Not ideal for very thin hair',
    ],
    bestFor: 'Clients who want natural, long-lasting extensions without glue or heat.',
  },
  {
    id: 'hot-fusion',
    name: 'Hot Fusion (Keratin Bond)',
    image: '/images/extension-types/hot-fusion.webp',
    summary: 'Semi-permanent, strand-by-strand extensions bonded with heated keratin glue.',
    description:
      'Keratin, a protein similar to natural hair, is melted with a heat tool and bonded to small sections of hair, then shaped and cooled into a strong bond.',
    duration: '3–5 months. Not reusable, as the keratin bond is single-use.',
    advantages: [
      'Very natural look and movement',
      'Strong, long-lasting hold',
      'No visible clips or tapes',
      'Suitable for most hair types',
    ],
    disadvantages: [
      'Uses heat, which can damage hair if done incorrectly',
      'Time-consuming (3–5 hours)',
      'Removal requires a special solution',
    ],
    bestFor: 'Clients who want long-term, natural, strong-hold extensions.',
  },
  {
    id: 'micro-mini',
    name: 'Micro Mini (Nano) Extension',
    image: '/images/extension-types/micro-mini.webp',
    summary: 'An advanced micro ring method using beads around 90% smaller, for an undetectable finish.',
    description:
      'Each strand is attached through a tiny, near-invisible bead, done strand-by-strand for a precise, seamless look.',
    duration: '2–3 months before maintenance. Reusable with new beads.',
    advantages: [
      'Very tiny and invisible — ideal for thin hair',
      'No heat, glue or chemicals',
      'Natural movement',
      'Lightweight and comfortable',
    ],
    disadvantages: [
      'Takes longer to install (3–5 hours)',
      'Requires an expert technician',
      'More expensive than regular micro rings',
    ],
    bestFor: 'Clients with thin or fine hair who want invisible, natural-looking extensions.',
  },
  {
    id: 'feather',
    name: 'Feather Hair Extension',
    image: '/images/extension-types/feather.webp',
    summary: 'Decorative, lightweight strands for a fashionable accent rather than volume.',
    description:
      'Available as clip-in, beaded, or integrated/strand feather extensions, blended with natural hair for a seamless fall.',
    duration: 'Clip-in: same day. Beaded or integrated: 2–4 weeks depending on hair growth and care.',
    advantages: [
      'Lightweight and fun',
      'Adds color and style without chemicals',
      'Quick and easy to use',
      'Perfect for festivals, parties or photoshoots',
    ],
    disadvantages: [
      'Not for adding volume or thickness',
      'Can tangle if not cared for',
      'Limited lifespan compared to standard extensions',
    ],
    bestFor: 'Clients who want fashion-forward, colorful hair accents rather than length or volume.',
  },
  {
    id: '6d-10d',
    name: '6D / 10D Extension',
    image: '/images/extension-types/6d-10d.webp',
    summary: 'Multi-layered wefts — 6 or 10 stacked layers — for maximum, full-bodied volume.',
    description:
      'Can be applied via weft/sew-in, tape-in, hot fusion/keratin bond, or micro ring/nano bead methods, depending on the desired finish.',
    duration: 'Tape-in / hot fusion / micro ring: 2–4 months. Weft/sew-in: 6–8 weeks before maintenance.',
    advantages: [
      '6D: full volume with natural layering',
      '10D: ultra-thick, dense, luxurious hair',
      'Can be styled, curled, straightened or colored',
    ],
    disadvantages: [
      'Requires professional installation',
      'Can feel heavy on very thin hair',
      'Higher cost than standard extensions',
    ],
    bestFor: '6D for natural full-volume layered hair; 10D for dramatic, ultra-dense transformations.',
  },
  {
    id: 'nano-ring',
    name: 'Nano Ring Extension',
    image: '/images/extension-types/nano-ring.webp',
    summary: 'Individual strands attached using ultra-small, nearly invisible beads.',
    description:
      'Smaller than standard micro rings, with no heat, glue or chemicals used — gentle on natural hair, especially for thin or fine hair.',
    duration: '2–3 months before maintenance. Reusable if beads are replaced.',
    advantages: [
      'Almost invisible — perfect for thin hair',
      'No heat or glue damage',
      'Lightweight and comfortable',
      'Natural hair movement',
    ],
    disadvantages: [
      'Installation takes 3–5 hours',
      'Requires an experienced stylist',
      'More expensive than micro rings',
    ],
    bestFor: 'Clients with thin, fine or fragile hair who want invisible, long-lasting extensions.',
  },
  {
    id: 'ice-gel',
    name: 'Ice Gel Extension',
    image: '/images/extension-types/ice-gel.webp',
    summary: 'Strand-by-strand extensions using soft, smooth gel or keratin-tipped strands.',
    description:
      'The gel tip is fused near the root using a hot or cold fusion tool, forming a secure, flat bond.',
    duration: '2–3 months before maintenance. Reusable with a new gel tip.',
    advantages: [
      'Natural, smooth and flat bond',
      'Adds precise length and volume',
      'Looks very natural strand-by-strand',
      'Can be colored, styled or curled',
    ],
    disadvantages: [
      'Needs professional installation',
      'Heat tools may damage hair if misused',
      'Maintenance every 6–8 weeks',
    ],
    bestFor: 'Clients who want strand-by-strand extensions with a smooth, invisible root finish.',
  },
  {
    id: 'uv-light',
    name: 'UV Light Extension',
    image: '/images/extension-types/uv-light.webp',
    summary: 'Gel-tipped strands bonded to natural hair and cured under UV light.',
    description:
      'The UV light hardens the gel to create a secure, flexible and invisible bond, without heat or traditional glue.',
    duration: '2–3 months before maintenance. Can be removed and reused with new gel tips.',
    advantages: [
      'No heat or traditional glue',
      'Invisible, natural-looking roots',
      'Precise volume and length strand-by-strand',
      'Can be styled, curled or straightened',
    ],
    disadvantages: [
      'Requires professional installation and a UV curing tool',
      'Not ideal for extremely fine hair without care',
      'Maintenance every 6–8 weeks',
    ],
    bestFor: 'Clients who want strand-by-strand extensions with invisible bonds and minimal hair damage.',
  },
  {
    id: 'butterfly',
    name: 'Butterfly Hair Extension',
    image: '/images/extension-types/butterfly.webp',
    summary: 'Decorative strands styled with colorful, playful patterns for a vibrant accent.',
    description:
      'Usually applied clip-in or beaded, blended with natural hair for short or long accent strands.',
    duration: 'Clip-in: same day. Beaded or semi-permanent: 2–4 weeks depending on hair care.',
    advantages: [
      'Lightweight and fun',
      'Adds colorful, fashionable accents',
      'Easy to apply and remove',
      'Perfect for creative hairstyles and photoshoots',
    ],
    disadvantages: [
      'Not for adding volume or thickness',
      'Can tangle if not handled carefully',
      'Shorter lifespan than traditional extensions',
    ],
    bestFor: 'Clients who want trendy, colorful, festival-ready hair accents.',
  },
]

export const courses = [
  {
    id: 'hair-extension-course',
    name: 'Hair Extension Professional Course',
    image: '/images/hero/hair-extension-application.webp',
    description:
      'Professional training focused on hair extension skills and practical techniques.',
    highlights: [
      'Hands-on practical training',
      'Professional techniques',
      'Guided learning environment',
    ],
    duration: '2 – 10 days',
    fee: '[COURSE_FEE]',
    certification: 'Central Government Certification',
  },
  {
    id: 'nail-art-course',
    name: 'Nail Art & Extension Professional Course',
    image: '/images/gallery/nail-art-1.webp',
    description:
      'Professional training covering nail art and nail extension skills.',
    highlights: [
      'Hands-on practical training',
      'Modern nail art techniques',
      'Guided learning environment',
    ],
    duration: '2 – 10 days',
    fee: '[COURSE_FEE]',
    certification: 'Central Government Certification',
  },
  {
    id: 'hair-treatment-course',
    name: 'Hair Treatment Professional Course',
    image: '/images/gallery/hair-treatment-1.webp',
    description:
      'Professional training focused on hair treatment knowledge and practical skills.',
    highlights: [
      'Hands-on practical training',
      'Professional treatment knowledge',
      'Guided learning environment',
    ],
    duration: '2 – 10 days',
    fee: '[COURSE_FEE]',
    certification: 'Central Government Certification',
  },
]

export const whyChooseMona = [
  { icon: 'Sparkles', text: 'Professional beauty services' },
  { icon: 'Scissors', text: 'Hair extension expertise' },
  { icon: 'Gem', text: 'Nail art expertise' },
  { icon: 'GraduationCap', text: 'Professional academy training' },
  { icon: 'HandHeart', text: 'Practical learning' },
  { icon: 'Heart', text: 'Customer-focused service' },
]

export const galleryCategories = [
  { id: 'hair-extensions', label: 'Hair Extensions' },
  { id: 'nail-art', label: 'Nail Art' },
  { id: 'hair-treatment', label: 'Hair Treatment' },
  { id: 'hair-styling', label: 'Hair Styling' },
  { id: 'academy', label: 'Academy' },
  { id: 'student-work', label: 'Student Work' },
]
