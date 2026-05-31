# Nast Bloom – Astro + Tailwind + Decap CMS

## Tech Stack
- **Astro 4** – static site generator
- **Tailwind CSS 3** – utility-first styling
- **Decap CMS** – git-based CMS at `/admin`

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:4321

# 3. Open the CMS locally (in a second terminal)
npx decap-server
# → http://localhost:4321/admin  (no login needed locally)

# 4. Build for production
npm run build
```

---

## What You Can Edit in the CMS

Go to `yoursite.com/admin` and log in with your Netlify/Git credentials.

| Collection | What you can do |
|---|---|
| **Products** | Add/edit/delete products, set price, category, badge, photo, toggle in-stock |
| **Gallery** | Upload gallery photos, add captions, mark one as "Featured" (shows large) |
| **Testimonials** | Add client reviews — name + quote |
| **FAQ** | Add/edit questions and answers, assign to a category tab |
| **Site Settings** | Change email, phone, social handles, hero headline/text/image |

---

## Deploying to Netlify (recommended — free)

1. Push this project to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Choose your repo — build settings are auto-detected
4. In Netlify dashboard → **Site Settings → Identity** → Enable Identity
5. Under Identity → **Git Gateway** → Enable Git Gateway
6. Go to your live site at `yoursite.com/admin` to log into the CMS

That's it. Every time you save content in the CMS, Netlify rebuilds the site automatically (takes ~30 seconds).

---

## Adding Your Logo

Place your logo file at:
```
public/images/logo.png
```

---

## Project Structure

```
nastbloom/
├── public/
│   ├── admin/
│   │   ├── index.html          ← CMS entry point
│   │   └── config.yml          ← CMS collections config
│   └── images/
│       ├── logo.png            ← Your logo (add this)
│       └── uploads/            ← CMS uploads go here
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Process.astro
│   │   ├── Gallery.astro       ← reads from content/gallery
│   │   ├── Products.astro      ← reads from content/products
│   │   ├── Testimonials.astro  ← reads from content/testimonials
│   │   ├── FAQ.astro           ← reads from content/faq
│   │   ├── Contact.astro
│   │   ├── Marquee.astro
│   │   ├── Care.astro
│   │   ├── Shipping.astro
│   │   └── Policies.astro
│   ├── content/
│   │   ├── config.ts           ← Astro content collection schemas
│   │   ├── products/           ← .md files, one per product
│   │   ├── gallery/            ← .md files, one per photo
│   │   ├── testimonials/       ← .md files, one per review
│   │   ├── faq/                ← .md files, one per Q&A
│   │   └── settings/
│   │       └── general.json    ← site-wide settings
│   ├── layouts/
│   │   └── BaseLayout.astro    ← nav, footer, cart sidebar
│   ├── pages/
│   │   └── index.astro         ← assembles all sections
│   └── styles/
│       └── global.css          ← Tailwind base + custom utilities
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Adding/Editing Content Without the CMS

You can also edit content directly in the `.md` files under `src/content/`.

**Example — edit a product price:**
```md
<!-- src/content/products/8x8-resin-block.md -->
---
title: "8×8 Resin Block"
category: blocks
price: 295        ← change this
badge: "Bestseller"
description: "Classic square resin block..."
inStock: true
order: 1
---
```

Save the file and the dev server hot-reloads instantly.
