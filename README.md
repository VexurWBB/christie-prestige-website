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

Output is in the `dist/` folder.

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
3. Click **Add New → Project** and import the repository.
4. Vercel detects Vite automatically (`vercel.json` is included). Click **Deploy**.
5. Your live URL will look like `https://christie-prestige-website.vercel.app`.

Or deploy from the CLI after logging in:

```bash
npx vercel login
npx vercel --prod
```

## GitHub repository

From this folder (after installing [GitHub CLI](https://cli.github.com/) and running `gh auth login`):

```bash
git branch -M main
gh repo create christie-prestige-website --public --source=. --remote=origin --push
```

Or create an empty repo on [github.com/new](https://github.com/new), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/christie-prestige-website.git
git push -u origin main
```

### Adding collaborators

**GitHub:** Repository → **Settings → Collaborators → Add people**

**Vercel:** Project → **Settings → Members** (invite teammates to your Vercel team or project)

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
