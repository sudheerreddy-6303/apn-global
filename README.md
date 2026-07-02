# APN Global Foundation — Website

A 5-page React (Vite + JavaScript) website built with React Router and Bootstrap 5,
fully mobile responsive, styled to match the reference poster (navy blue + gold theme).

## Pages
1. **Home** (`/`) — hero, stats strip, about, focus areas, event/news/vision
2. **About Us** (`/about`) — intro, vision & mission, values, team
3. **Our Initiatives** (`/initiatives`) — 6 detailed initiative sections
4. **Events & News** (`/events`) — upcoming events + latest news
5. **Contact Us** (`/contact`) — contact cards, form, map

## Setup
```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to /dist)
```

## Tech
- React 19 + Vite
- React Router DOM (routing)
- Bootstrap 5 (grid & utilities) + Bootstrap Icons
- Plain CSS (src/styles/global.css) for custom theme/design tokens

## Notes
- All images are placeholder stock photos from Unsplash — swap the `img`/`src`
  URLs in each page file with your own photos.
- Colors, spacing and component styles are defined as CSS variables at the top
  of `src/styles/global.css` — edit `--navy` and `--gold` to re-theme instantly.
- Update contact details, address, and phone numbers in `Navbar.jsx`,
  `Footer.jsx`, and `Contact.jsx`.
