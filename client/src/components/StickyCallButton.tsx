import { Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function StickyCallButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <>
          <a
            href="tel:832-704-5525"
            className="flex items-center gap-2 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-105 font-bold text-sm tracking-wide animate-in slide-in-from-bottom-2 fade-in duration-200 bg-[#000000]"
            data-testid="call-button"
          >
            <Phone className="h-5 w-5" />
            Call
          </a>
          <a
            href="sms:832-704-5525"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 font-bold text-sm tracking-wide animate-in slide-in-from-bottom-2 fade-in duration-200"
            data-testid="text-button"
          >
            <MessageCircle className="h-5 w-5" />
            Text
          </a>
        </>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full shadow-lg hover:bg-black/90 transition-all hover:scale-105 font-bold text-sm tracking-wide"
        data-testid="sticky-call-button"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Phone className="h-5 w-5" />
        )}
        {isOpen ? "Close" : "Call or Text"}
      </button>
    </div>
  );
}
