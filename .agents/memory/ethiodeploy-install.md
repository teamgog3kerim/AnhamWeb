---
name: EthioDeploy dependency installs
description: Workaround for repeated hosted npm ci failures in this project.
---

EthioDeploy's Nixpacks build repeatedly failed during `npm ci` with npm's generic "Exit handler never called" error, even after disabling audit and enabling retries. The project was switched to pnpm, which EthioDeploy documents as a lockfile-detected package manager; keep the pnpm lockfile and `packageManager` declaration aligned.

**Why:** npm installs failed in the hosted build after many minutes, while a clean pnpm install and the production build succeeded locally. Downgrading the Node runtime to an end-of-life major version is not the preferred workaround.

**How to apply:** when changing dependencies, regenerate `pnpm-lock.yaml` and preserve the declared pnpm version. Do not add a competing `package-lock.json`, which can cause the host to select npm again.
