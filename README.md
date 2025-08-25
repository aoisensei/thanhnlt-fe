# Frontend Base (React + Vite + TS)

A clean, extensible base for enterprise-scale frontend projects.

## Stack
- React 19 + Vite 7
- MUI v6
- TailwindCSS v3 (with `tw-` prefix)
- React Router v6
- Zustand for state
- Axios for HTTP
- ESLint + Prettier

## Scripts
- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm lint` / `pnpm lint:fix`
- `pnpm format`

## Structure
```
src/
  api/
  assets/
  components/
  config/
  hooks/
  layouts/
  pages/
  providers/
  routes/
  store/
  types/
  utils/
  index.css
  main.tsx
```

## Theming
- MUI ThemeProvider with light/dark mode (toggle in app bar).

## Tailwind
- Config with prefix `tw-` to avoid conflicts with MUI.

## Env
- `VITE_API_BASE_URL` (default `https://echo.free.beeceptor.com`).
