declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GA_ADS_ID = "AW-17916018158";

export function trackCall(source: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { source });
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/phone_call`,
  });
}

export function trackText(source: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "text_message_click", { source });
  window.gtag("event", "conversion", {
    send_to: `${GA_ADS_ID}/text_message`,
  });
}

export function trackLandingCall(label: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "phone_call_click", { source: label });
  window.gtag("event", "conversion", { send_to: `${GA_ADS_ID}/${label}` });
}

export function trackLandingText(label: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "text_message_click", { source: label });
  window.gtag("event", "conversion", { send_to: `${GA_ADS_ID}/${label}` });
}
