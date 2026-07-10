# Christie Prestige Property — Website Build Plan

> The **landing page (`index.html` + `css/home.css` + `js/home.js`)** is complete and
> is the reference for quality, motion and brand fidelity. This document is the brief
> for building the remaining pages to the same world-class standard.
>
> **Tagline:** _Guiding you home, one smart move at a time._
> **Voice:** Warm yet authoritative. Speak to illuminate; teach before selling. No hype,
> urgency or exaggerated claims. Confidence without arrogance.

---

## 1. Design System (do not deviate)

These are already defined in `css/styles.css` and used by the landing page. Reuse them
everywhere — do **not** invent new colors or fonts.

### Colours (from the official Brand Guidelines)
| Token | Hex | Role |
| --- | --- | --- |
| Muted Blue / Navy | `#102038` (`--navy`), `#1c1f33` (`--midnight`) | Primary dark backgrounds, headings |
| Deep Gold | `#d8ab52` (`--gold-light`), `#c59742` (`--gold`) | Accent, emphasis, CTAs |
| Lotion / Cream | `#fffcf8` (`--cream`), `#ede8df` (page bg) | Light backgrounds, text-on-dark |
| Secondary greys | Graphite `#6E7180`, Steel `#BCBFCC`, Cloud `#EDEFF7` | Supporting UI, muted text |

### Typography
- **Display / headings:** `Playfair Display` (weights 400–700, italics for emphasis).
  This is the brand's primary typeface. Gold italics for the emphasised phrase in a heading.
- **Body / UI:** `Source Sans 3` (300–600).
- **Every page** must load Playfair Display. Copy the exact `<link>` used in `index.html`
  (many legacy pages still request Cormorant Garamond — update them).

### Motion & interaction language (reuse from the landing page)
- **Scroll reveal:** add `class="reveal"` to blocks and `class="stagger"` to grids/lists.
  `js/home.js` contains the IntersectionObserver logic — extract it into a shared
  `js/reveal.js` and call it from every page (or generalise `main.js`).
- **Header condense on scroll** (`.is-scrolled`) is already global.
- **Hover:** cards lift `translateY(-4…-6px)` with gold-tinted shadow; links have a gold
  underline + arrow that nudges right on hover (`.home-textlink`).
- **Hero:** Ken Burns image zoom + parallax + line-by-line masked title reveal.
- Always guard with `@media (prefers-reduced-motion: reduce)`.

### Shared components (already built as partials — reuse, don't rebuild)
- `public/partials/header.html` — glass nav + CTA + mobile toggle.
- `public/partials/footer.html` — brand, links, contact CTA.
- `public/partials/closing-cta.html` — "Let's talk about your next move" band.
- Buttons: `.btn.btn--primary` (gold pill), `.btn.btn--light` (outline on dark).
- Every page: `<body class="page-XXX" data-page="XXX">`, include the three partials,
  register the HTML file in `vite.config.js` (already done for all pages).

---

## 2. Site Structure

Primary nav (agreed in the Launch Pack): **Home · The Christie Standard · Who We Help ·
Our Process · About · Contact**. ("Start the Conversation" = the contact CTA.)

| Page | File | `data-page` | CSS | Status |
| --- | --- | --- | --- | --- |
| Home | `index.html` | `home` | `css/home.css` | ✅ Done (world-class) |
| The Christie Standard | `christie-standard.html` | `standard` | `css/standard.css` | ✅ Done |
| Who We Help | `who-we-help.html` | `who` | `css/who.css` | ✅ Done |
| Our Process | `our-process.html` | `process` | `css/process.css` | ✅ Done |
| About (hub) | `about.html` | `about` | `css/about.css` | ✅ Done |
| About — Ben | `about-ben.html` | `about` | `css/about.css` | ✅ Done |
| About — Liam | `about-liam.html` | `about` | `css/about.css` | ✅ Done |
| Contact | `contact.html` | `contact` | `css/contact.css` | ✅ Done |

---

## 3. Page-by-Page Briefs

### 3.1 The Christie Standard — `christie-standard.html`
**Purpose:** The philosophy page. Expand the four-pillar teaser from the landing page into
a full narrative.

**Sections**
1. **Page hero** (photo hero, navy scrim, gold rule) — eyebrow "The Christie Standard",
   H1 "A standard, uncovered over decades.", short lead. Use `hero-navy.jpg` or `hero-exterior-classic.jpg`.
2. **Origin statement** — editorial paragraph: it wasn't invented, it was uncovered through
   leadership, service, parenting and lived experience (source: About narratives / Launch Pack).
3. **The four principles** — full-width feature blocks (alternating image/text or large numbered
   rows): **Clarity, Discernment, Stewardship, Integrity**, each with 1–2 paragraphs.
4. **The 9 beliefs** — the supporting-message list (reuse `.home-beliefs` styling) as the
   "how it shows up in our work" section.
5. **"Illuminate, not persuade"** pull-quote band (navy).
6. Closing CTA + footer partials.

**Copy source:** Brand Guidelines (Branding Direction, Brand Vision), Launch Pack
(Brand Vision, Supporting Messages), About narratives (Ben's philosophy paragraph).

---

### 3.2 Who We Help — `who-we-help.html`
**Purpose:** Expand the 6-card teaser into a full audience page.

**Sections**
1. **Page hero** — H1 "People making important property decisions", lead about advocating
   in the client's interest, never the seller's.
2. **Audience detail** — one rich block per segment (reuse `.home-audience__card` visual
   language, enlarged): **Busy professionals · Defence families · Medical & healthcare
   professionals · First-home buyers · Growing investors · Interstate buyers · Australians
   overseas (expats: government, defence, corporate).** Each: who they are, the challenge,
   how Christie helps.
3. **"Residential · Commercial · SMSF"** capability strip.
4. **Mini process teaser** → links to Our Process.
5. Closing CTA + footer.

**Copy source:** Launch Pack ("Who We Help includes…" full list), Brand Guidelines (About /
Defense, Health, Government sectors + young investors).

---

### 3.3 Our Process — `our-process.html`
**Purpose:** Full walk-through of the six stages teased on the landing page.

**Sections**
1. **Page hero** — H1 "Understand. Decide. Steward.", lead about a calm, structured path.
2. **Vertical/stepped timeline** — the six stages, each expanded to a paragraph:
   **Understand → Clarify → Prepare → Search → Decide → Steward.** Reuse the gold
   rail + node motif from the landing `.home-process` (consider a scroll-linked vertical rail).
3. **What "stewardship beyond settlement" means** — differentiator block (navy).
4. **FAQ (optional)** — accordion, brand-styled, if content is provided.
5. Closing CTA + footer.

**Copy source:** Launch Pack (Our Process list), invent faithful stage descriptions in-voice.

---

### 3.4 About (hub) — `about.html`
**Purpose:** The family story + gateway to the two founder pages.

**Sections**
1. **Page hero** — H1 "Two generations, one standard."
2. **The family business** — intro: legacy of service + entrepreneurial energy; family-centred
   (Brand Guidelines "About"). Values pillars (Clarity/Discernment/Stewardship/Integrity).
3. **Founder cards** — Ben & Liam (reuse `.home-founder` cards) linking to their pages.
4. **Why buyer's advocacy** — short manifesto ("property is about people, not just property").
5. Closing CTA + footer.

**Copy source:** Brand Guidelines (About, Brand Vision, Competitive Analysis positioning),
Launch Pack founder summaries.

---

### 3.5 About — Ben & Liam — `about-ben.html`, `about-liam.html`
**Purpose:** Long-form founder narratives.

**Sections (each)**
1. **Profile hero** — name, role, one-line essence, portrait/initials treatment.
   (Ben: `--ben` object-position; Liam: `--liam`.)
2. **Narrative body** — the full biography, set as elegant prose (drop-cap first letter,
   pull-quotes). Use the exact text from `Christie_Prestige_Property_About_Us_Full_Narratives.docx`.
   - **Ben:** RAAF pilot/senior leader → preparation, judgement, integrity → stewardship over
     salesmanship → The Christie Standard.
   - **Liam:** Youth Olympic gymnast/trampoline (2016) → discipline & resilience → first home &
     investment (tenant-damage lesson: due diligence) → baggage handler → training manager →
     married, living the realities of mortgages → advocacy every step.
3. **Cross-link** to the other founder + to The Christie Standard.
4. Closing CTA + footer.

**Copy source:** `Christie_Prestige_Property_About_Us_Full_Narratives.docx` (verbatim, lightly
formatted). Extractable text is in the repo history of this task if needed.

---

### 3.6 Contact — `contact.html`
**Purpose:** "Start the Conversation."

**Sections**
1. **Page hero** — H1 "Start the conversation.", warm, low-pressure lead.
2. **Two-column layout** — form (name, email, phone, buyer type dropdown, message) +
   navy info panel (what to expect, trust bullets, tagline quote). Reuse `.contact-form` /
   `.contact-info` styles already in `styles.css`; form handler stub is in `main.js`.
3. **Locale note** — Gold Coast base, Australia-wide service. (Add real phone/email/socials
   when the client provides them — currently placeholders.)
4. Footer partial (closing CTA optional here since the page *is* the CTA).

**Copy source:** Launch Pack (writing style), Brand Guidelines contact ethos.

---

## 4. Assets & Housekeeping

- **Logos/emblem:** brand-accurate SVG/PNG sets live in `branding and content/Logo files/`.
  The site currently uses `/assets/emblem.svg` + a text lockup. If the client prefers the
  official wordmark logo, swap `public/assets/` files and update the header/footer partials.
- **Photography:** hero images are in `/assets/` and `/public/assets/`
  (`hero-home`, `hero-interior`, `hero-bedroom`, `hero-coastal`, `hero-kitchen`,
  `hero-exterior-classic`, `hero-apartment`, `hero-suburban`, `hero-navy`, `hero-cream`).
  Brand imagery direction: people, conversations, homes being lived in, quiet confidence —
  source real lifestyle/property photography to replace stock where possible.
- **Fonts:** ensure every remaining HTML file loads **Playfair Display** (not Cormorant Garamond).
- **Favicons:** already wired (`favicon-16/32.png`).
- **Contact details:** phone, email, address and social links are placeholders — get the
  real ones from the client before launch.
- **`branding and content/__MACOSX/`** is macOS junk from the zip — safe to delete.

## 5. Definition of "world-class" (acceptance bar)
- Playfair Display headings with tasteful gold italic emphasis; generous whitespace.
- At least one signature motion moment per page (hero reveal, scroll-linked element, or
  staggered card reveals) — never gratuitous.
- Consistent navy/gold/cream rhythm, alternating light/dark bands.
- Fully responsive (test 390px, 768px, 1280px, 1920px) and `prefers-reduced-motion` safe.
- Accessible: semantic headings, `alt` text, keyboard-navigable, AA contrast (per guidelines).
- `npm run build` passes clean.
