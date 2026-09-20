import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: (preferredService?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        'home', 'services', 'investment', 'business', 
        'digital-marketing', 'insurance', 'courses', 'why-us', 
        'how-it-works', 'about', 'blog', 'faq', 'contact'
      ];
      
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Investment & Wealth', href: '#investment', id: 'investment' },
    { label: 'Business & Tax', href: '#business', id: 'business' },
    { label: 'Digital Marketing', href: '#digital-marketing', id: 'digital-marketing' },
    { label: 'Insurance', href: '#insurance', id: 'insurance' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappDefaultMsg)}`;

  return (
    <>
      {/* Top Verified Compliance & Contact Strip */}
      <div className="bg-[#0B1528] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              AMFI Registered MFD • ARN-358845
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-slate-300 hidden md:inline">
              Serving Bilaspur, Chhattisgarh & Beyond
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-amber-400 transition-colors hidden sm:inline"
            >
              {COMPANY_INFO.email}
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              WhatsApp Help Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1528] via-[#1E293B] to-[#2563EB] flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-200">
              {/* Custom Monogram Emblem */}
              <div className="relative flex items-center justify-center">
                <span className="font-extrabold text-white text-base tracking-tight">CC</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute -top-1 -right-1"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-none">
                  Carrier Craft
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                  Finserv
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Business & Financial Support
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap text-[13px] ${
                    isActive 
                      ? 'text-blue-600 font-semibold bg-blue-50/70' 
                      : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200/60"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">Chat on WhatsApp</span>
              <span className="md:hidden">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl text-white bg-[#0B1528] hover:bg-blue-950 transition-all shadow-sm shadow-slate-900/10 hover:shadow active:scale-[0.98]"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden text-xs font-semibold px-2.5 py-1.5 rounded-lg text-white bg-[#0B1528]"
            >
              Consult
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="p-3 mb-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="text-xs">
                  <div className="font-semibold text-slate-900">Bilaspur Helpdesk</div>
                  <div className="text-slate-500 text-[11px]">{COMPANY_INFO.location}</div>
                </div>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                  ARN-358845
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0B1528] text-center shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Talk to an Expert
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
