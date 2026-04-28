# Aero Wings

Marketing website for [Aero Wings Travel & Cargo Agency](https://aerowings.in). Built with React 18, Vite, Bootstrap 5, and Swiper.

## Getting started

Requires Node `>=20` (a `.nvmrc` is committed; run `nvm use` to match).

```bash
npm install
npm run dev
```

Open <http://localhost:5173> to view the site.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm run lint:fix` | Run ESLint with autofix |
| `npm run format` | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without writing changes |

## Project structure

The codebase is organized **feature-first**. A single path alias `@/` resolves to `src/`.

```
src/
  app/                  # App shell + route table
    App.jsx
    routes.jsx          # Flat data array of { path, element, eager }
  features/             # Each feature owns its views, components, styles
    home/               # Home, Offers + HomeCarousel, HomeHolidays, StatCounter, TCModal
    about/              # AboutUs + VerticalCarousel
    holidays/           # India, Foreign, Holiday, Hyderabad, Hajj, Holylands + CardsAccordion, HolidayModal
    services/           # Services, Visa, Cruise, Train, Corporate, Airlines + ServicesModal
    contact/            # Contact + SocialIcons
  shared/
    ui/                 # ContactModal, Loader, Error404
    layout/             # Navbar, Footer, SubHeader, WhatsAppFloat
    config/             # contact.js (phone, email, social), site.js (form URLs, site name)
  data/                 # Single source of truth for shared content
    holidays.js         # domesticHolidays + internationalHolidays + featuredOnHome subsets
  assets/               # Static images, organized by category
  styles/               # Globals only (index.scss)
  main.jsx              # Mounts <App> inside <HashRouter>
```

### Conventions

- **Path imports**: use `@/...` for cross-feature imports; relative `./Foo` only within the same folder.
- **SCSS co-locates with its component.** Components import their own `.scss`. The only centralized stylesheet is `src/styles/index.scss` for resets/globals.
- **Contact info / form URLs** live in `src/shared/config/{contact,site}.js`. Never hardcode the phone number, email, or form links — import from these files. Use the `whatsappLink(message)` helper from `contact.js` to build pre-filled `wa.me` URLs.
- **Modals** (ContactModal, HolidayModal, ServicesModal, TCModal) are triggered via Bootstrap `data-bs-toggle="modal"` data attributes — no React state involved.

### Adding a new page

1. Create `Foo.jsx` and `Foo.scss` in the appropriate `src/features/<bucket>/`.
2. Register the route in `src/app/routes.jsx`.
3. If it's a destination card, add the entry to `src/data/holidays.js`.

## Routing

Routes are defined as a flat array in `src/app/routes.jsx`. Home, AboutUs, Services, and Offers are eager-loaded; the remaining 13 routes use `React.lazy` with `<Suspense fallback={<Loader />}>`. `main.jsx` wraps `<App>` in a scroll-to-top wrapper that fires on `useLocation` change. The router is `HashRouter`, so URLs use the `/#/path` form.

## Tooling

- **ESLint** flat config (`eslint.config.js`) with `react`, `react-hooks`, and `jsx-a11y` plugins.
- **Prettier** — 100-col width, double quotes, semicolons (see `.prettierrc.json`).
- **GitHub Actions CI** (`.github/workflows/ci.yml`) runs `npm ci && npm run lint && npm run build` on PRs and pushes to `main`.

## Deployment

The site is deployed to Netlify. `public/.htaccess` and `public/404.html` provide SPA routing fallbacks for static hosts.
