import { useState, useId } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck,
  Calendar,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ConsultationModal({ 
  isOpen, 
  onClose, 
  preselectedService 
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'Business & Tax');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameId = useId();
  const mobileId = useId();
  const emailId = useId();
  const serviceId = useId();
  const timeId = useId();
  const messageId = useId();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappDirect = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Carrier Craft Finserv, I would like to schedule a consultation regarding ${service}. My name is ${fullName || 'Client'}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Ambient Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-amber-400 to-indigo-700"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900">
              Consultation Requested!
            </h3>
            
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              “Thank you. Our team in Bilaspur will get in touch with you shortly at <span className="font-semibold text-slate-800">{mobile || 'your phone number'}</span>.”
            </p>

            <div className="pt-2">
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect Faster via WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-500 font-semibold hover:text-slate-800"
              >
                Close this window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pr-6">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 mb-2">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Direct Expert Access
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Talk to an Expert
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your goal and receive practical guidance tailored to your scenario.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor={nameId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="e.g. Anand Verma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={mobileId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    id={mobileId}
                    type="tel"
                    required
                    placeholder="e.g. 98930 12345"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={serviceId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Area *
                  </label>
                  <select
                    id={serviceId}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900"
                  >
                    <option value="Business & Tax">Business & Tax</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Accounting & GST">Accounting & GST</option>
                    <option value="Investment & Wealth">Investment & Wealth</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Courses & Learning">Courses & Learning</option>
                    <option value="Comprehensive Strategy">Comprehensive Strategy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={timeId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    id={timeId}
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={messageId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  id={messageId}
                  rows={2}
                  placeholder="Any specific requirement or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 text-sm text-slate-900 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#0B1528] hover:bg-blue-950 text-white font-bold text-sm transition-all shadow-md active:scale-98 disabled:opacity-70"
                >
                  {loading ? (
                    <span>Scheduling...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Confirm Consultation Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential • Bilaspur Local Team</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
