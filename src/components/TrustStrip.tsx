import { 
  Briefcase, 
  Share2, 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  ArrowRight
} from 'lucide-react';
import { TRUST_INDICATORS, COMPANY_INFO } from '../data/content';

interface TrustStripProps {
  onSelectService: (serviceId: string) => void;
}

export default function TrustStrip({ onSelectService }: TrustStripProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'business':
        return <Briefcase className="w-5 h-5 text-blue-700" />;
      case 'digital':
        return <Share2 className="w-5 h-5 text-indigo-700" />;
      case 'tax':
        return <Calculator className="w-5 h-5 text-emerald-700" />;
      case 'wealth':
        return <TrendingUp className="w-5 h-5 text-blue-900" />;
      case 'insurance':
        return <ShieldCheck className="w-5 h-5 text-amber-700" />;
      default:
        return <Briefcase className="w-5 h-5 text-blue-700" />;
    }
  };

  const mapToServiceId = (indicatorId: string) => {
    switch (indicatorId) {
      case 'business':
      case 'tax':
        return 'business-tax';
      case 'digital':
        return 'digital-marketing';
      case 'wealth':
        return 'investment-wealth';
      case 'insurance':
        return 'insurance';
      default:
        return 'business-tax';
    }
  };

  return (
    <section className="bg-slate-50/50 border-y border-slate-200/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
          <div>
            <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-widest block mb-1">
              Holistic Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              One Platform. Multiple Solutions.
            </h3>
          </div>
          
          {/* AMFI Registration highlight */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs text-slate-700 font-medium self-start md:self-auto">
            <Award className="w-4 h-4 text-amber-500" />
            <span>AMFI Registered MFD • <strong className="font-mono text-slate-900">ARN-358845</strong></span>
          </div>
        </div>

        {/* 5 Compact Trust/Service Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {TRUST_INDICATORS.map((indicator) => (
            <button
              key={indicator.id}
              onClick={() => onSelectService(mapToServiceId(indicator.id))}
              className="p-4 sm:p-5 rounded-2xl bg-white hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-200">
                  {getIcon(indicator.id)}
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {indicator.label}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {indicator.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center text-[11px] font-bold text-blue-700 opacity-80 group-hover:opacity-100">
                <span>Explore Solution</span>
                <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
