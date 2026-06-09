---
name: zod v3/v4 split with drizzle-zod
description: How to keep types/runtime consistent when zod 3.25.x ships both v3 and v4, and drizzle-zod emits v4 schemas
---

# zod v3/v4 dual-package quirk

`zod` 3.25.x ships BOTH the legacy v3 API (default `import { z } from "zod"`) and the
new v4 API (`import { z } from "zod/v4"`). `drizzle-zod` 0.8.x `createInsertSchema`
returns **v4** schemas. Mixing a v4 schema with v3-imported `z` causes type errors
(missing `_parse`, `_type`, etc.) and runtime mismatches.

## Rule
Pick ONE zod major and use it consistently everywhere a given schema flows.
For this repo we standardized on **v4** because drizzle-zod outputs v4:
- `shared/schema.ts` → `import { z } from "zod/v4"`
- `server/routes.ts` → `import { z } from "zod/v4"` (so `error instanceof z.ZodError` matches the thrown error)

**Why:** the thrown `ZodError` class differs per major; a v3 `instanceof` check
silently fails against a v4 error, so validation falls through to a 500 instead of 400.

## v4 API differences that bite
- `ZodError.errors` (v3) → use `ZodError.issues` (v4).
- `@hookform/resolvers` 3.10.0 only ships a v3-typed `zodResolver` (export `./zod`,
  no `./standard-schema`). Passing a v4 schema breaks at runtime (it reads `.errors`).
  Fix used: a tiny custom react-hook-form `Resolver` that calls `schema.safeParse`
  and maps `result.error.issues` → RHF field errors. Casting `zodResolver(schema as any)`
  only hides the type error; it does NOT fix the runtime break.

## tsconfig
`target: "esnext"` is required for `Map`/`Set` iteration (`for...of` over `.entries()`)
without downlevel-iteration errors.
