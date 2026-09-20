import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Receipt, 
  ShieldCheck, 
  BarChart, 
  Building2, 
  Calendar,
  Layers
} from 'lucide-react';

interface BusinessSupportSectionProps {
  onOpenConsultation: () => void;
}

export default function BusinessSupportSection({ onOpenConsultation }: BusinessSupportSectionProps) {
  const businessFeatures = [
    "Accounting Support",
    "GST & Tax Support",
    "Business Documentation",
    "Digital Presence",
    "Marketing Support",
    "Business Growth Guidance"
  ];

  return (
    <section id="business" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authentic Small-Business Analytics & Compliance Dashboard Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Main Visual Board */}
              <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Board Top Header */}
                <div className="bg-[#0B1528] px-5 py-3 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold tracking-tight">SME Financial & Operations Desk</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                    Bilaspur Hub
                  </span>
                </div>

                {/* Dashboard Inner Content */}
                <div className="p-6 space-y-5">
                  
                  {/* Ledger & Tax Filing Status Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>GST Filing Health</span>
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div className="text-sm font-bold text-slate-900">GSTR-3B Reconciled</div>
                      <span className="text-[10px] text-emerald-600 font-semibold inline-flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Compliant this quarter
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Books of Accounts</span>
                        <Receipt className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-sm font-bold text-slate-900">Computerized Ledger</div>
                      <span className="text-[10px] text-blue-600 font-semibold inline-flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Bank statement aligned
                      </span>
                    </div>
                  </div>

                  {/* Cashflow & Margin Overview Visualization */}
                  <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Revenue & Expense Tracking</span>
                      <span className="text-xs text-amber-400 font-mono">Monthly Overview</span>
                    </div>

                    {/* Bar Chart Representation */}
                    <div className="grid grid-cols-6 gap-2 items-end h-24 pt-2 border-b border-slate-800 pb-2">
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-blue-500/40 rounded-t h-[40%]"></div>
                        <span className="text-[9px] text-slate-400">Apr</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-blue-500/50 rounded-t h-[55%]"></div>
                        <span className="text-[9px] text-slate-400">May</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-blue-500/60 rounded-t h-[65%]"></div>
                        <span className="text-[9px] text-slate-400">Jun</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-blue-500/70 rounded-t h-[75%]"></div>
                        <span className="text-[9px] text-slate-400">Jul</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-blue-500/80 rounded-t h-[82%]"></div>
                        <span className="text-[9px] text-slate-400">Aug</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full bg-amber-400 rounded-t h-[94%] shadow-sm"></div>
                        <span className="text-[9px] text-amber-300 font-bold">Sep</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Input Tax Credit (ITC) Reconciled</span>
                      <span className="text-emerald-400 font-semibold">100% Documented</span>
                    </div>
                  </div>

                  {/* Statutory Document Checklist items */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Compliance Health Indicators
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        <span>Annual ITR Filing Ready</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Statutory MSME Records</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Micro note footer */}
                <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Customized for Indian SMEs & Traders</span>
                  <span className="text-blue-700 font-medium">Carrier Craft Finserv</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Content & Checklist */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              SME Ecosystem
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Helping Small Businesses <span className="text-blue-700">Work Smarter</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              “Running a business involves much more than selling a product or service. Accounting, taxation, compliance, digital marketing and financial planning all matter.”
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              We eliminate the friction of handling different vendors for your accounts, tax filing, web development, and promotional campaigns. Everything happens in one coordinated workflow.
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {businessFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1528] text-white font-semibold text-sm hover:bg-blue-950 transition-all shadow-md shadow-blue-950/10 active:scale-[0.98]"
              >
                <span>Get Business Support</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
