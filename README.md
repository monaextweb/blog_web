# Mona Hair Extension & Nail Art Studio and Academy

Premium, minimal, single-page-app style promotional website. React + Vite +
Tailwind CSS. No backend, no database, no authentication — a pure frontend
site whose primary conversion goal is a WhatsApp enquiry.

## 1. Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/`.

## 3. Deployment

This is a static site (`dist/` after build) — deploy it to any static host:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```
Build command: `npm run build`, output directory: `dist`.

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**Any static host (Hostinger, GitHub Pages, S3/CloudFront, etc.)**
Run `npm run build` and upload the contents of `dist/`. Because this is a
client-side-routed React app, configure the host to rewrite all unknown
routes to `/index.html` (a "SPA fallback" / `_redirects` rule), otherwise
direct links like `/academy` will 404 on refresh.
- Netlify: add a `public/_redirects` file with `/* /index.html 200`.
- Vercel: handled automatically for Vite projects.

## 4. Editing business information

Everything client-specific lives in **`src/data/business.js`**:
name, phone, WhatsApp number, email, Instagram, WhatsApp message templates,
services, courses, and all placeholders. Edit that one file — no need to
search through components.

## 5. Content sourced from the client's academy training deck

The client supplied "Simaxo Hair Extension.pdf" — Mona's own 59-page academy
training material — as a source for extension-type details and photography.
It was used as follows:

- **Text content used as-is (adapted to site copy):** hair types (straight/
  wavy/curly), human vs synthetic hair, Remy vs non-Remy grading, hair length
  guide, and full detail (how it's applied, duration, pros/cons, best-for)
  for all 12 extension techniques Mona teaches and offers — now in
  `src/data/business.js` (`hairTypes`, `hairQuality`, `hairLengths`,
  `extensionTypes`) and rendered on the Extension page.
- **Images used:** 15 photos with no third-party branding — hair-type
  portraits, a human-vs-synthetic close-up, and technique photos/diagrams for
  9 of the 12 extension types. Optimized to WebP in `public/images/`.
- **Images deliberately excluded:** several photos in the deck (studio
  interior, seminar, mannequin wall) showed a different, unrelated business's
  signage ("SIMAXO Hair Extension Training Academy") in the background. Using
  those would have misrepresented another business's premises/team as Mona's
  own, so they were left out. One cover photo was salvageable by cropping out
  the branded mirror reflection (`public/images/hero/hair-extension-application.webp`).
  A generic "SHE Hair Factory" about/mission page at the end of the deck (a
  different company) was not used for the same reason.
- **3 of the 12 extension types have no photo yet** (Hot Fusion/Keratin,
  Micro Mini/Nano, Nano Ring) — the deck had no unbranded image for these.
  They render as clean placeholder blocks; drop a real photo into
  `public/images/extension-types/` and set the `image` field in
  `extensionTypes` (in `src/data/business.js`) to enable it.

## 6. Stock photography used to fill remaining gaps

The Gallery (Nail Art, Hair Treatment categories), the "Nail Art" and "Hair
Treatment" service cards, and the "Hair Extensions"/"Hair Styling"/"Academy"/
"Student Work" gallery categories are filled with:
- **4 new photos** sourced from [rawpixel](https://www.rawpixel.com/) via the
  [Openverse](https://openverse.org/) open-license search API, all released
  under **CC0 (public domain)** — free for commercial use, no attribution
  required, no copyright. Saved in `public/images/gallery/`.
- **Reused photos** from the academy deck (extension technique close-ups,
  hair-type portraits) repeated across Home/Gallery where a dedicated photo
  wasn't available — e.g. the micro-ring and UV-light technique photos
  represent the "Academy" gallery category, since they genuinely show
  training/technique content.

These are placeholder-free but still generic/stock rather than actual photos
of Mona's studio, staff, or client results — swap in real photography any
time by replacing the file at the same path, or by updating the path in
`src/data/business.js` (`placeholderImages.gallery`, `services[].image`).

**Logo:** the client's real logo was supplied later and is now live — see
`public/logo.webp` (background removed from the original black-backdrop
JPEG so it sits cleanly on the white navbar) and the favicon set
(`public/favicon-*.png`, `public/apple-touch-icon.png`). Wired via
`placeholderImages.logo` in `src/data/business.js`, used by `Navbar.jsx`,
`MobileMenu.jsx`, and `index.html`.

The three extension types that had no photo (Hot Fusion, Micro Mini/Nano,
Nano Ring) were also filled in later with client-supplied photos — see
`extensionTypes` in `src/data/business.js`. One of those photos originally
carried a third-party supplier's logo/caption ("Queen Hair — 8D Micro Bead");
it was cropped out before use, same reasoning as the Simaxo photos above.

## 7. Placeholders still to fill in

Genuinely unavailable info only — never invented, per the original brief:

| Placeholder | Where |
|---|---|
| `[FACEBOOK_LINK]` | `src/data/business.js` → `business.facebookLink` (not yet linked in UI — add if provided) |
| `[COURSE_FEE]` | `src/data/business.js` → each entry in `courses` |

Address, opening hours, Google Maps link, course duration, and course
certification have since been provided and are live (see `business.js` and
the Contact/Academy pages).

### Replacing placeholder images

Every image in the site renders through `PlaceholderImage.jsx`, which shows
an elegant placeholder block whenever a path contains `[` or fails to load.
To use real photography:

1. Drop image files into `public/images/...` (create the folders as needed).
2. Update the matching path in `src/data/business.js` (e.g.
   `placeholderImages.hero`, `placeholderImages.gallery.hairExtensions[0]`).
3. The real `<img>` renders automatically — no component changes required.

## 8. Contact form

There is no backend, so the form does **not** fake a submission. It composes
a `mailto:` link with the entered details and opens the visitor's email app.
WhatsApp remains the primary contact method. To connect a real form service
instead (e.g. Formspree), see the comment at the top of
`src/components/ContactForm.jsx`.

## 9. What was verified

- Navigation: Home, Extension, Academy, Contact all route correctly; active
  nav state and sticky navbar behavior confirmed.
- Mobile menu opens/closes with animation; touch-friendly link sizing.
- WhatsApp floating button and all inline WhatsApp CTAs build correct
  `https://wa.me/<number>?text=<encoded message>` links (see
  `buildWhatsAppLink` in `src/data/business.js`).
- Instagram link points to the provided profile URL.
- Responsive layout checked at mobile / tablet / desktop breakpoints.
- `prefers-reduced-motion` respected (see `src/index.css`).
- Production build succeeds (`npm run build`) with a lean ~350 KB JS bundle
  (~108 KB gzip) plus ~920 KB of optimized WebP imagery across 19 photos.
- Extension page's 12 technique cards expand/collapse correctly and each
  "Enquire on WhatsApp" button links to a technique-specific pre-filled
  message.

## 10. Project structure

```
src/
  data/business.js       # single source of truth for all business info
  lib/icons.js           # tree-shaken icon lookup map
  components/            # Navbar, MobileMenu, Hero, SectionHeading,
                          # ServiceCard, CourseCard, Gallery, CTASection,
                          # WhatsAppButton, WhatsAppCTAButton, InstagramCTA,
                          # ContactSection, ContactForm, Footer,
                          # PlaceholderImage, PageSEO, ScrollToTop
  pages/                 # Home, Extension, Academy, Contact
public/
  robots.txt, sitemap.xml, favicon.svg
```
