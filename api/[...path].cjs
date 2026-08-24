// Vercel serverless entry point for every /api/* route.
//
// Plain .cjs requiring the pre-bundled Express app (built by
// script/build.ts into dist/app.cjs). This avoids handing Vercel's
// function compiler server/app.ts's raw TypeScript/ESM source directly:
// that source uses this project's "@shared/*" path alias and extensionless
// relative imports, which Vercel's compiler doesn't resolve the same way
// this project's own esbuild-based build does, and previously failed at
// runtime with ERR_MODULE_NOT_FOUND on every request.
//
// A catch-all rather than api/index.ts + a rewrite, because a rewrite hands
// the function the destination path (/api/index), while the Express routes
// are declared against the real paths (/api/contact, /api/reviews).
// Matching the function directly preserves req.url so Express routing works.
const { createApp } = require("../dist/app.cjs");

const app = createApp();

module.exports = (req, res) => app(req, res);
