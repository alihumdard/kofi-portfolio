# Trydo Portfolio Landing — Next.js (complete project)

A rebuild of the Trydo portfolio landing page in Next.js (App Router) +
Tailwind v4 + Framer Motion + TypeScript. This is a complete, runnable
project — verified with a production build.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production:

```bash
npm run build
npm start
```

## What's inside

```
app/
  layout.tsx           Poppins font (next/font), metadata, smooth scroll
  page.tsx             assembles all sections
  globals.css          Tailwind v4
  api/contact/route.ts contact form endpoint (currently logs; wire to Resend)
components/
  Header.tsx    fixed nav, scroll state, mobile drawer
  Hero.tsx      full-height intro, staggered entrance
  About.tsx     image + tabbed skills/awards/experience/education
  Services.tsx  3x2 grid with pink hover flip
  Portfolio.tsx 3x2 image cards, hover overlay + View Details
  Blog.tsx      3 news cards
  Contact.tsx   controlled form -> /api/contact (sending/sent/error states)
  Footer.tsx    dark footer with socials
  Reveal.tsx    reusable scroll-in animation wrapper
  SectionTitle.tsx
data/
  services.ts  projects.ts  posts.ts   <- edit content here, not in components
```

## Notes

- All images are picsum.photos placeholders (allowed in next.config.ts).
  Replace with real files in public/images/ and update the src values in
  data/*.ts, Hero.tsx, About.tsx, Contact.tsx.
- Brand color: #f9004d. Font: Poppins via next/font/google (needs internet
  on first build).
- Contact form posts to /api/contact which validates and logs — swap the
  TODO for Resend or Nodemailer for real email delivery.
