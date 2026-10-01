import { useEffect } from "react";

// The site is served from www on Vercel (see vite-plugin-meta-images.ts and
// the recent canonical/schema/sitemap fix history) -- every canonical tag
// this hook writes must agree with that.
const SITE_URL = "https://www.nandpservices.llc";

interface PageSeo {
  /** Document title for this route. Keep to ~60 characters. */
  title: string;
  /** Meta description for this route. Keep to ~160 characters. */
  description: string;
  /** Route path, e.g. "/services" or "/blog/some-slug". */
  path: string;
  /** Set true for thin/duplicate pages (thank-you, 404) that shouldn't be indexed. */
  noindex?: boolean;
}

function setMetaTag(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// This is a client-rendered SPA (see vercel.json's catch-all rewrite to
// index.html), so every route serves the same static <title>/meta
// description/canonical/OG/Twitter tags baked into client/index.html. That
// left every page -- /services, /portfolio, /blog/*, etc. -- announcing the
// homepage's title and declaring the homepage as its own canonical URL
// (plus sharing the homepage's og:title/og:description on social previews),
// which tells search engines and social platforms the interior pages are
// duplicates of the homepage. This hook lets each page correct those tags
// once it mounts.
export function usePageSeo({ title, description, path, noindex }: PageSeo) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
    setMetaTag("robots", noindex ? "noindex, follow" : "index, follow");
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);
  }, [title, description, path, noindex]);
}
