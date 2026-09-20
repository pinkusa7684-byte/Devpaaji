import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export default function HowItWorks({ onOpenConsultation }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
            Clear, Transparent Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            A straightforward four-step process built around honest communication and practical execution.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Step Number with Gold Accent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-blue-900/20 group-hover:text-amber-500 transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:bg-amber-400 transition-colors"></span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-blue-800 mb-3">
                  {step.description}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-blue-700 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Phase {step.stepNumber} Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1528] text-white font-semibold text-sm hover:bg-blue-950 transition-all shadow-md shadow-blue-950/10 active:scale-[0.98]"
          >
            <span>Start Step 01: Tell Us Your Goal</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
