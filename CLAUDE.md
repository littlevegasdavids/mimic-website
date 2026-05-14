# Mimic Website

Single-page marketing site for **Mimic & Engraving Services CC** — a South African industrial engraving, signage, and mimic panel company based in Greenside, Johannesburg. 40+ years in operation.

## Stack

- **React 19** + TypeScript + Vite 8
- **Chakra UI v3** (not v2 — API differs significantly: `createSystem`, `defineConfig`, no `ChakraProvider` wrapper, use `Provider` from `./components`)
- `react-icons` for icons
- Deployed to **GitHub Pages** via `gh-pages` package

## Dev Commands

```
yarn dev        # local dev server
yarn build      # tsc -b && vite build
yarn deploy     # build + push to gh-pages branch
```

## Project Structure

```
src/
  pages/HomePage.tsx   # entire site — single component, all sections inline
  theme/index.ts       # custom Chakra system (colours + fonts)
  components/
    ui/provider.tsx    # wraps ChakraProvider + ColorModeProvider
    ui/index.ts
    index.ts
  App.tsx              # renders <HomePage /> only
  main.tsx             # entry: wraps App in <Provider>
  global.css
```

All source imports use the `@/` alias (maps to `./src`).

The site is deployed under the sub-path `/mimic-website/`, so `vite.config.ts` sets `base: '/mimic-website/'`. Assets (e.g. logo) must be referenced as `/mimic-website/logo.png`.

## Design System

Custom Chakra tokens — **do not use default Chakra colour names** for brand colours; use these:

### Colours

| Token | Hex | Use |
|---|---|---|
| `grey.900` | `#1A1C1E` | Primary dark background |
| `grey.800` | `#252729` | Secondary dark surface |
| `grey.600` | `#5C5C5C` | Body text on light |
| `blue.500` | `#4A7FA5` | Primary accent / CTA |
| `blue.400` | `#6496B8` | Accent highlights |
| `blue.300` | `#89B3CC` | Subtle accent / hover |

Accent glow: `rgba(74,127,165,…)` — used directly in box-shadows and radial gradients throughout.

### Fonts

| Token | Family |
|---|---|
| `heading` | Bebas Neue (display caps) |
| `body` | DM Sans |
| `mono` | DM Mono |

### Motion

Transitions consistently use `cubic-bezier(0.4,0,0.2,1)` at `0.32s` or `0.4s`. Keep this consistent.

## Page Sections (in order)

1. **Nav** — fixed, blur backdrop, desktop links + mobile `Menu.Root` hamburger
2. **Hero** — dark grid bg, left copy + right animated mimic panel illustration, bottom stats bar
3. **Marquee** — blue ticker strip (CSS animation injected via `document.createElement('style')` at module level)
4. **Services** — 4 cards on `gray.50` (light section): Engraving, Signage, Mimic Panels, M1 Pro Printing
5. **About** — dark section, copy + 2×2 stats grid
6. **Capabilities** — light section, bullet list + 4 feature tiles
7. **Contact** — dark section, contact details + quote form (form is UI-only, no submission handler yet)
8. **Footer** — minimal strip

## Business Details (used in site copy)

- **Company**: Mimic & Engraving Services CC
- **Contact person**: Trever — Design & Sales
- **Email**: sales@mimicengraving.co.za
- **Phone**: 011 646 7539 · 072 342 1357
- **WhatsApp**: +27 072 342 1357
- **Address**: 114 Barry Hertzog Avenue, Greenside, Johannesburg

## Known TODOs / Incomplete

- Contact form has no submission handler — the `Send Enquiry` button does nothing
- "Service Required" select is commented out (Chakra v3 Select integration pending)
- Hero CTA buttons have `href` commented out — not yet wired to section anchors
