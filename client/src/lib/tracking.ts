declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ADS_ID = "AW-17916018158";

// ─────────────────────────────────────────────────────────────────────────────
// REPLACE THESE with your real Google Ads conversion labels.
// To find your labels: Google Ads → Goals → Conversions → click a conversion →
// the "Tag setup" section shows the label (e.g. "AbCdEfGhI").
// ─────────────────────────────────────────────────────────────────────────────
const CALL_CONVERSION_LABEL = "REPLACE_WITH_CALL_LABEL";  // e.g. AbCdEfGhI
const TEXT_CONVERSION_LABEL = "REPLACE_WITH_TEXT_LABEL";  // e.g. XyZaBcDeF
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Fire when any phone call link is clicked.
 * @param source - Identifies which button was clicked (e.g. 'navbar', 'sticky', 'footer', 'blog', 'cta', 'contact', 'thank_you', 'concrete', 'commercial', 'residential')
 */
export function trackCall(source: string) {
  if (typeof window.gtag !== "function") return;
  // GA4 event — shows in Google Analytics with source breakdown
  window.gtag("event", "phone_call_click", { source });
  // Google Ads conversion — counts once you replace CALL_CONVERSION_LABEL above
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/${CALL_CONVERSION_LABEL}`,
  });
}

/**
 * Fire when any SMS text link is clicked.
 * @param source - Identifies which button was clicked (e.g. 'sticky_text', 'blog_text', 'contact', 'concrete_text', 'commercial_text', 'residential_text')
 */
export function trackText(source: string) {
  if (typeof window.gtag !== "function") return;
  // GA4 event — shows in Google Analytics with source breakdown
  window.gtag("event", "text_message_click", { source });
  // Google Ads conversion — counts once you replace TEXT_CONVERSION_LABEL above
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/${TEXT_CONVERSION_LABEL}`,
  });
}
