import { useState, useId } from 'react';
import { 
  TrendingUp, 
  BarChart2, 
  Sparkles, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Calculator,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { INVESTMENT_OPTIONS, COMPANY_INFO } from '../data/content';

interface InvestmentSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export default function InvestmentSection({ onOpenConsultation }: InvestmentSectionProps) {
  const [selectedOption, setSelectedOption] = useState(INVESTMENT_OPTIONS[0].id);

  // SIP Calculator State (strictly educational illustration with disclaimers)
  const [sipMonthly, setSipMonthly] = useState<number>(5000);
  const [sipYears, setSipYears] = useState<number>(10);
  const [sipRate, setSipRate] = useState<number>(12); // standard expected long-term benchmark for calculation illustration

  const monthlyInputId = useId();
  const yearsInputId = useId();
  const rateInputId = useId();

  // Formula for SIP Future Value: P * [((1 + i)^n - 1) / i] * (1 + i)
  const calculateSip = () => {
    const i = sipRate / 100 / 12;
    const n = sipYears * 12;
    const totalInvested = sipMonthly * n;
    const futureValue = sipMonthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const estGrowth = Math.max(0, futureValue - totalInvested);

    return {
      totalInvested: Math.round(totalInvested),
      futureValue: Math.round(futureValue),
      estGrowth: Math.round(estGrowth),
    };
  };

  const { totalInvested, futureValue, estGrowth } = calculateSip();

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const activeOptionData = INVESTMENT_OPTIONS.find(o => o.id === selectedOption) || INVESTMENT_OPTIONS[0];

  return (
    <section id="investment" className="py-24 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Coins className="w-3.5 h-3.5" />
            AMFI Registered Distributor • ARN-358845
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Grow Your Wealth With a <span className="text-amber-400">Smarter Approach</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            “From your first SIP to building a diversified investment portfolio, explore solutions that can help you work toward your long-term financial goals.”
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {INVESTMENT_OPTIONS.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-800/95 border-amber-400/90 shadow-lg shadow-amber-400/10 translate-y-[-2px]' 
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-amber-400 tracking-wider">
                      {option.subtitle}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {option.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-amber-300 font-semibold' : 'text-slate-400'}>
                    {isSelected ? 'Viewing Breakdown' : 'Click to View'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Investment Avenues */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700 text-xs font-semibold">
                  Selected Category
                </span>
                <span className="text-amber-400 font-bold text-lg">
                  {activeOptionData.title}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeOptionData.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Ideal Context
                </span>
                <p className="text-xs text-slate-200">
                  {activeOptionData.suitableFor}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Key Focus Areas
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeOptionData.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                  Guidance & Paperless KYC
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  Plan for {activeOptionData.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Discuss scheme categories, horizon alignment, and paperless account setup with our AMFI-registered team in Bilaspur.
                </p>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenConsultation(activeOptionData.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
                <div className="text-[11px] text-slate-400 text-center">
                  Zero charges for initial investor orientation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Educational SIP Estimator Tool */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Learning Tool</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Understand The Power of Regular SIP
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Illustrative simulator showing how compounding works over time.
              </p>
            </div>
            <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
              Compounding Demonstration
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Monthly Investment Slider */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <label htmlFor={monthlyInputId} className="text-slate-300">Monthly Investment Amount</label>
                  <span className="text-amber-400 font-mono font-bold">{formatINR(sipMonthly)}</span>
                </div>
                <input
                  id={monthlyInputId}
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={sipMonthly}
                  onChange={(e) => setSipMonthly(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>₹500</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Time Period Slider */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <label htmlFor={yearsInputId} className="text-slate-300">Investment Horizon (Years)</label>
                  <span className="text-amber-400 font-mono font-bold">{sipYears} Years</span>
                </div>
                <input
                  id={yearsInputId}
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 Yr</span>
                  <span>10 Yrs</span>
                  <span>20 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* Expected Return Rate Slider */}
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-semibold mb-2">
                  <label htmlFor={rateInputId} className="text-slate-300">Expected Annual Rate (Illustration)</label>
                  <span className="text-amber-400 font-mono font-bold">{sipRate}% p.a.</span>
                </div>
                <input
                  id={rateInputId}
                  type="range"
                  min="6"
                  max="16"
                  step="0.5"
                  value={sipRate}
                  onChange={(e) => setSipRate(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>6% (Conservative)</span>
                  <span>12% (Equity benchmark)</span>
                  <span>16% (Optimistic)</span>
                </div>
              </div>
            </div>

            {/* Results Display Box */}
            <div className="lg:col-span-6 bg-[#0B1528] p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Total Invested</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-slate-200">
                    {formatINR(totalInvested)}
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">Estimated Returns</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">
                    {formatINR(estGrowth)}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-900/60">
                <span className="text-xs text-blue-300 uppercase tracking-wider font-semibold block">
                  Projected Corpus Value
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400 mt-1">
                  {formatINR(futureValue)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Based on ₹{sipMonthly.toLocaleString('en-IN')}/month over {sipYears} years at an assumed rate of {sipRate}%.
                </p>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed">
                * Note: The calculation above is for illustrative educational purposes only and does not represent promised returns. Mutual funds are subject to market conditions.
              </div>
            </div>
          </div>
        </div>

        {/* Visible, Elegant Risk Disclaimer as mandated */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 text-xs text-amber-300/90 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-300 font-semibold block mb-0.5">Regulatory Disclaimer:</strong>
            “Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Carrier Craft Finserv (ARN-358845) is an AMFI-registered Mutual Fund Distributor and does not promise returns or provide guaranteed profits.”
          </div>
        </div>

      </div>
    </section>
  );
}
