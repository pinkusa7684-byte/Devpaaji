import { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const quickPrompts = [
    "I need accounting & GST support in Bilaspur",
    "Want to start a monthly SIP in Mutual Funds",
    "Looking for digital marketing & website solutions",
    "Need health or life insurance guidance"
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || userMsg || COMPANY_INFO.whatsappDefaultMsg;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Mini Popup Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0B1528] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight">Carrier Craft Helpdesk</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • Bilaspur, CG
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 shadow-2xs leading-relaxed">
              👋 Namaste! Welcome to Carrier Craft Finserv. How can we guide your business or investment goals today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Quick Inquiries
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200/80 hover:border-emerald-400 hover:bg-emerald-50/50 text-[11px] text-slate-700 transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">{prompt}</span>
                  <Send className="w-3 h-3 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-2.5 py-1.5">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  className="w-full text-xs text-slate-800 bg-transparent focus:outline-hidden"
                />
                <button
                  onClick={() => handleSend()}
                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  aria-label="Send"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-slate-100 px-3 py-1.5 text-[10px] text-slate-500 text-center border-t border-slate-200">
            Powered by Carrier Craft Official Desk
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-700/25 transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-hidden"
        aria-label="Open WhatsApp Chat"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-emerald-600 rounded-full"></span>
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
}
