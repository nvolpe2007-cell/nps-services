import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that updates og:image and twitter:image meta tags
 * to point to the app's opengraph image with the correct Replit domain.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      const baseUrl = getDeploymentUrl();
      if (!baseUrl) {
        log('[meta-images] no Replit deployment domain found, skipping meta tag updates');
        return html;
      }

      // Check if opengraph image exists in public directory
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const opengraphPngPath = path.join(publicDir, 'opengraph.png');
      const opengraphJpgPath = path.join(publicDir, 'opengraph.jpg');
      const opengraphJpegPath = path.join(publicDir, 'opengraph.jpeg');

      let imageExt: string | null = null;
      if (fs.existsSync(opengraphPngPath)) {
        imageExt = 'png';
      } else if (fs.existsSync(opengraphJpgPath)) {
        imageExt = 'jpg';
      } else if (fs.existsSync(opengraphJpegPath)) {
        imageExt = 'jpeg';
      }

      if (!imageExt) {
        log('[meta-images] OpenGraph image not found, skipping meta tag updates');
        return html;
      }

      const imageUrl = `${baseUrl}/opengraph.${imageExt}`;

      log('[meta-images] updating meta image tags to:', imageUrl);

      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );

      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );

      return html;
    },
  };
}

// The production domain, used whenever we're not in an actual Replit dev
// session. This app was migrated off Replit to Vercel; REPLIT_DEV_DOMAIN /
// REPLIT_INTERNAL_APP_DOMAIN describe a Replit preview URL, not where the
// site is actually deployed, and using them here baked a dead
// *.replit.app URL into every production og:image/twitter:image tag.
const PRODUCTION_SITE_URL = 'https://nandpservices.llc';

function getDeploymentUrl(): string | null {
  if (process.env.PUBLIC_SITE_URL) {
    const url = process.env.PUBLIC_SITE_URL.replace(/\/$/, '');
    log('[meta-images] using PUBLIC_SITE_URL:', url);
    return url;
  }

  // Only trust the Replit domain vars when actually running inside Replit
  // (REPL_ID is set there and nowhere else) -- e.g. local dev preview.
  if (process.env.REPL_ID) {
    if (process.env.REPLIT_INTERNAL_APP_DOMAIN) {
      const url = `https://${process.env.REPLIT_INTERNAL_APP_DOMAIN}`;
      log('[meta-images] using internal app domain:', url);
      return url;
    }

    if (process.env.REPLIT_DEV_DOMAIN) {
      const url = `https://${process.env.REPLIT_DEV_DOMAIN}`;
      log('[meta-images] using dev domain:', url);
      return url;
    }
  }

  log('[meta-images] no PUBLIC_SITE_URL or Replit domain found, using production default:', PRODUCTION_SITE_URL);
  return PRODUCTION_SITE_URL;
}

function log(...args: any[]): void {
  if (process.env.NODE_ENV === 'production') {
    console.log(...args);
  }
}
