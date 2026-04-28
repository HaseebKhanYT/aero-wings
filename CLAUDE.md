# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Vite dev server
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with autofix
npm run format       # Run Prettier on the codebase
npm run format:check # Check formatting without writing
```

Node `>=20` is required (see `.nvmrc` and `engines` in `package.json`).

## Architecture

**React 18 + Vite SPA** for a travel agency (aerowings.in), using HashRouter for routing.

### Folder structure

The codebase is organized **feature-first** with a single path alias `@/` → `src/`.

```
src/
  app/                  # App shell + route table
    App.jsx
    App.scss
    routes.jsx          # Flat data array of { path, element, eager }
  features/             # Each feature owns its views, components, styles
    home/               # Home, Offers + HomeCarousel, HomeHolidays, HolidayCarousel, StatCounter, TCModal
    about/              # AboutUs + VerticalCarousel
    holidays/           # India, Foreign, Holiday, Hyderabad, Hajj, Holylands + CardsAccordion, HolidayModal
    services/           # Services, Visa, Cruise, Train, Corporate, Airlines + ServicesModal
    contact/            # Contact + SocialIcons
  shared/               # Cross-feature code
    ui/                 # ContactModal, Loader, Error404
    layout/             # Navbar, Footer, SubHeader, WhatsAppFloat
    config/             # contact.js (phone, email, social, address), site.js (form URLs, site name)
  data/                 # Single source of truth for shared content
    holidays.js         # domesticHolidays + internationalHolidays + featuredOnHome subsets
  assets/               # Static images, organized by category (airlines/, flags/, holidays/, etc.)
  styles/               # Globals only (index.scss)
  main.jsx              # Entry point — mounts <App> inside <HashRouter>
```

### Conventions

- **Path imports**: use `@/...` for cross-feature imports. Relative imports (`./Foo`) only within the same folder.
- **SCSS co-locates with its component**. Components import their own `.scss`. The only centralized stylesheet is `src/styles/index.scss` for resets/globals.
- **Adding a new page** = drop `Foo.jsx` + `Foo.scss` into the appropriate `features/<bucket>/`, register it in `src/app/routes.jsx`. If it's a destination, add the entry to `src/data/holidays.js`.
- **Contact info / form URLs** live in `src/shared/config/{contact,site}.js`. Never hardcode the phone number, email, or form links — import from these files.
- **Modals** (ContactModal, HolidayModal, ServicesModal, TCModal) are triggered via Bootstrap `data-bs-toggle="modal"` data attributes — no React state involved.

### Routing (`src/app/routes.jsx`)

Routes are exported as a flat array `[{ path, element, eager }]`. `App.jsx` maps over this and wraps non-eager entries in `<Suspense>`. Home, AboutUs, Services, and Offers are eager-loaded; the remaining 13 routes are `React.lazy`. `main.jsx` wraps `<App>` in a scroll-to-top wrapper that fires on `useLocation` change.

### Styling

Bootstrap 5 + custom SCSS. Bootstrap JS is imported in `main.jsx`. `autoprefixer` is installed but currently unused (no `postcss.config.js`).

### Notable libraries

- **Swiper 9** — Carousels (`HomeCarousel`, `HolidayCarousel`, `VerticalCarousel`)
- **React CountUp 6** — Animated stat counters (`StatCounter`)
- **React Transition Group 4** — Page/element animations
- **Flaticon UIcons** — Icon set (`@flaticon/flaticon-uicons`)

### WhatsApp integration

A global WhatsApp contact button (`shared/layout/WhatsAppFloat.jsx`) appears across all pages once the user scrolls past 400px. Phone number is centralized in `src/shared/config/contact.js`. Use the `whatsappLink(message)` helper from that module to build pre-filled `wa.me` URLs.

### Tooling

- **ESLint** flat config (`eslint.config.js`) with `react`, `react-hooks`, `jsx-a11y` plugins. Some `jsx-a11y` rules are downgraded to warnings because Bootstrap modal triggers use clickable divs intentionally.
- **Prettier** (`.prettierrc.json`) — 100-col width, double quotes, semicolons.
- **GitHub Actions CI** (`.github/workflows/ci.yml`) runs `npm ci && npm run lint && npm run build` on PRs and pushes to `main`.

### Deployment

Targets Netlify. `public/.htaccess` handles Apache rewrite rules; `public/404.html` is the routing fallback for direct URL access on static hosts.

## Conventions

### Pull requests

- Do **not** include a "Test plan" / "Testing" / checklist section in PR descriptions for this repo. Keep PR bodies to a Summary section only.
- Do **not** add `Co-Authored-By: Claude ...` (or any AI attribution) trailers to commit messages or PR bodies.
