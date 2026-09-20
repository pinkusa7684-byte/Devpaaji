import { 
  Target, 
  Layers, 
  Compass, 
  MapPin, 
  UserCheck, 
  Handshake, 
  ShieldCheck, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/content';

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export default function WhyChooseUs({ onOpenConsultation }: WhyChooseUsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-6 h-6 text-blue-700" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-700" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-700" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-700" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-blue-900" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-slate-800" />;
      default:
        return <Target className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">
            Principled Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why People Choose Carrier Craft Finserv
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Practical guidance grounded in reality. No inflated promises, no algorithmic automated black-boxes, and no conflicting agendas.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div 
              key={feature.id}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  “{feature.description}”
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                <span>Verified Core Value</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Banner */}
        <div className="mt-14 rounded-2xl bg-[#0B1528] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Transparency First
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Ready for straightforward, goal-centric support?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Whether you need assistance in Bilaspur or remote digital consultation, we are one message away.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <span>Schedule a Discussion</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
