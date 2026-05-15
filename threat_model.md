# Threat Model

## Project Overview

ANHAMA Trading PLC Website is a public-facing corporate website built with a React/Vite frontend and a Node.js/Express backend. The production server serves the static frontend and exposes a small public API for contact form submissions and an AI-backed customer chat assistant. The application is publicly reachable, unauthenticated for normal visitors, and depends on server-side environment secrets for outbound OpenAI requests.

Production scope assumptions for future scans:
- Only production-reachable code should be treated as in scope.
- `NODE_ENV=production` in deployed environments.
- Replit mockup sandbox and development-only tooling are out of scope unless proven reachable in production.
- TLS is handled by the platform.

## Assets

- **Contact submissions** — names, email addresses, service interests, and freeform inquiry text submitted by site visitors. This is business-sensitive customer data and may contain personal or confidential details.
- **OpenAI API credentials and quota** — server-side API key and billable model access used by the chat assistant. Abuse can create direct financial impact and service disruption.
- **Application availability** — the public website and chat assistant are customer-facing entry points. Resource exhaustion can degrade service for legitimate visitors.
- **Business content and company knowledge base** — company details exposed through the AI assistant and public pages. Integrity matters because incorrect responses can harm operations and reputation.

## Trust Boundaries

- **Browser to Express API** — all client input crossing into `/api/*` is untrusted and must be validated, rate-limited where appropriate, and never granted privileged access by default.
- **Express server to in-memory storage** — contact submissions and chat session state are trusted server-side data once accepted; unauthorized read access here exposes customer data.
- **Express server to OpenAI API** — the server uses privileged API credentials for outbound AI calls. Public endpoints that trigger those calls must prevent abuse and excessive consumption.
- **Public visitor to internal/admin data** — the site is meant for anonymous visitors, but any route exposing stored submissions or operational data crosses into a more trusted boundary and must be explicitly protected.
- **Production code to dev-only code** — files under `server/replit_integrations/` and Vite development middleware should usually be ignored unless they are actually registered by the production server.

## Scan Anchors

- **Production entry points:** `server/index.ts`, `server/routes.ts`, `client/src/main.tsx`
- **Highest-risk code areas:** `server/routes.ts` (public APIs), `server/index.ts` (global middleware/logging), `shared/schema.ts` (request validation)
- **Public surfaces:** `POST /api/contact`, `GET /api/contact-submissions`, `POST /api/chat`, `POST /api/chat/clear`
- **Dev-only or currently unregistered areas:** `server/replit_integrations/**`, Vite middleware in `server/vite.ts` when `NODE_ENV=development`

## Threat Categories

### Spoofing

The production app has no visitor authentication, so any route intended for staff or internal visibility must not rely on obscurity or frontend behavior. Internal data endpoints must require a real server-side authentication and authorization check before returning data.

### Tampering

All browser input is attacker-controlled. Contact form fields and chat messages must be validated server-side before storage or use in downstream model calls. The server must not trust client-generated identifiers as proof of session ownership or privilege.

### Information Disclosure

Stored contact submissions contain visitor PII and business inquiries. The application must ensure this data is never returned to anonymous users and that responses exposing operational or customer data are limited to properly authorized staff-only routes.

### Denial of Service

The AI chat endpoint triggers billable outbound work and stores per-session history in memory. Public endpoints that can consume expensive external services or accumulate server-side state must enforce request size limits, abuse controls, and cleanup of unbounded state.

### Elevation of Privilege

Any endpoint that exposes administrative or operational data must enforce server-side authorization. Public callers must not be able to reach staff-only functionality simply by knowing a URL or supplying arbitrary identifiers like `sessionId` values.
