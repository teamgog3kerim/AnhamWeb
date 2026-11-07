---
name: NPM dependency bootstrapping
description: Manifest and lockfile changes to watch for when Replit installs npm packages.
---

When the Replit package installer is used to bootstrap a missing npm dependency set, it may rewrite direct dependency ranges and the lockfile to currently available compatible versions, even when the project already declares those dependencies.

**Why:** an imported project may have no `node_modules`, and installing its full dependency list can produce broad package metadata changes unrelated to the startup fix.

**How to apply:** after installation, inspect `package.json` and `package-lock.json` for range changes, then verify the app and build against the resulting dependency set before delivering.
