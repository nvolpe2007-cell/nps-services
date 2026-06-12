import { Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { trackCall, trackText } from "@/lib/tracking";

export function StickyCallButton() {
  const [isOpen, setIsOpen] = useState(false);
  const preWrittenMessage = encodeURIComponent("I have a job for you!");

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3" data-track="sticky-call">
      {isOpen && (
        <>
          <a
            href="tel:832-226-4018"
            onClick={() => trackCall("sticky")}
            className="flex items-center gap-2 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-105 font-bold text-sm tracking-wide animate-in slide-in-from-bottom-2 fade-in duration-200 bg-red-600"
            data-testid="call-button"
          >
            <Phone className="h-5 w-5" />
            Call
          </a>
          <a
            href={`sms:832-226-4018?body=${preWrittenMessage}`}
            onClick={() => trackText("sticky_text")}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105 font-bold text-sm tracking-wide animate-in slide-in-from-bottom-2 fade-in duration-200"
            data-testid="text-button"
          >
            <MessageCircle className="h-5 w-5" />
            Text Us
          </a>
        </>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-105 font-bold text-sm tracking-wide"
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
