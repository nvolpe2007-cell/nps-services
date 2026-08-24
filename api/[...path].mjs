// Vercel serverless entry point for every /api/* route.
//
// Plain .mjs importing the pre-bundled Express app (built by
// script/build.ts into dist/app.mjs). This avoids handing Vercel's function
// compiler server/app.ts's raw TypeScript/ESM source directly: that source
// uses this project's "@shared/*" path alias and extensionless relative
// imports, which Vercel's compiler doesn't resolve, and previously crashed
// every request with ERR_MODULE_NOT_FOUND.
//
// A catch-all rather than api/index + a rewrite, because a rewrite hands
// the function the destination path (/api/index), while the Express routes
// are declared against the real paths (/api/contact, /api/reviews).
// Matching the function directly preserves req.url so Express routing works.
import { createApp } from "../dist/app.mjs";

const app = createApp();

export default (req, res) => app(req, res);
