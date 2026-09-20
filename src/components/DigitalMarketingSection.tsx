import { useState } from 'react';
import { 
  BarChart3, 
  Globe, 
  Share2, 
  Search, 
  MousePointerClick, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Megaphone,
  Palette,
  Users,
  Eye,
  Info
} from 'lucide-react';

interface DigitalMarketingSectionProps {
  onOpenConsultation: () => void;
}

export default function DigitalMarketingSection({ onOpenConsultation }: DigitalMarketingSectionProps) {
  const [selectedChannel, setSelectedChannel] = useState<'all' | 'social' | 'seo' | 'web'>('all');

  const services = [
    { title: "Social Media", desc: "Targeted campaigns and organic branding on Meta and LinkedIn.", icon: Share2 },
    { title: "SEO", desc: "Local Bilaspur search visibility and ranking for high-intent keywords.", icon: Search },
    { title: "Website Development", desc: "High-performance, mobile-optimized business portals and landing pages.", icon: Globe },
    { title: "Content Strategy", desc: "Compelling brand storytelling and regional customer communication.", icon: Palette },
    { title: "Branding", desc: "Distinctive logo design, brand guidelines, and collateral.", icon: Sparkles },
    { title: "Digital Advertising", desc: "Calculated pay-per-click ads designed for genuine customer inquiries.", icon: Megaphone },
  ];

  return (
    <section id="digital-marketing" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            Digital Growth Engine
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Turn Your Digital Presence Into <span className="text-indigo-700">Business Growth</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            From local search rankings in Bilaspur to regional digital campaigns, we help you connect with people actively looking for your products and services.
          </p>
        </div>

        {/* Marketing Dashboard Visual (Clearly marked as illustrative UI) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 mb-14">
          
          {/* Dashboard Top Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-600 animate-pulse"></span>
                <h3 className="text-lg font-bold text-slate-900">Campaign Analytics Dashboard</h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Integrated lead tracking, multi-channel performance and visitor discovery
              </p>
            </div>

            {/* Illustrative Notice Badge as required by instructions */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
              <Info className="w-3.5 h-3.5 text-amber-600" />
              <span>Illustrative UI Dashboard Prototype</span>
            </div>
          </div>

          {/* 5 Core Metrics Display: Reach, Engagement, Leads, Conversions, Website Traffic */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
            
            {/* Metric 1: Reach */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-xs font-semibold">Total Reach</span>
                <Eye className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">84.2K</div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>Regional Targeted</span>
              </div>
            </div>

            {/* Metric 2: Engagement */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-xs font-semibold">Engagement</span>
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">12.8%</div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>Active Interactions</span>
              </div>
            </div>

            {/* Metric 3: Leads */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-xs font-semibold">Qualified Leads</span>
                <MousePointerClick className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">318</div>
              <div className="flex items-center gap-1 text-[11px] text-blue-600 font-semibold mt-1">
                <span>Verified Inquiries</span>
              </div>
            </div>

            {/* Metric 4: Conversions */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-xs font-semibold">Conversions</span>
                <BarChart3 className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">14.6%</div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                <span>Consultation Bookings</span>
              </div>
            </div>

            {/* Metric 5: Website Traffic */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 col-span-2 md:col-span-1">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span className="text-xs font-semibold">Website Traffic</span>
                <Globe className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">22.5K</div>
              <div className="flex items-center gap-1 text-[11px] text-indigo-600 font-semibold mt-1">
                <span>Organic + Paid</span>
              </div>
            </div>

          </div>

          {/* Interactive Flow Bar */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-slate-200 block">Search & Discovery Architecture</span>
                <span className="text-slate-400 text-[11px]">Rank on Google Maps & Search for high-value services in Chhattisgarh</span>
              </div>
            </div>
            <span className="text-amber-400 font-mono text-[11px] bg-slate-800 px-3 py-1 rounded">
              High Intent Lead Generation
            </span>
          </div>

        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-indigo-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-900 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0B1528] text-white font-semibold text-sm hover:bg-blue-950 transition-all shadow-md shadow-blue-950/10 active:scale-[0.98]"
          >
            <span>Grow Your Business Online</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
