declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ADS_ID = "AW-17916018158";

// Google Ads conversion labels — found in Google Ads → Goals → Conversions → Tag setup
const CALL_CONVERSION_LABEL = "vEOUCL2n0_8bEO77gt9C";
const TEXT_CONVERSION_LABEL = "vEOUCL2n0_8bEO77gt9C";

/**
 * Fire when any phone call link is clicked.
 * @param source - Identifies which button was clicked (e.g. 'navbar', 'sticky', 'footer', 'blog', 'cta', 'contact', 'thank_you', 'concrete', 'commercial', 'residential')
 */
export function trackCall(source: string) {
  if (typeof window.gtag !== "function") return;
  // GA4 event — shows in Google Analytics with source breakdown
  window.gtag("event", "phone_call_click", { source });
  // Google Ads conversion
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/${CALL_CONVERSION_LABEL}`,
    value: 7.0,
    currency: "USD",
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
  // Google Ads conversion
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/${TEXT_CONVERSION_LABEL}`,
    value: 7.0,
    currency: "USD",
  });
}
