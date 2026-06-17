# Vamsi Vajja — AI/ML Engineer Portfolio

Productionm ready personal portfolio website built with Next.js 15, TypeScript and Tailwind CSS.

# Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run start     # Serve production build
```

# Project Structure

```
vamsi-portfolio/
├── app/
│   ├── globals.css        # Design system, CSS variables, utilities
│   ├── layout.tsx         # SEO metadata, fonts
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navigation.tsx     # Sticky nav with active section tracking
│   ├── About.tsx          # Story, timeline, industry pillars
│   ├── Skills.tsx         # Tabbed skill bars + tech badges
│   ├── Experience.tsx     # Expandable enterprise experience cards
│   ├── Projects.tsx       # Featured project deep-dives
│   ├── Architecture.tsx   # Interactive AI stack visualization
│   ├── Testimonials.tsx   # Leader testimonials grid
│   ├── Contact.tsx        # Contact form + availability info
│   └── Footer.tsx         # Links, sitemap, back-to-top
└── public/
    └── resume.pdf         # ← REPLACE WITH YOUR ACTUAL RESUME
```

# Personalizing the Site

# 1. Replace your resume
Drop your PDF at `public/resume.pdf` — the Download Resume button links to it automatically.

# 2. Update your LinkedIn URL
Search for `linkedin.com/in/vamsivajja` and replace with your actual profile URL.

# 3. Update your email
Search for `vamsi.vajja@email.com` and replace with your real email.

# 4. Connect the contact form
In `components/Contact.tsx`, replace the mock `handleSubmit` with a real service:

**Option A — Formspree (free, easiest):**
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — EmailJS:**
```bash
npm install @emailjs/browser
```
Then use `emailjs.send(serviceId, templateId, form, publicKey)`.

**Option C — Next.js API Route:**
Create `app/api/contact/route.ts` using Resend, SendGrid, or Nodemailer.

# Deployment

### Vercel (Recommended — free, zero config)
```bash
npm install -g vercel
vercel --prod
```
Or connect your GitHub repo at vercel.com → "New Project".

### Netlify
```bash
npm run build
# Deploy the .next folder or connect via GitHub
```

### Self hosted (Docker)
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

# SEO Configuration
Metadata is in `app/layout.tsx`. Update `openGraph.url` with your deployed domain.

# Customizing Colors
All brand colors are CSS variables in `app/globals.css`:
```css
--accent-blue: #4f8eff;
--accent-violet: #8b5cf6;
--accent-cyan: #22d3ee;
--accent-emerald: #10b981;
```

#Depen dencies
- **Next.js 15** — Framework
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility styles
- **Framer Motion** — Available for advanced animations
- **Lucide React** — Icons
