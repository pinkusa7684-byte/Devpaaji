import React, { useState } from 'react';
import { X, Send, ChevronRight, PhoneCall } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [hasDismissedTooltip, setHasDismissedTooltip] = useState(false);

  const quickTopics = [
    { label: "Mutual Fund & SIP Planning", icon: "📈" },
    { label: "GST & Business Accounting", icon: "📑" },
    { label: "Health & Term Insurance", icon: "🛡️" },
    { label: "Digital Marketing & Growth", icon: "🚀" }
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || userMsg || COMPANY_INFO.whatsappDefaultMsg;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside 
      aria-label="WhatsApp Quick Contact" 
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none select-none"
    >
      {/* Floating Chat Box Panel */}
      {isOpen && (
        <div 
          className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-[390px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-header-title"
        >
          {/* Header Bar - Brand WhatsApp Emerald with Carrier Craft identity */}
          <div className="bg-[#075E54] px-4 py-3.5 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <div id="whatsapp-header-title" className="text-sm font-bold tracking-tight text-white leading-tight">
                  Carrier Craft Desk
                </div>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1.5 mt-0.5 font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Typically replies in minutes • Bilaspur</span>
                </div>
              </div>
            </div>

            <button
              id="whatsapp-close-btn"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-hidden"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Content Body */}
          <div className="p-4 space-y-3.5 bg-[#EFEAE2]/35 text-xs">
            
            {/* Advisor Message Bubble */}
            <div className="relative bg-white p-3.5 rounded-2xl rounded-tl-xs border border-slate-200/80 shadow-xs text-slate-800 space-y-1.5 max-w-[92%]">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="font-bold text-slate-900">Carrier Craft Finserv</span>
                <span className="text-[10px] text-slate-400">AMFI ARN-358845</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Namaste! 🙏 Welcome to Carrier Craft. How can our Bilaspur desk help with your financial goals or business operations today?
              </p>
              <div className="text-[10px] text-slate-400 text-right font-mono">
                Just now
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block px-1">
                Select inquiry topic
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {quickTopics.map((topic, i) => (
                  <button
                    key={i}
                    id={`whatsapp-topic-chip-${i}`}
                    onClick={() => handleSend(`Hello Carrier Craft, I am interested in ${topic.label}. Please share details.`)}
                    className="w-full text-left px-3 py-2 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/70 text-xs font-medium text-slate-800 transition-all flex items-center justify-between group shadow-2xs active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-sm">{topic.icon}</span>
                      <span className="truncate">{topic.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input Message Form */}
            <div className="pt-1.5">
              <div className="flex items-center gap-2 bg-white border border-slate-300/90 rounded-xl p-1.5 shadow-2xs focus-within:border-[#25D366] focus-within:ring-2 focus-within:ring-[#25D366]/20 transition-all">
                <input
                  id="whatsapp-custom-input"
                  type="text"
                  placeholder="Type message to chat on WhatsApp..."
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  className="w-full text-xs text-slate-800 placeholder-slate-400 bg-transparent px-2.5 py-1 focus:outline-hidden"
                />
                <button
                  id="whatsapp-send-msg-btn"
                  onClick={() => handleSend()}
                  className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xs transition-all active:scale-95 flex items-center justify-center focus:outline-hidden"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Direct Call Option */}
          <div className="bg-slate-50 px-4 py-2.5 text-[11px] text-slate-600 flex items-center justify-between border-t border-slate-200">
            <span className="text-slate-500">Need instant voice call?</span>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-800"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Elements (Button + Optional Help Bubble) */}
      <div className="pointer-events-auto flex items-center gap-3">
        
        {/* Subtle Greeting Bubble on desktop (dismissible) */}
        {!isOpen && !hasDismissedTooltip && (
          <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-slate-200/90 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Need advice? Chat on WhatsApp</span>
            <button 
              onClick={() => setHasDismissedTooltip(true)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full ml-1"
              aria-label="Dismiss message"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Main WhatsApp Floating Action Button */}
        <button
          id="floating-whatsapp-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-emerald-700/30 transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-400/30"
          aria-label={isOpen ? "Close WhatsApp chat" : "Chat on WhatsApp with Carrier Craft"}
        >
          {/* Subtle Ripple/Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 group-hover:opacity-40 animate-ping pointer-events-none"></span>

          {/* Official WhatsApp Logo Icon */}
          <div className="relative">
            <WhatsAppIcon className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-[#25D366] rounded-full"></span>
          </div>

          {/* Label (Responsive: Icon on tiny screens, icon+text on regular) */}
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-1">
            WhatsApp Desk
          </span>
        </button>
      </div>
    </aside>
  );
}
