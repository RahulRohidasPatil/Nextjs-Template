# Next.js Template

A lightweight starter for building with the Next.js App Router, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui.

This template already includes:

- Next.js `16.2.1` with the `app/` directory
- React `19` and TypeScript
- Tailwind CSS `4` with CSS variables in [`app/globals.css`](./app/globals.css)
- shadcn/ui configured with the `base-nova` style
- `next-themes` for light, dark, and system theme switching
- Geist Sans and Geist Mono loaded with `next/font`
- ESLint and Prettier with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`

## Getting Started

This repo uses `pnpm` by default.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `pnpm dev` starts the development server
- `pnpm build` creates a production build
- `pnpm start` runs the production server
- `pnpm prelint` formats the project with Prettier
- `pnpm lint` runs ESLint

## Project Structure

```text
app/
  globals.css        Global styles and design tokens
  layout.tsx         Root layout, metadata, fonts, and theme provider
  page.tsx           Home page
components/
  mode-toggle.tsx    Theme switcher
  ui/                shadcn/ui components
lib/
  utils.ts           Shared utility helpers
public/              Static assets
```

## Customizing the Template

- Update [`app/page.tsx`](./app/page.tsx) to replace the starter homepage
- Edit [`app/layout.tsx`](./app/layout.tsx) to change metadata, fonts, or global providers
- Adjust tokens in [`app/globals.css`](./app/globals.css) to restyle the app
- Add new reusable components under [`components/`](./components)
