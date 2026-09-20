export type ServiceCategory = 
  | 'business-tax'
  | 'digital-marketing'
  | 'investment-wealth'
  | 'insurance'
  | 'courses';

export interface ServiceItem {
  id: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  ctaText: string;
  badge?: string;
  gradient?: string;
  details: {
    overview: string;
    whoIsItFor: string[];
    keyDeliverables: string[];
    process: string[];
  };
}

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InvestmentOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  suitableFor: string;
}

export interface InsurancePillar {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  coverageTypes: string[];
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string;
}

export interface KnowledgeArticle {
  id: string;
  category: string;
  title: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  mobile: string;
  email: string;
  serviceInterest: string;
  message: string;
  preferredTime?: string;
}
