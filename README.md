# Christie Prestige Property — Website

Version 1 site for Christie Prestige Property buyer's advocacy.

## Run locally

```bash
cd christie-prestige-website
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output is in the `dist/` folder, ready to upload to any static host (Cloudflare Pages, Netlify, etc.).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| The Christie Standard | `christie-standard.html` |
| Who We Help | `who-we-help.html` |
| Our Process | `our-process.html` |
| Contact | `contact.html` |
| Ben Christie | `about-ben.html` |
| Liam Christie | `about-liam.html` |

## Brand colours

- Midnight blue: `#1c1f33`
- Deep navy: `#102038`
- Gold: `#c59742`
- Cream: `#fffcf8`

## Contact form

The contact form currently shows a confirmation message on submit. To receive enquiries by email, connect it to a service such as [Formspree](https://formspree.io) or your hosting provider's form handler.

## Project structure

```
assets/          Logo, emblem, favicons
css/             styles.css (global), home.css (landing page)
js/              main.js, layout.js (shared header/footer)
public/partials/ header.html, footer.html
```
