import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import InvestmentSection from './components/InvestmentSection';
import BusinessSupportSection from './components/BusinessSupportSection';
import DigitalMarketingSection from './components/DigitalMarketingSection';
import InsuranceSection from './components/InsuranceSection';
import CoursesSection from './components/CoursesSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import BlogKnowledgeSection from './components/BlogKnowledgeSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { ServiceItem } from './types';
import { SERVICES_LIST } from './data/content';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('Business & Tax');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenConsultation = (preferredService?: string) => {
    if (preferredService) {
      setConsultationService(preferredService);
    }
    setIsConsultationOpen(true);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const service = SERVICES_LIST.find(s => s.id === serviceId);
    if (service) {
      setSelectedServiceDetail(service);
    } else {
      const el = document.getElementById(serviceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenConsultation={() => handleOpenConsultation('Comprehensive Business & Wealth')} 
          onExploreServices={handleExploreServices}
        />

        {/* 2. Trust Strip */}
        <TrustStrip onSelectService={handleSelectServiceById} />

        {/* 3. Services Section */}
        <ServicesSection 
          onSelectServiceDetail={(svc) => setSelectedServiceDetail(svc)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenConsultation={() => handleOpenConsultation('General Guidance')} />

        {/* 5. Investment & Wealth Section (Dark theme with SIP Calculator) */}
        <InvestmentSection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Business Support Section (Split layout with SME Analytics) */}
        <BusinessSupportSection onOpenConsultation={() => handleOpenConsultation('Business & Tax')} />

        {/* 7. Digital Marketing Section (Marketing Dashboard Visual) */}
        <DigitalMarketingSection onOpenConsultation={() => handleOpenConsultation('Digital Marketing')} />

        {/* 8. Insurance Section (3 Large Protection Pillars) */}
        <InsuranceSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. Courses & Learning Section */}
        <CoursesSection onOpenConsultation={handleOpenConsultation} />

        {/* 10. How It Works (4-step timeline) */}
        <HowItWorks onOpenConsultation={() => handleOpenConsultation('Goal Assessment')} />

        {/* 11. About Section (Bilaspur presence & local credentials) */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation('In-Person Bilaspur Meeting')} />

        {/* 12. Blog / Knowledge Section (with reader modal) */}
        <BlogKnowledgeSection onOpenConsultation={() => handleOpenConsultation('Educational Advice')} />

        {/* 13. FAQ Section (Accordion) */}
        <FaqSection onOpenConsultation={() => handleOpenConsultation('General Query')} />

        {/* 14. Contact / Consultation Form Section */}
        <ContactSection initialService={consultationService} />
      </main>

      {/* 15. Footer (with ARN-358845, compliance disclaimer, legal modal) */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedService={consultationService}
      />

      {/* Service Detail Deep-Dive Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenConsultation={(title) => {
          setSelectedServiceDetail(null);
          handleOpenConsultation(title);
        }}
      />
    </div>
  );
}
