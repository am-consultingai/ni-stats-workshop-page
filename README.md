# NI Stats Workshop — landing page

Marketing/landing page for **Deterministic Analysis for Analysts**, an AM Consulting workshop for
Natural Intelligence. Vite + React 19 + TypeScript + Tailwind CSS v4, co-branded AM Consulting ×
Natural Intelligence.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build → dist/
npm run preview  # preview the build
npm run lint     # tsc --noEmit
```

## Structure
- `src/App.tsx` — composes the section components in order.
- `src/components/` — one component per section (Hero, thesis, problem, shift, flow, concepts,
  outcomes, the worked case, build, who-for, logistics, about) + chrome (`TopBanner`, `VerticalRail`).
- `public/img/` — `am-logo.png` (AM Consulting), `natural-intelligence.svg` (NI wordmark), `avishay.png`.

Content mirrors the workshop in `../new_workshop/` (the 8-module spiral and the deterministic skills).
The NI logo is a placeholder wordmark — swap `public/img/natural-intelligence.svg` for the official asset.
