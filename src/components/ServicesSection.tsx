import { useState } from 'react';
import { 
  Briefcase, 
  Share2, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceDetail: (service: ServiceItem) => void;
  onOpenConsultation: (serviceTitle: string) => void;
}

export default function ServicesSection({ 
  onSelectServiceDetail, 
  onOpenConsultation 
}: ServicesSectionProps) {
  const [filter, setFilter] = useState<'all' | 'business' | 'wealth' | 'learning'>('all');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'business-tax':
        return <Briefcase className="w-6 h-6 text-blue-700" />;
      case 'digital-marketing':
        return <Share2 className="w-6 h-6 text-indigo-700" />;
      case 'investment-wealth':
        return <TrendingUp className="w-6 h-6 text-emerald-700" />;
      case 'insurance':
        return <ShieldCheck className="w-6 h-6 text-amber-700" />;
      case 'courses':
        return <GraduationCap className="w-6 h-6 text-purple-700" />;
      default:
        return <Briefcase className="w-6 h-6 text-blue-700" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter(service => {
    if (filter === 'business') return service.id === 'business-tax' || service.id === 'digital-marketing';
    if (filter === 'wealth') return service.id === 'investment-wealth' || service.id === 'insurance';
    if (filter === 'learning') return service.id === 'courses';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Move Forward
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            “From growing your business to managing your finances, access practical services designed around your goals.”
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#0B1528] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Services ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'business'
                  ? 'bg-[#0B1528] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Business & Digital
            </button>
            <button
              onClick={() => setFilter('wealth')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'wealth'
                  ? 'bg-[#0B1528] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Wealth & Protection
            </button>
            <button
              onClick={() => setFilter('learning')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === 'learning'
                  ? 'bg-[#0B1528] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Courses & Skills
            </button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative"
              >
                {/* Top accent highlight bar on hover */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-6 sm:p-7">
                  
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-50/70 transition-all duration-300">
                      {getServiceIcon(service.id)}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100/80 text-slate-700 border border-slate-200/70">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-2">
                    <span className="text-xs font-bold text-blue-700 block mb-0.5 tracking-wide">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Inclusions
                    </span>
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 bg-white">
                  <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onSelectServiceDetail(service)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-semibold text-xs transition-colors"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-600" />
                      <span>Learn Details</span>
                    </button>

                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0B1528] hover:bg-blue-950 text-white font-semibold text-xs transition-colors shadow-sm active:scale-95"
                    >
                      <span>{service.ctaText.replace('Explore ', '')}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom advisory callout */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Need a custom combination of business compliance and investment strategy?</span>
          </div>
          <button
            onClick={() => onOpenConsultation('Comprehensive Strategy')}
            className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>Request Combined Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
