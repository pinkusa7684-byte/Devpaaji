import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_LIST, COMPANY_INFO } from '../data/content';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export default function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const toggleAccordion = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter(i => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Carrier Craft, I have a question regarding your services.')}`;

  return (
    <section id="faq" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about our business support, tax, investments, and insurance services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-200 bg-slate-50/70 shadow-xs' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                    isOpen ? 'bg-blue-100 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Speak directly with our consulting desk in Bilaspur.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              Ask on WhatsApp
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-xl bg-[#0B1528] text-white text-xs font-bold hover:bg-blue-950 transition-colors"
            >
              Talk to an Expert
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
