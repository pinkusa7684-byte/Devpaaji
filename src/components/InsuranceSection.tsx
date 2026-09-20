import { 
  HeartHandshake, 
  ShieldAlert, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Shield, 
  Info,
  Heart
} from 'lucide-react';
import { INSURANCE_PILLARS, COMPANY_INFO } from '../data/content';

interface InsuranceSectionProps {
  onOpenConsultation: (insuranceType?: string) => void;
}

export default function InsuranceSection({ onOpenConsultation }: InsuranceSectionProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'life':
        return <Heart className="w-8 h-8 text-rose-600 fill-rose-100" />;
      case 'health':
        return <ShieldAlert className="w-8 h-8 text-emerald-600" />;
      case 'general':
        return <ShieldCheck className="w-8 h-8 text-blue-600" />;
      default:
        return <Shield className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section id="insurance" className="py-20 bg-white relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-rose-600" />
            Safety Net Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect What Matters Most
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Before compounding wealth, ensure your family, health, and commercial assets are buffered against sudden disruptions.
          </p>
        </div>

        {/* 3 Large Reassuring Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {INSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Category */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(pillar.id)}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm font-semibold text-slate-700 italic mb-4">
                  “{pillar.tagline}”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Coverages Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Coverages
                  </span>
                  {pillar.coverageTypes.map((type, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <button
                  onClick={() => onOpenConsultation(pillar.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white group-hover:bg-[#0B1528] text-slate-800 group-hover:text-white border border-slate-300 group-hover:border-[#0B1528] font-semibold text-xs sm:text-sm transition-all shadow-xs"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Regulatory Statement as specified */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <span>
            <strong>Statutory Disclosure:</strong> {COMPANY_INFO.insuranceDisclaimer}
          </span>
        </div>

      </div>
    </section>
  );
}
