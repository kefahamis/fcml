# Friendship Container Manufacturers website

Next.js (App Router, TypeScript) site for Friendship Container Manufacturers Ltd.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | Company profile |
| `/products` | All products, filterable by range |
| `/products/[slug]` | One page per product (12) |
| `/applications` | What the products are suitable for |
| `/quality` | Quality system |
| `/employment` | Vacancies |
| `/enquiries` | Contact details and enquiry form |

## Where things live

- `lib/site.ts`: all company details, products, sizes and lists. Edit content here.
- `app/globals.css`: design tokens (brand colours, fonts) and every style.
- `components/`: header and menu drawer, product cards, shared sections, the WebGL gradient, scroll motion.
- `public/img/`: logo and photos taken from friendship.co.ke.

## Still to do

- The enquiry form opens the visitor's email program; connect it to a mail service or server action.
- Product photos are low resolution originals from the old site; replace them in `public/img/`.
- Hero, about and factory-strip photos are Unsplash stock (see `public/img/SOURCES.md`); replace with FCML's own photography.
