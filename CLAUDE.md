# Fusion Cell Marketing Website

## Messaging Framework (March 2026 revision)

### Lead with the problem, not the solution
The principal is currently the "integration layer" — coordinating across dozens of vendors, management teams, and reporting formats. That's the pain we solve.

### Key phrases to use:
- "One relationship. One source of truth."
- "Stop managing your managers."
- "Your world, simplified."
- "Built for decisions, not audits."
- "We become the integration layer so you don't have to be."

### Two modes:
- FAMILY HOLDINGS = Managed Services (active operations, bidirectional data flow)
- BUSINESS HOLDINGS = Executive Visibility (read-only, existing teams stay in place)

### Credibility:
- $14.4 billion in holdings managed to date
- AES-256 military-grade encryption
- Deloitte/PwC family office report data for the fragmentation stats

## Project Overview
This is the forward-facing marketing website for Fusion Cell — a dedicated team-based management service for high-net-worth principals with complex lifestyle holdings (real estate, aviation, marine, vehicles, collections, insurance, legal). This is NOT the application. This is the brand and marketing site that presents Fusion Cell as a standalone company, driving prospects toward an inquiry/conversation.

## Core Philosophy
The product is the Fusion Cell team — directors, managers, and specialists assembled around each principal's specific holdings. The app is one element of that experience, serving as the communication gateway between the principal and their team. The website must lead with the human element and let the technology reveal itself as the connective layer. Never position the app as the product. The team is the engine; the app is the window.

## Tech Stack
- **HTML5** semantic markup
- **CSS3** with CSS custom properties for theming
- **Vanilla JavaScript** for interactions, animations, and navigation
- No React, no Next.js, no Tailwind, no build tools, no bundlers
- Google Fonts (Inter) loaded via CDN
- Intersection Observer API for scroll reveal animations

## Brand System

### Colors
- Primary Background: `#000000` (pure black)
- Secondary Background: `#0a0a0a` (near-black, section differentiation)
- Tertiary Background: `#111111` (cards, elevated surfaces)
- Card/Surface: `#161616` to `#1a1a1a` (interactive elements)
- Border: `#222222` to `#2a2a2a` (subtle dividers)
- Primary Accent: `#4ade80` (mint green)
- Accent Hover: `#22c55e` (deeper mint)
- Accent Glow: `rgba(74, 222, 128, 0.15)` (subtle glow effects)
- Text Primary: `#ffffff`
- Text Secondary: `#a1a1aa`
- Text Muted: `#71717a`

### Typography
- Headlines: Inter, weights 600/700, letter-spacing -0.02em to -0.03em
- Body: Inter, weights 400/500, line-height 1.6-1.7
- All CSS custom properties defined in `css/variables.css`

### Design Language
- Private banking aesthetic, NOT a SaaS product page
- Generous whitespace (120-160px section padding on desktop)
- Subtle scroll reveals (20-30px translate, opacity fade, 0.6s ease-out)
- Restrained mint green accent use (CTAs, highlights, hover states only)
- Glass morphism on nav bar (subtle backdrop-blur, semi-transparent)
- No stock photos — geometric/abstract placeholders only
- Always respect `prefers-reduced-motion`

## File Structure
```
fusioncell-site/
  index.html          (Home)
  about.html          (About / The Fusion Cell Concept)
  services.html       (Expertise Areas)
  app.html            (The Application)
  contact.html        (Start a Conversation)
  css/
    reset.css
    variables.css
    global.css
    components.css
    nav.css
    footer.css
    home.css
    about.css
    services.css
    app-page.css
    contact.css
  js/
    main.js            (Nav, scroll reveals, shared logic)
    home.js            (Home page interactions if needed)
  assets/
    logo.svg
    icons/
```

## Pages
1. **Home (index.html):** Hero (team-first, no app mention), Concept section, How It Works (3 columns), Expertise preview grid, App preview section, CTA closing
2. **About (about.html):** Hero, Philosophy, Assembly process (4 steps), Team structure
3. **Services (services.html):** Hero, Domain sections (Real Estate, Aviation, Marine, Vehicles, Collections, Insurance & Legal), Custom domains note
4. **App (app.html):** Hero, Feature sections (Dashboard, Holdings, Budgets, Cash Flow, Decisions, AI Assistant), Security note, CTA
5. **Contact (contact.html):** Hero, Inquiry form (front-end only), Alternative contact

## Terminology Rules — NON-NEGOTIABLE
- SAY "your Fusion Cell team" — NOT "admins", "staff", "operators", "the system"
- SAY "directors and managers" — NOT "users", "employees"
- SAY "the app" or "the Fusion Cell app" — NOT "the platform", "the tool", "the software", "the portal"
- SAY "holdings" — NOT "assets" (on the marketing site)
- SAY "your team uploads / manages / maintains" — NOT "the system generates"
- SAY "customizable" or "tailored to you" — NOT "one-size-fits-all"
- SAY "window into your team's work" — NOT "automated solution", "AI-powered"
- SAY "cash flow" — NOT "bills"
- SAY "principal" or "you" — NOT "client", "user", "customer"
- NEVER SAY "portfolio" (implies securities), "automated", "AI-driven"

## What NOT to Do
- No JavaScript frameworks or build tools
- No Tailwind CSS
- No stock photography or external placeholder images
- No backend functionality (contact form is front-end only)
- No SaaS product page patterns (pricing tables, feature grids, "Start Free Trial")
- No bright colors except mint green accent, used sparingly
- No Phantom Services branding — Fusion Cell is its own entity
- Never position the app as the primary product
- Never use "automated", "AI-powered", "smart", or "intelligent" for the core service
