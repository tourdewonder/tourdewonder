# TourDeWonder

A modern travel and tourism website showcasing destinations, deals, experiences, and booking services. Built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **State Management:** TanStack React Query
- **Routing:** React Router v6
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Testing:** Vitest + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ (install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun

### Installation

```bash
git clone <your-repo-url>
cd tourdewonder-
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_JSONBIN_BIN_ID=your_bin_id_here
VITE_JSONBIN_API_KEY=your_api_key_here
```

Sign up at [JSONBin.io](https://jsonbin.io) to get your credentials for persistent review storage.

### Development

```bash
npm run dev
```

The app starts at `http://localhost:8080`.

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/          # shadcn/ui components
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── assets/          # Static assets
└── test/            # Test files
```

## Routes

| Path | Page |
|------|------|
| `/` | Home page with hero, destinations, deals, experiences |
| `/booking` | Booking form |
| `/refund-policies` | Refund and cancellation policies |
| `*` | 404 Not Found |

## Deployment

Open [Lovable](https://lovable.dev) and click Share → Publish, or deploy the `dist/` folder to any static host (Vercel, Netlify, etc.).

### Custom Domain

Navigate to Project → Settings → Domains in Lovable to connect a custom domain. [Learn more](https://docs.lovable.dev/features/custom-domain#custom-domain).
