import { X, CheckCircle2, ArrowRight, UserCheck, Layers, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onOpenConsultation
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              {service.badge || 'Carrier Craft Service'}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {service.tagline}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h2>

          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {service.details.overview}
          </p>
        </div>

        {/* Content Tabs / Grids */}
        <div className="space-y-6 pt-2 border-t border-slate-100 text-sm">
          
          {/* Who is it for */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-blue-600" />
              Who Is This Best Suited For?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.details.whoIsItFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-600" />
              Key Scope & Deliverables
            </h4>
            <div className="space-y-2">
              {service.details.keyDeliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Execution Process */}
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-950 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Execution Methodology
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {service.details.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-md bg-white text-blue-700 font-bold font-mono text-[10px] flex items-center justify-center border border-blue-200 flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions about pricing or timelines in Bilaspur?
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0B1528] hover:bg-blue-950 text-white font-bold text-xs transition-colors shadow-md active:scale-95"
            >
              <span>Get Started With {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
