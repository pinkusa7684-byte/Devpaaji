import { useState, useId } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    mobile: '',
    email: '',
    serviceInterest: initialService || 'Business & Tax',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameInputId = useId();
  const mobileInputId = useId();
  const emailInputId = useId();
  const serviceSelectId = useId();
  const messageInputId = useId();

  const serviceOptions = [
    'Business & Tax',
    'Digital Marketing',
    'Accounting',
    'Investment',
    'Insurance',
    'Courses',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    formData.fullName 
      ? `Hello Carrier Craft Finserv, my name is ${formData.fullName}. I am interested in ${formData.serviceInterest}.`
      : COMPANY_INFO.whatsappDefaultMsg
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium CTA Banner */}
        <div className="rounded-3xl bg-[#0B1528] text-white p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Engagement
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have a Goal? <span className="text-amber-400">Let's Build the Right Plan.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              “Whether you need help with your business, digital presence, accounting, investments or insurance, talk to our team.”
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3">
              <a
                href="#consultation-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Contact Coordinates Grid */}
        <div id="consultation-form" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Modern Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Request a Consultation
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Fill in your details below and our team in Bilaspur will review your inquiry.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">Inquiry Received</h4>
                <p className="text-sm text-emerald-800 font-medium">
                  “Thank you. Our team will get in touch with you shortly.”
                </p>
                <p className="text-xs text-slate-500 pt-2">
                  Need immediate response? Reach us via WhatsApp directly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', mobile: '', email: '', serviceInterest: 'Business & Tax', message: '' });
                    }}
                    className="text-xs text-blue-700 font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor={mobileInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      id={mobileInputId}
                      type="tel"
                      required
                      placeholder="e.g. 98930 12345"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={emailInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor={serviceSelectId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    I am interested in: *
                  </label>
                  <select
                    id={serviceSelectId}
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 transition-all"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={messageInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Brief Requirements or Question
                  </label>
                  <textarea
                    id={messageInputId}
                    rows={4}
                    placeholder="Tell us about your business goals, investment timeframe, or compliance needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0B1528] hover:bg-blue-950 text-white font-bold text-sm transition-all shadow-md active:scale-98 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>Request a Consultation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-400">
                    We respect your privacy. No marketing spam or sharing of your phone number.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Regional Anchor */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h4 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                Contact Information
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Office Address</span>
                    <span className="text-slate-800 text-xs sm:text-sm leading-relaxed block mt-0.5">
                      {COMPANY_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Email Support</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-700 font-medium text-xs sm:text-sm hover:underline mt-0.5 block">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">WhatsApp Direct Chat</span>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-700 font-medium text-xs sm:text-sm hover:underline mt-0.5 block"
                    >
                      Instant Help Desk (+91 91798 12345)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Consulting Hours</span>
                    <span className="text-slate-800 text-xs sm:text-sm mt-0.5 block">
                      Monday to Saturday: 10:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* AMFI Registration Assurance */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-700">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>
                  AMFI Registered Mutual Fund Distributor • <strong>ARN-358845</strong>
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md space-y-3">
              <div className="flex items-center gap-2 font-bold text-base">
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>Need Quick Clarification?</span>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Connect with our local coordinator in Bilaspur directly over WhatsApp for document checklists, fee structure, or scheme information.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors"
              >
                <span>Chat Now on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
