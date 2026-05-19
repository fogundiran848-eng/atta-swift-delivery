# Deploying Attaqwa Logistics to Vercel

Lovable's in-editor preview runs on a Cloudflare-based sandbox, so the
committed `vite.config.ts` / `wrangler.jsonc` target Cloudflare. To host on
Vercel, apply the steps below **on your local clone** — don't commit them
back to Lovable or the preview will break.

> Tip: do this work on a `vercel` branch so Lovable keeps syncing `main`.

## 1. Clone the repo

Connect the project to GitHub from Lovable (chat **+** → GitHub → Connect
project), then:

```bash
git clone <your-repo-url>
cd <repo>
git checkout -b vercel
bun install
```

## 2. Swap Cloudflare for the Vercel preset

```bash
bun remove @cloudflare/vite-plugin @lovable.dev/vite-tanstack-config
bun add -d @vitejs/plugin-react @tanstack/router-plugin
```

Delete `wrangler.jsonc`.

Replace `vite.config.ts` with:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({ target: "vercel" }),
    react(),
  ],
});
```

## 3. Simplify the server entry

Replace `src/server.ts` with the default TanStack Start handler (Vercel
doesn't use the Cloudflare Worker `fetch` export):

```ts
export { default } from "@tanstack/react-start/server-entry";
```

## 4. Add a Vercel config

Create `vercel.json`:

```json
{
  "buildCommand": "bun run build",
  "framework": null
}
```

## 5. Deploy

```bash
bun add -g vercel
vercel            # first run links the project
vercel --prod     # deploy to production
```

Add any env vars (e.g. `VITE_*` Supabase keys from Lovable Cloud) in
Vercel → Project → Settings → Environment Variables.

## Ongoing workflow

- Keep editing in Lovable → it pushes to `main`.
- On local `vercel` branch: `git merge main`, then `vercel --prod`.
- Never merge `vercel` back into `main` — Lovable's preview needs the
  original Cloudflare config.
