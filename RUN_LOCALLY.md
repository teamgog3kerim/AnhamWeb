# Running ANHAMA Trading PLC Website Locally

Everything you need to run this project on your own computer. No code changes required.

## 1. System prerequisites

- **Node.js** — v20.x (this project runs on Node v20.20.0). Anything `>= 20.0` should work.
- **npm** — v10.x (bundled with Node 20).
- **Git** — to clone the repo.
- **OS** — works on macOS, Linux, or Windows (use WSL or Git Bash on Windows — the dev script uses `NODE_ENV=development` inline, which Windows CMD/PowerShell doesn't parse natively).
  - If you're on plain Windows PowerShell, install `cross-env` or run via WSL/Git Bash.

Optional (only if you want to use a real Postgres database instead of the in-memory store):

- **PostgreSQL** (local install or a hosted one like Neon). The app currently uses in-memory storage, so this is not required to run.

## 2. Project scripts (from `package.json`)

- `npm run dev` — starts the dev server (Express + Vite on the same port). This is what you'll use day to day.
- `npm run build` — production build (`vite build` for the client + `esbuild` bundles the server into `dist/`).
- `npm start` — runs the production build (`node dist/index.js`).
- `npm run check` — TypeScript type check (`tsc`).
- `npm run db:push` — pushes the Drizzle schema to the database (only needed if you wire up Postgres).

## 3. Environment variables

Create a `.env` file (or export these in your shell). None are strictly required to boot, but features will be limited without them.

| Variable | Required? | Purpose |
|---|---|---|
| `PORT` | optional | Port the server listens on. Defaults to `5000`. |
| `NODE_ENV` | optional | Already set by the npm scripts (`development`/`production`). |
| `AI_INTEGRATIONS_OPENAI_API_KEY` | needed for chat feature | API key used by the `/api/chat` assistant (OpenAI). |
| `AI_INTEGRATIONS_OPENAI_BASE_URL` | optional | Custom OpenAI-compatible base URL. Leave unset to use the OpenAI default. |
| `DATABASE_URL` | only if you use Postgres / `db:push` | Postgres connection string. Not needed for in-memory mode. |
| `DEFAULT_OBJECT_STORAGE_BUCKET_ID` | only if using Replit Object Storage | Replit-specific; safe to omit locally. |
| `PRIVATE_OBJECT_DIR` | only if using Replit Object Storage | Same — Replit-only. |
| `PUBLIC_OBJECT_SEARCH_PATHS` | only if using Replit Object Storage | Same — Replit-only. |
| `REPL_ID` | n/a locally | Used by a dev-only Replit Vite plugin; leaving it unset is correct. |

Without `AI_INTEGRATIONS_OPENAI_API_KEY`, the site loads fine but the chat widget's AI responses will error.

## 4. Local run steps

```bash
git clone <your-repo-url>
cd <repo>
npm install
# optional: create .env with the variables above
npm run dev
```

Then open http://localhost:5000 — both the API (`/api/*`) and the React frontend are served from the same port.

## 5. Production-style run locally

```bash
npm run build
npm start          # serves dist/index.js on PORT (default 5000)
```

## 6. Key dependencies (so you know what gets pulled in)

- **Frontend**: React 18, Vite 6, Wouter (routing), TanStack Query, React Hook Form, Tailwind CSS 3, shadcn/Radix UI components, Framer Motion, Lucide & React Icons.
- **Backend**: Express 4, `tsx` (TS runner for dev), `esbuild` (prod bundler), `express-session`, `express-rate-limit`, Passport (local strategy), `ws`.
- **Data**: Drizzle ORM + `drizzle-kit`, `@neondatabase/serverless`, Zod, `drizzle-zod`. Currently in-memory storage is wired up — Postgres is optional.
- **AI**: `openai` SDK (used in `server/routes.ts` for the chat endpoint).
- **Replit-only dev plugins** (`@replit/vite-plugin-cartographer`, `@replit/vite-plugin-runtime-error-modal`, `@replit/object-storage`): only activate inside Replit (gated by `REPL_ID`). They're installed but won't affect a local run.

## 7. Things to know / gotchas

- The server **must** run on the same port as Vite — `server/index.ts` mounts Vite as middleware in dev. Don't try to start them separately.
- The Windows shell will choke on the `NODE_ENV=development tsx server/index.ts` script — use WSL, Git Bash, or prefix with `cross-env`.
- The `attached_assets/` folder holds the imported images (referenced via the `@assets/` Vite alias). Keep that folder when cloning.
- No database is required out of the box — submissions and chat history live in memory and reset on restart.
