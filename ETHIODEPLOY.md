# Deploying on EthioDeploy

This project is configured as a Node.js web service. EthioDeploy's [Node.js deployment guide](https://ethiodeploy.com/deploy/nodejs) says it detects projects from GitHub and runs the install, build, and start scripts automatically; no Dockerfile or YAML is needed.

## Deploy steps

1. Push this repository to GitHub and connect it to EthioDeploy.
2. Create a **Web Service** project from the repository.
3. Leave the install, build, and start commands on automatic detection. If the dashboard asks for commands, use:
   - Install: `npm ci`
   - Build: `npm run build`
   - Start: `npm start`
4. Keep the service port platform-managed. The server reads `PORT` and listens on `0.0.0.0`.
5. If EthioDeploy offers a health-check path setting, use `/healthz`.

The Node.js engine is pinned to `22.x`, which matches EthioDeploy's documented default. The production build emits the client to `dist/public` and the server entry point to `dist/index.js`.

## Environment and data notes

- `AI_INTEGRATIONS_OPENAI_API_KEY` is optional for deployment, but required for AI chat. Without it, the website runs and `/api/chat` responds with HTTP 503 explaining that chat is not configured. `AI_INTEGRATIONS_OPENAI_BASE_URL` is optional.
- Contact submissions and chat sessions currently use in-memory storage. They will be lost when the service sleeps, restarts, or redeploys. Do not rely on the contact form for customer messages until persistent storage is connected.
- No database variable is needed to boot the current app. Adding EthioDeploy Postgres alone will not make the current in-memory storage persistent.
