// Vercel serverless entry point for every /api/* route.
//
// This is a catch-all function rather than `api/index.ts` + a rewrite on purpose:
// a rewrite would hand the function the destination path (`/api/index`), and the
// Express routes are declared against the real paths (`/api/contact`, `/api/reviews`).
// Matching the function directly preserves req.url so Express routing works.
//
// Static assets are served by Vercel from `dist/public` (see vercel.json); this
// function never serves the client build.
import { createApp } from "../server/app";

export default createApp();
