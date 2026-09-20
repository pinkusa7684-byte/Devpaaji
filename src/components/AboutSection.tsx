import { 
  MapPin, 
  Building, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle2, 
  Mail, 
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export default function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`;

  return (
    <section id="about" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Philosophy, Local Roots */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-blue-600" />
              About Carrier Craft Finserv
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              More Than a Service Provider.{' '}
              <span className="text-blue-700">A Long-Term Partner.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              “Carrier Craft Finserv brings multiple professional services together so individuals and small businesses don't have to navigate everything separately.”
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in Bilaspur, Chhattisgarh, we understand the real challenges faced by regional businesses, self-employed professionals, and growing families. Instead of disconnected advice from distant call centers, we provide grounded, accessible expertise across accounting, GST, investments, and risk protection.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed & Registered</span>
                </div>
                <p className="text-xs text-slate-600">
                  AMFI Registered Mutual Fund Distributor with Registration No. <strong className="font-mono text-slate-900">{COMPANY_INFO.arn}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Regional Footprint</span>
                </div>
                <p className="text-xs text-slate-600">
                  Deeply serving Bilaspur, surrounding Chhattisgarh districts, and expanding digitally across India.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1528] text-white font-semibold text-sm hover:bg-blue-950 transition-all shadow-md active:scale-95"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-sm border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Verified Office Location Card & Architectural Visual */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Contact Card */}
            <div className="bg-[#0B1528] text-white rounded-2xl p-7 shadow-xl border border-slate-800 space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                    Headquarters & Walk-In Office
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Bilaspur Office
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    <strong className="text-white block font-semibold">Physical Address:</strong>
                    {COMPANY_INFO.location}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block font-semibold">Official Email:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-300 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white block font-semibold">AMFI License Details:</strong>
                    <span className="font-mono text-amber-400">{COMPANY_INFO.arnTitle}</span>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Office Hours:</span>
                <span className="text-white font-medium">Mon – Sat (10:00 AM – 7:00 PM)</span>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 italic">
                Walk-ins welcome for in-person business consultations and KYC verifications.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
