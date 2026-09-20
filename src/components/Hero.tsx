import { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Briefcase, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  FileCheck2,
  Lock,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenConsultation, onExploreServices }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'sip' | 'business'>('overview');

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Subtle background decorative grid and glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Messaging */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              CARRIER CRAFT FINSERV
              <span className="text-slate-400">|</span>
              <span className="text-amber-700 font-semibold lowercase">ARN-358845</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Build Better.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                Grow Smarter.
              </span>{' '}
              <br className="hidden sm:inline" />
              Protect What Matters.
            </h1>

            {/* Alternative Supporting Headline */}
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-700 leading-snug">
              One trusted platform for business support, digital growth, accounting, investments and insurance.
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              “Whether you're building a business, growing your wealth or protecting your future, we bring practical financial and business solutions together under one roof.”
            </p>

            {/* Location & Trust Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Grounded local expertise in Bilaspur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Goal-based, practical recommendations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Zero unsolicited spam or hype</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B1528] text-white font-semibold text-sm hover:bg-blue-950 transition-all shadow-md shadow-blue-950/15 active:scale-[0.98] group"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-sm border border-slate-300/80 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>Explore Services</span>
                <Compass className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Business & Financial Dashboard Visual with Floating Cards */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            
            {/* Subtle Floating Label Badge 1: Business Growth */}
            <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block leading-tight">Focus</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Business Growth</span>
              </div>
            </div>

            {/* Subtle Floating Label Badge 2: Investment */}
            <div className="absolute -top-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <PieChart className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block leading-tight">Wealth</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Investment & SIP</span>
              </div>
            </div>

            {/* Subtle Floating Label Badge 3: Insurance */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block leading-tight">Safety</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Insurance Cover</span>
              </div>
            </div>

            {/* Subtle Floating Label Badge 4: Digital Growth */}
            <div className="absolute -bottom-5 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block leading-tight">Reach</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Digital Growth</span>
              </div>
            </div>

            {/* Main Interactive Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-200 overflow-hidden relative z-10">
              
              {/* Dashboard Header Bar */}
              <div className="bg-[#0B1528] px-5 py-3.5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-semibold text-slate-300 ml-2">Carrier Craft Unified Console</span>
                </div>
                <span className="text-[10px] bg-slate-800 text-amber-400 font-mono px-2 py-0.5 rounded border border-slate-700">
                  AMFI ARN-358845
                </span>
              </div>

              {/* Console Mode Selector */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs font-medium text-slate-600">
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'overview'
                        ? 'bg-white text-blue-700 font-semibold shadow-sm border border-slate-200'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Integrated Plan
                  </button>
                  <button
                    onClick={() => setActiveTab('sip')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'sip'
                        ? 'bg-white text-blue-700 font-semibold shadow-sm border border-slate-200'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    SIP & Wealth
                  </button>
                  <button
                    onClick={() => setActiveTab('business')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTab === 'business'
                        ? 'bg-white text-blue-700 font-semibold shadow-sm border border-slate-200'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Business Compliance
                  </button>
                </div>
              </div>

              {/* Console View Body */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    {/* Top Metric Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-semibold text-blue-900">Disciplined Wealth</span>
                          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">Monthly SIP</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Compounding horizon</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-semibold text-amber-900">Family Safety</span>
                          <Shield className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">Protection Shield</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Life & Health Cover</div>
                      </div>
                    </div>

                    {/* Integrated Growth SVG Chart */}
                    <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-300">Goal Progression Trajectory</span>
                        <span className="text-amber-400 font-mono text-[11px]">Systematic Strategy</span>
                      </div>
                      
                      {/* SVG Curve */}
                      <div className="h-28 w-full relative pt-2">
                        <svg viewBox="0 0 300 90" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          {/* Grid lines */}
                          <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeDasharray="3 3" />
                          <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeDasharray="3 3" />
                          <line x1="0" y1="80" x2="300" y2="80" stroke="#334155" strokeDasharray="3 3" />
                          
                          {/* Fill */}
                          <path 
                            d="M 10 75 Q 80 70, 150 45 T 290 12 L 290 85 L 10 85 Z" 
                            fill="url(#curveGradient)" 
                          />
                          {/* Smooth Line */}
                          <path 
                            d="M 10 75 Q 80 70, 150 45 T 290 12" 
                            fill="none" 
                            stroke="#60A5FA" 
                            strokeWidth="3" 
                            strokeLinecap="round" 
                          />
                          {/* Indicator Points */}
                          <circle cx="10" cy="75" r="4" fill="#93C5FD" />
                          <circle cx="150" cy="45" r="4" fill="#60A5FA" />
                          <circle cx="290" cy="12" r="5" fill="#FBBF24" stroke="#0B1528" strokeWidth="2" />
                        </svg>
                        
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                          <span>Month 1: Foundation</span>
                          <span>Year 3: Expansion</span>
                          <span className="text-amber-300">Goal Realization</span>
                        </div>
                      </div>
                    </div>

                    {/* Integrated 4-pillar status preview */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <FileCheck2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700 truncate">GST & Accounting: Ready</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <Users className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span className="text-slate-700 truncate">Digital Reach: Active</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sip' && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                        Systematic Wealth Concept
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        The Compounding Advantage of Regular SIP
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Investing a fixed sum regularly averages market fluctuations, making volatility work for your portfolio over time.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50/80 border border-blue-100">
                        <span className="font-semibold text-blue-950">Mutual Fund Scheme Curation</span>
                        <span className="text-blue-700 font-medium">Goal Mapped</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-semibold text-slate-800">Paperless KYC Onboarding</span>
                        <span className="text-emerald-600 font-medium">Seamless Digital</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-semibold text-slate-800">AMFI Registration Verified</span>
                        <span className="text-amber-700 font-mono font-bold">ARN-358845</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-400 italic">
                      * Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.
                    </p>
                  </div>
                )}

                {activeTab === 'business' && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <div className="text-xs font-semibold text-emerald-800 mb-1 uppercase tracking-wider">
                        SME Compliance Calendar
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Structured Accounting & Tax Filing for Bilaspur Firms
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        Timely reconciliation, GST returns, and computerized books ready for audit and bank loan verification.
                      </p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-800 font-medium">GSTR-1 & GSTR-3B Filing</span>
                        <span className="text-emerald-700 font-semibold">On-Time Tracking</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-800 font-medium">Statutory Ledger Reconciliations</span>
                        <span className="text-blue-700 font-semibold">Verified</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-800 font-medium">Business Documentation Support</span>
                        <span className="text-slate-700 font-semibold">Comprehensive</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Action footer */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Ramayan Chowk, Bilaspur</span>
                  <button 
                    onClick={onOpenConsultation}
                    className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <span>Request Guidance</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
