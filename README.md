# Aero Wings ✈️

A full-featured travel agency web application for **[Aero Wings](https://aerowings.in)** — a Hyderabad-based travel agency established in 1975. Built with React 18 and Vite, the site serves as a complete digital storefront covering flights, holiday packages, Hajj/Umrah, visas, cruises, train bookings, and MICE corporate travel.

**Live:** https://aerowings.in

---

## Features

### Pages & Services
- **18 routed pages** covering every service vertical: domestic travel, international travel, Hajj/Holy Lands, airlines, holidays, visa processing, cruises, train bookings, corporate/MICE travel, and a dedicated Hyderabad city guide
- **20 Indian destinations** and **45+ international destinations** across 6 continents, each with image galleries, description modals, and direct WhatsApp booking
- **36 visa-eligible countries**, **26 international + 6 domestic airlines**, and **12 cruise operators** showcased with partner logos
- **14 luxury Hajj hotel partners** including Hilton, Fairmont, Swissôtel, Pullman, and Mövenpick

### UI & Interactivity
- Hero carousel with 6 auto-rotating slides (Swiper fade effect) linking directly to service pages
- Animated stat counters — 500,000+ trips, 500+ destinations, 45+ years, 20+ services
- Dynamic accordion for destination browsing with expandable image cards and modal detail views
- Vertical carousel for company values (Customer Satisfaction, Integrity, Reliability)
- Scroll-triggered floating WhatsApp CTA button (appears after 400px scroll)
- Modal system for holidays, services, contacts, and T&C — each with WhatsApp deep links pre-filled with service context
- Offers page with conditional rendering (live deals vs. "stay tuned" empty state)
- Customer testimonials section with review cards
- Embedded Google Maps on the Contact page
- Accepted payment methods display (Visa, Mastercard, RuPay, UPI)

### Technical
- **Lazy-loaded routes** with `React.lazy` + `Suspense` for all non-critical pages, reducing initial bundle size
- **Data-driven architecture** — destination arrays, airline logos, hotel lists, and service descriptions are all structured data passed into shared presentation components
- **Responsive design** across all breakpoints using Bootstrap 5 grid + custom SCSS
- WhatsApp Business integration with programmatically generated pre-filled messages per service/destination
- HashRouter-based SPA routing with Apache `.htaccess` rewrite rules and a `404.html` fallback for static hosting

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.2, React Router DOM 6.10 |
| Build | Vite 4.1 |
| Styling | Bootstrap 5.2, Sass/SCSS, Autoprefixer |
| Carousels | Swiper 9.2 |
| Animations | React CountUp 6.4, React Transition Group 4.4 |
| Icons | Flaticon UIcons 2.0 |
| Fonts | Google Fonts — Poppins (all weights) |

---

## Getting Started

**Prerequisites:** Node.js 20+ and npm (a `.nvmrc` is committed; run `nvm use` to match).

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
npm run lint:fix

# Format with Prettier
npm run format
npm run format:check
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

The codebase is organized **feature-first**. A single path alias `@/` resolves to `src/`. SCSS co-locates with each component; only globals live under `src/styles/`.

```
src/
├── app/            # App shell + flat route table (App.jsx, routes.jsx)
├── features/       # One folder per feature, each owns its views, components, styles
│   ├── home/       # Home, Offers + HomeCarousel, HomeHolidays, StatCounter, TCModal
│   ├── about/      # AboutUs + VerticalCarousel
│   ├── holidays/   # India, Foreign, Holiday, Hyderabad, Hajj, Holylands + CardsAccordion, HolidayModal
│   ├── services/   # Services, Visa, Cruise, Train, Corporate, Airlines + ServicesModal
│   └── contact/    # Contact + SocialIcons
├── shared/
│   ├── ui/         # ContactModal, Loader, Error404
│   ├── layout/     # Navbar, Footer, SubHeader, WhatsAppFloat
│   └── config/     # contact.js (phone, email, social), site.js (form URLs, site name)
├── data/           # Single source of truth for shared content (e.g. holidays.js)
├── assets/         # Images organized by section (home, hajj, holidays, airlines, etc.)
├── styles/         # Globals only (index.scss)
└── main.jsx        # React entry point — mounts <App> inside <HashRouter>
```

Key components: `HomeCarousel`, `HolidayCarousel`, `CardsAccordion`, `StatCounter`, `HolidayModal`, `ServicesModal`, `ContactModal`, `VerticalCarousel`, `WhatsAppFloat`

---

## Accreditations

Aero Wings holds **IATA**, **TAFI**, **Minority**, and **MOHU** accreditations — displayed throughout the site as trust signals.

---

## License

Copyright © 2023 [HaseebKhanYT](https://github.com/HaseebKhanYT). All rights reserved.
