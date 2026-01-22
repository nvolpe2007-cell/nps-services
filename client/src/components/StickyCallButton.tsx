import { Phone } from "lucide-react";

export function StickyCallButton() {
  return (
    <a
      href="tel:832-704-5525"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full shadow-lg hover:bg-black/90 transition-all hover:scale-105 font-bold text-sm tracking-wide"
      data-testid="sticky-call-button"
    >
      <Phone className="h-5 w-5" />
      Call or Text
    </a>
  );
}
