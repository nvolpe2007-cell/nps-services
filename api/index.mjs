// Vercel serverless entry point for every /api/* route.
//
// Plain .mjs importing the pre-bundled Express app (built by
// script/build.ts into dist/app.mjs). This avoids handing Vercel's function
// compiler server/app.ts's raw TypeScript/ESM source directly: that source
// uses this project's "@shared/*" path alias and extensionless relative
// imports, which Vercel's compiler doesn't resolve, and previously crashed
// every request with ERR_MODULE_NOT_FOUND.
//
// A fixed filename routed to via vercel.json's "/api/:match*" rewrite, not
// api/[...path].mjs: Vercel's bracket catch-all convention only reliably
// spread-matches multiple path segments inside Next.js projects. For a
// generic ("Other" framework) project it silently only matched a single
// segment, so any nested route (e.g. /api/admin/reviews) 404'd at the
// platform level without ever reaching this function -- confirmed on the
// equine-wellness-consulting project, which had the identical setup.
// The explicit rewrite's wildcard IS honored regardless of framework, and
// Vercel preserves the real incoming req.url (not the rewrite
// destination) for classic (req, res) Node.js functions like this one, so
// Express still sees the actual path and routes correctly.
import { createApp } from "../dist/app.mjs";

const app = createApp();

export default (req, res) => app(req, res);
