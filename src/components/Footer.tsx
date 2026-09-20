import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUp, 
  Sparkles,
  Award,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string[] } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`;

  const openLegal = (type: 'privacy' | 'refund' | 'terms' | 'disclaimer') => {
    if (type === 'privacy') {
      setLegalModalContent({
        title: 'Privacy Policy',
        content: [
          'Carrier Craft Finserv respects your privacy and is committed to protecting any personal or financial information you provide through our website or offline consultations.',
          'Information collected (including your name, contact numbers, and service preferences) is used solely for the purpose of communicating with you regarding your consultation request, processing statutory documentation, or providing mutual fund distribution assistance.',
          'We do not sell, rent, or trade your personal contact details to third-party marketing telemarketers. All KYC documentation collected for mutual fund investments or insurance proposals is handled strictly under regulatory norms governed by SEBI, AMFI, and IRDAI.',
          'For any queries regarding your data or to request removal, you may write to us at support@carriercraft.in.'
        ]
      });
    } else if (type === 'refund') {
      setLegalModalContent({
        title: 'Refund Policy',
        content: [
          'Service Fees: Professional fees paid for accounting, taxation, and digital marketing services are subject to mutual agreement outlines provided before engagement. In cases where work has not commenced, refund requests are evaluated on a case-by-case basis.',
          'Courses & Workshops: Cancellations made at least 48 hours prior to the commencement of skill workshops are eligible for full or partial credit toward upcoming batches.',
          'Mutual Funds & Insurance: Investments in mutual fund units or insurance policy premiums are directly remitted to respective Asset Management Companies (AMCs) or Insurance Providers. Redemptions or policy cancellations follow statutory AMC cut-off timings and IRDAI Free-Look period guidelines.'
        ]
      });
    } else if (type === 'terms') {
      setLegalModalContent({
        title: 'Terms & Conditions',
        content: [
          'By accessing this website, you agree to comply with and be bound by the terms and conditions outlined herein.',
          'The content provided on this website is for general informational and educational purposes only and should not be construed as legal, tax, or personalized financial advice.',
          'Carrier Craft Finserv operates as an AMFI-registered Mutual Fund Distributor (ARN-358845). Distribution services are provided in accordance with the Code of Conduct prescribed by AMFI and SEBI regulations.',
          'All disputes are subject to the exclusive jurisdiction of the competent courts situated in Bilaspur, Chhattisgarh, India.'
        ]
      });
    } else {
      setLegalModalContent({
        title: 'Statutory Disclaimer',
        content: [
          'Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.',
          'Carrier Craft Finserv (ARN-358845) is an AMFI-registered Mutual Fund Distributor and does not provide personalized investment advisory services or guarantee returns.',
          'Past performance of any mutual fund scheme or market index does not guarantee future results. Net Asset Values (NAVs) fluctuate according to market conditions.',
          'Insurance is the subject matter of solicitation. Policy issuance is subject to underwriting norms established by the respective insurance companies.'
        ]
      });
    }
  };

  return (
    <footer className="bg-[#0B1528] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                CC
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Carrier Craft Finserv
              </span>
            </div>

            <p className="text-amber-400 font-semibold text-xs tracking-wide">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Integrated business support, digital marketing, accounting, tax compliance, disciplined investment distribution and insurance under one trusted platform.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-amber-400 text-xs font-mono font-medium">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_INFO.arnTitle}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#digital-marketing" className="hover:text-amber-400 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-amber-400 transition-colors">
                  Business & Tax
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-amber-400 transition-colors">
                  Accounting & GST
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-amber-400 transition-colors">
                  Investment & Wealth
                </a>
              </li>
              <li>
                <a href="#insurance" className="hover:text-amber-400 transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Professional Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Investment Avenues */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Investment
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#investment" className="hover:text-amber-400 transition-colors">
                  Mutual Funds & SIP
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-amber-400 transition-colors">
                  Stock Market Orientation
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-amber-400 transition-colors">
                  IPO Support
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-amber-400 transition-colors">
                  PMS Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Learning */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-amber-400 transition-colors">
                  Knowledge & Blog
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Coordinates */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px] text-slate-300">
                  {COMPANY_INFO.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-300 hover:underline text-[11px]">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-[11px]">
                  WhatsApp Helpdesk
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Financial Disclaimer Box as mandated */}
        <div className="my-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-400 text-[11px] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Statutory Regulatory Disclosure</span>
          </div>
          <p>
            “{COMPANY_INFO.mfDisclaimer}”
          </p>
        </div>

        {/* Bottom Bar: Legal links, Copyright, Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-500 text-[11px]">
          <div>
            {COMPANY_INFO.copyright}
          </div>

          {/* Legal Navigation Modals triggers */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button onClick={() => openLegal('privacy')} className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => openLegal('refund')} className="hover:text-slate-200 transition-colors">
              Refund Policy
            </button>
            <span>•</span>
            <button onClick={() => openLegal('terms')} className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => openLegal('disclaimer')} className="hover:text-slate-200 transition-colors">
              Disclaimer
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Legal Dialog Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              {legalModalContent.title}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalModalContent.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 rounded-xl bg-[#0B1528] text-white font-bold text-xs hover:bg-blue-950"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
