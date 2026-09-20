import { 
  ServiceItem, 
  WhyFeature, 
  InvestmentOption, 
  InsurancePillar, 
  ProcessStep, 
  KnowledgeArticle, 
  FaqItem 
} from '../types';

export const COMPANY_INFO = {
  name: "Carrier Craft Finserv",
  tagline: "Build Better. Grow Smarter. Protect What Matters.",
  mainMessage: "Practical guidance for your business, money and future.",
  supportingMessage: "Carrier Craft Finserv brings business support, digital marketing, accounting, investment and insurance services together under one trusted platform. We work with individuals and small businesses across Bilaspur and beyond, offering practical guidance instead of one-size-fits-all advice — so every recommendation is built around your actual goals.",
  location: "Sarkanda, Chantideeh, Ramayan Chowk, Bilaspur, Chhattisgarh – 495001",
  cityState: "Bilaspur, Chhattisgarh",
  email: "support@carriercraft.in",
  phone: "+91 91798 12345", // Representative official desk line
  whatsappNumber: "919179812345",
  whatsappDefaultMsg: "Hello Carrier Craft Finserv, I would like to know more about your financial & business services.",
  arn: "ARN-358845",
  arnTitle: "AMFI Registered Mutual Fund Distributor · ARN-358845",
  mfDisclaimer: "Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully. Carrier Craft Finserv (ARN-358845) is an AMFI-registered Mutual Fund Distributor and does not provide personalized investment advisory services. Insurance is the subject matter of solicitation.",
  insuranceDisclaimer: "Insurance is the subject matter of solicitation.",
  copyright: "© 2026 Carrier Craft Finserv. All rights reserved."
};

export const TRUST_INDICATORS = [
  { id: "business", label: "Business Support", desc: "Compliance & Growth" },
  { id: "digital", label: "Digital Marketing", desc: "Online Visibility & Reach" },
  { id: "tax", label: "Accounting & Tax", desc: "GST & Documentation" },
  { id: "wealth", label: "Investment & Wealth", desc: "Mutual Funds & SIP" },
  { id: "insurance", label: "Insurance", desc: "Life, Health & General" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "business-tax",
    title: "Business & Tax Services",
    tagline: "Compliance, Accounting & Documentation",
    description: "Practical support for businesses with accounting, taxation, compliance and financial documentation.",
    items: [
      "Accounting support",
      "Tax services",
      "GST support",
      "Business compliance",
      "Financial documentation"
    ],
    ctaText: "Explore Business Services",
    badge: "Core Enterprise",
    details: {
      overview: "Managing a modern business demands constant compliance vigilance and systematic accounting records. Carrier Craft Finserv supports small enterprises, proprietary businesses, and growing companies in Bilaspur with thorough book-keeping, timely GST filing, and statutory documentation so founders can focus on their core operations.",
      whoIsItFor: [
        "Local traders, retailers, and wholesalers in Chhattisgarh",
        "Emerging startups and service agencies needing clean books",
        "Business owners seeking hassle-free annual tax and GST filing",
        "Enterprises requiring structured financial papers for bank loans or vendor tenders"
      ],
      keyDeliverables: [
        "Ledger maintenance and financial statement drafting",
        "Monthly and quarterly GST return computation and filing",
        "Income tax return preparation and advance tax estimations",
        "Statutory business registrations and licensing documentation",
        "Bank reconciliation and clean audit-ready archives"
      ],
      process: [
        "Initial assessment of current books and pending filings",
        "Document collection and computerized bookkeeping entry",
        "Verification of input tax credits and deductor reconciliations",
        "Timely submission with official acknowledgment receipts shared"
      ]
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Visibility, Branding & Customer Acquisition",
    description: "Build your digital presence, reach the right audience and turn online visibility into business growth.",
    items: [
      "Social media marketing",
      "Website solutions",
      "SEO",
      "Digital advertising",
      "Branding",
      "Content strategy"
    ],
    ctaText: "Explore Digital Marketing",
    badge: "Growth Engine",
    details: {
      overview: "Every local business and modern professional brand needs a clear, credible online footprint. We help traditional brick-and-mortar brands and digital-first services establish active customer touchpoints across search, social networks, and responsive websites.",
      whoIsItFor: [
        "Small businesses in Bilaspur looking to reach customers across the region",
        "Clinics, retail outlets, consultancies, and institutions building local brand trust",
        "Firms wanting a clean, high-speed business website that generates inquiries",
        "Brands looking for disciplined social media marketing without wasteful ad spend"
      ],
      keyDeliverables: [
        "Modern corporate and portfolio website development",
        "Targeted local SEO and Google Business Profile optimization",
        "Social media strategy for Facebook, Instagram, and LinkedIn",
        "Lead generation ad campaigns across Meta and Google Ads",
        "Brand visual assets, logo kits, and customer-facing graphics"
      ],
      process: [
        "Audience and competitive analysis within your market sector",
        "Creation of digital assets, creative content, and landing portals",
        "Structured campaign launch with targeted geographical parameters",
        "Transparent monthly performance review with clear visitor metrics"
      ]
    }
  },
  {
    id: "investment-wealth",
    title: "Investment & Wealth",
    tagline: "Disciplined Long-Term Wealth Planning",
    description: "Investment solutions designed around your financial goals, risk profile and long-term plans.",
    items: [
      "Mutual Funds",
      "SIP (Systematic Investment Plans)",
      "Stocks",
      "IPO support",
      "PMS (Portfolio Management Services)"
    ],
    ctaText: "Explore Investment",
    badge: "AMFI Registered",
    details: {
      overview: "Long-term wealth creation requires patience, discipline, and understanding one's risk threshold. As an AMFI-registered Mutual Fund Distributor (ARN-358845), Carrier Craft Finserv assists individuals, salaried professionals, and business owners in selecting suitable investment avenues without emotional guesswork.",
      whoIsItFor: [
        "First-time investors looking to start small with systematic monthly SIPs",
        "Families planning for long-term milestones like children's education or retirement",
        "Salaried professionals seeking tax-saving investment options under section 80C",
        "High net worth individuals exploring managed equity portfolios and PMS avenues"
      ],
      keyDeliverables: [
        "Goal-oriented mutual fund scheme curation across equity, debt & hybrid",
        "Automated monthly SIP setup with paperless KYC assistance",
        "Portfolio review and rebalancing suggestions according to market cycles",
        "Information and application assistance for mainboard and SME IPOs",
        "Regular consolidated account statement updates"
      ],
      process: [
        "Discussion on financial goals, investment horizon, and risk appetite",
        "Paperless KYC verification and investor account onboarding",
        "Selection of verified scheme categories matching your timeframe",
        "Ongoing tracking and annual goal re-assessment"
      ]
    }
  },
  {
    id: "insurance",
    title: "Insurance",
    tagline: "Comprehensive Risk & Health Protection",
    description: "Protect yourself, your family and your assets with suitable insurance solutions.",
    items: [
      "Life Insurance",
      "Health Insurance",
      "General Insurance"
    ],
    ctaText: "Explore Insurance",
    badge: "Protection First",
    details: {
      overview: "Financial planning remains incomplete without a sturdy safety net. Unforeseen medical emergencies or family disruptions can derail years of accumulated savings. We help you choose transparent term life policies, comprehensive family floater health plans, and asset coverages tailored to your exact life stage.",
      whoIsItFor: [
        "Family breadwinners needing adequate term life cover to safeguard dependents",
        "Individuals seeking cashless hospitalization cover without hidden co-pay clauses",
        "Senior citizens and parents requiring specialized medical cover",
        "Entrepreneurs needing motor, property, and shopkeeper risk insurance"
      ],
      keyDeliverables: [
        "Pure term life cover with critical illness rider analysis",
        "Comprehensive health insurance with wide hospital network access",
        "Commercial shop, warehouse, transit, and fire insurance",
        "Vehicle (two-wheeler & four-wheeler) policy renewal assistance",
        "Dedicated claim documentation guidance when emergencies arise"
      ],
      process: [
        "Review of existing liabilities, dependents, and medical history",
        "Comparison of policy wordings, exclusions, and waiting periods",
        "Proposal form assistance and medical checkup scheduling if required",
        "Policy issuance followed by lifetime assistance on renewals and claim papers"
      ]
    }
  },
  {
    id: "courses",
    title: "Courses & Learning",
    tagline: "Practical Digital & Professional Skill Building",
    description: "Practical learning opportunities for people who want to build useful professional and digital skills.",
    items: [
      "Digital Marketing Course",
      "Excel Course",
      "Practical exercises",
      "Real-world application"
    ],
    ctaText: "Explore Courses",
    badge: "Skill Development",
    details: {
      overview: "Theory without hands-on application holds little value in today's job and business environment. Our skill-building workshops and practical modules equip college students, job seekers, and entrepreneurs with actionable capabilities in practical business tools and modern digital marketing.",
      whoIsItFor: [
        "Students and graduates looking to enhance their resume with job-ready skills",
        "Small business owners who want to understand and manage their own marketing",
        "Accounts and office professionals wanting mastery over advanced Excel data functions",
        "Aspiring digital freelancers wanting hands-on campaign management training"
      ],
      keyDeliverables: [
        "Step-by-step practical modules on social media and digital campaign setup",
        "Hands-on spreadsheet training: formulas, VLOOKUP, pivot tables & dashboards",
        "Live case studies based on actual Indian business scenarios",
        "Course completion certificate and ongoing mentorship support"
      ],
      process: [
        "Course selection and schedule confirmation",
        "Interactive instruction with live practical assignments",
        "One-on-one doubt resolution and practical project work",
        "Practical evaluation and guidance on career or business application"
      ]
    }
  }
];

export const WHY_CHOOSE_US: WhyFeature[] = [
  {
    id: "goal-based",
    title: "Goal-Based Approach",
    description: "We focus on your actual objectives rather than giving one-size-fits-all recommendations.",
    iconName: "Target"
  },
  {
    id: "multiple-services",
    title: "Multiple Services, One Platform",
    description: "Business, digital, accounting, investment and insurance support in one place.",
    iconName: "Layers"
  },
  {
    id: "practical-guidance",
    title: "Practical Guidance",
    description: "Clear explanations and practical solutions without unnecessary complexity.",
    iconName: "Compass"
  },
  {
    id: "local-understanding",
    title: "Local Understanding",
    description: "Serving individuals and small businesses in Bilaspur and beyond with grounded insight.",
    iconName: "MapPin"
  },
  {
    id: "human-support",
    title: "Human Support",
    description: "Talk to a real person when you need guidance, not automated call centers.",
    iconName: "UserCheck"
  },
  {
    id: "long-term-relationship",
    title: "Long-Term Relationship",
    description: "Built around ongoing support rather than one-time transactions.",
    iconName: "Handshake"
  }
];

export const INVESTMENT_OPTIONS: InvestmentOption[] = [
  {
    id: "mf-sip",
    title: "Mutual Funds & SIP",
    subtitle: "Systematic Wealth Creation",
    description: "Start investing systematically and build long-term wealth. Benefit from rupee-cost averaging and compounding with flexible monthly contributions.",
    highlights: ["Systematic Investment Plans (SIP)", "Lump Sum Investments", "Tax-Saving ELSS Funds", "Portfolio Diversification"],
    suitableFor: "Disciplined long-term wealth accumulation for education, retirement, and major life goals."
  },
  {
    id: "stocks",
    title: "Stocks",
    subtitle: "Direct Equity Participation",
    description: "Explore equity investing with simplified support. Understand market fundamentals and navigate equity markets with clarity.",
    highlights: ["Demat & Trading Guidance", "Equity Market Orientation", "Fundamental Business Understanding", "Long-term Horizon Focus"],
    suitableFor: "Investors seeking capital growth through direct ownership in listed companies."
  },
  {
    id: "ipo",
    title: "IPO Support",
    subtitle: "New Market Listings",
    description: "Get support understanding and applying for IPO opportunities. Stay informed about upcoming public issues, issue pricing, and UPI application flows.",
    highlights: ["Prospectus Key Point Reviews", "UPI Mandate Assistance", "Mainboard & SME IPO Updates", "Application Tracking"],
    suitableFor: "Informed participants looking to participate in new company public listings."
  },
  {
    id: "pms",
    title: "PMS",
    subtitle: "Portfolio Management Services",
    description: "Explore portfolio management solutions where appropriate. Professional portfolio managers oversee customized equity strategies for qualified portfolios.",
    highlights: ["Professional Fund Management", "Personalized Investment Mandates", "Direct Stock Ownership Structure", "Detailed Performance Reporting"],
    suitableFor: "High net-worth individuals requiring specialized, actively managed portfolio strategies."
  }
];

export const INSURANCE_PILLARS: InsurancePillar[] = [
  {
    id: "life",
    title: "Life Insurance",
    icon: "HeartHandshake",
    tagline: "Financial protection for your loved ones.",
    coverageTypes: ["Term Life Insurance", "Return of Premium Options", "Critical Illness Add-ons", "Accidental Death Benefit"],
    description: "Ensure that your family's future financial needs, education plans, and household expenses remain secure even in your unforeseen absence."
  },
  {
    id: "health",
    title: "Health Insurance",
    icon: "ShieldAlert",
    tagline: "Support against unexpected medical expenses.",
    coverageTypes: ["Individual Health Cover", "Family Floater Plans", "Senior Citizen Healthcare", "Critical Illness Coverage"],
    description: "Protect your hard-earned savings against steep hospital bills, room rents, and medical procedures with cashless hospital network facilities."
  },
  {
    id: "general",
    title: "General Insurance",
    icon: "ShieldCheck",
    tagline: "Protection for your valuable assets and everyday risks.",
    coverageTypes: ["Motor Insurance (Car & Bike)", "Commercial Shop Insurance", "Fire & Special Perils Cover", "Transit & Liability Protection"],
    description: "Safeguard your vehicle, shop inventory, office equipment, and business assets against theft, accidents, natural perils, and accidental liabilities."
  }
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Tell Us Your Goal",
    description: "Share what you are trying to achieve.",
    details: "Whether it is starting a small business, filing GST returns, initiating your first SIP, or insuring your family, we begin by listening to your exact scenario."
  },
  {
    stepNumber: "02",
    title: "Understand Your Situation",
    description: "We understand your requirements and priorities.",
    details: "We assess your current documentation, timeline, risk threshold, or business stage to establish a realistic baseline."
  },
  {
    stepNumber: "03",
    title: "Explore Suitable Options",
    description: "Review relevant services and available solutions.",
    details: "You receive clear, transparent options with pros, cons, and timelines explained in plain Hindi or English without confusing jargon."
  },
  {
    stepNumber: "04",
    title: "Take the Next Step",
    description: "Move forward with clear information and support.",
    details: "We guide you through the paperwork, account setup, filing, or campaign rollout with continuous human support at every stage."
  }
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: "inv-basics",
    category: "Investment",
    title: "Investment Basics for Beginners",
    readTime: "4 min read",
    summary: "Understanding the difference between savings and investments, how inflation impacts your money, and setting realistic time horizons.",
    content: [
      "Keeping money in a conventional savings account often yields less than the inflation rate, which gradually diminishes your purchasing power over years.",
      "Investing involves allocating capital into productive assets such as equity, mutual funds, or debt instruments to generate inflation-beating returns over a suitable time frame.",
      "The golden rule of early investing: always keep an emergency fund equivalent to 3–6 months of household expenses in liquid form before deploying capital into market-linked instruments."
    ],
    keyTakeaways: [
      "Savings protect liquidity; investments fight inflation.",
      "Never invest emergency funds in equity or high-volatility assets.",
      "Time in the market matters far more than timing the market."
    ]
  },
  {
    id: "mf-sip-guide",
    category: "Mutual Funds",
    title: "Mutual Funds & SIP: The Power of Disciplined Investing",
    readTime: "5 min read",
    summary: "How rupee-cost averaging works in fluctuating markets and why starting small with regular monthly SIPs builds durable long-term habits.",
    content: [
      "A Systematic Investment Plan (SIP) is a method of investing a fixed sum periodically (usually monthly) in a mutual fund scheme of your choice.",
      "During market declines, your fixed installment buys more units, and when markets rise, it buys fewer units. Over several years, this averages out purchase costs significantly.",
      "SIP eliminates the stress of guessing market peaks and bottoms. Consistency and compounding over 5, 10, or 15 years are what create substantial corpus value."
    ],
    keyTakeaways: [
      "SIP encourages financial discipline without burdening cash flow.",
      "Automated bank deductions make investing hassle-free.",
      "Market dips are an opportunity for acquiring more units."
    ]
  },
  {
    id: "tax-gst-basics",
    category: "Tax & GST",
    title: "Essential Tax & GST Guidelines for Small Businesses",
    readTime: "6 min read",
    summary: "Basic compliance checklist, invoice standards, input tax credit principles, and filing deadlines every entrepreneur should monitor.",
    content: [
      "Maintaining proper documentation of business purchases with valid GSTIN is essential to claiming legitimate Input Tax Credit (ITC).",
      "Late filing of GSTR-3B or GSTR-1 invites unnecessary late fees and interest penalties that erode your operating profit margins.",
      "Reconciling sales registers with GSTR-2B before filing ensures your supplier has deposited the tax, preventing sudden departmental mismatch notices."
    ],
    keyTakeaways: [
      "Always obtain GST-compliant invoices with correct HSN/SAC codes.",
      "Regular monthly reconciliation prevents year-end audit discrepancies.",
      "Clean books make bank financing and overdraft sanctions significantly faster."
    ]
  },
  {
    id: "biz-growth",
    category: "Business Growth",
    title: "Structuring Your Business for Sustainable Growth",
    readTime: "4 min read",
    summary: "Moving from informal bookkeeping to structured financial systems that enable small enterprises to expand with confidence.",
    content: [
      "Many small business owners mix personal and business finances in a single bank account, making it difficult to calculate true monthly profitability.",
      "Separating business current accounts and taking a fixed owner's drawing establishes clear visibility over cash flow, inventory cycles, and debtor dues.",
      "Tracking gross margins per product line helps you phase out slow-moving inventory and double down on your most profitable offerings."
    ],
    keyTakeaways: [
      "Maintain complete separation between personal and company bank accounts.",
      "Monitor your accounts receivable and follow up on credit terms diligently.",
      "Review profit and loss statements every quarter with your accountant."
    ]
  },
  {
    id: "digital-mktg-basics",
    category: "Digital Marketing",
    title: "Digital Marketing Essentials for Regional Businesses",
    readTime: "5 min read",
    summary: "How local Bilaspur and regional enterprises can utilize search presence, local listings, and social channels to win customer trust.",
    content: [
      "Before spending on paid advertisements, verify that your Google Business Profile is fully updated with current phone numbers, store hours, location pins, and genuine customer photos.",
      "Regional customers value authenticity. Highlighting actual behind-the-scenes work, client deliveries, or local community events creates higher engagement than generic stock photos.",
      "A fast, mobile-friendly landing page with a direct WhatsApp chat button often converts 3x higher than complicated multi-step contact forms for local buyers."
    ],
    keyTakeaways: [
      "Google Business Profile is the highest-ROI local discovery asset.",
      "Mobile speed and instant WhatsApp connectivity drive local conversions.",
      "Consistent, helpful content builds durable reputation in your district."
    ]
  },
  {
    id: "insurance-awareness",
    category: "Insurance Awareness",
    title: "Insurance Awareness: Choosing the Right Protection",
    readTime: "4 min read",
    summary: "Why term insurance and health insurance should precede investment choices, and key policy exclusions to inspect before buying.",
    content: [
      "Insurance is risk protection, not an investment return mechanism. Mixing insurance with investment often yields inadequate life cover and mediocre returns.",
      "A pure term life insurance policy provides substantial financial cover for your dependents at an affordable annual premium.",
      "When evaluating health policies, look closely at room rent caps, pre-existing disease waiting periods, and the network of cashless hospitals in your city."
    ],
    keyTakeaways: [
      "Keep protection and investment separate for optimal financial health.",
      "Ensure your term life cover is at least 10–15 times your annual income.",
      "Disclose all existing medical conditions honestly to prevent claim rejections."
    ]
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "What services does Carrier Craft Finserv provide?",
    answer: "Carrier Craft Finserv provides integrated business support and financial services under one platform. Our offerings include Business Support & Accounting (bookkeeping, GST, tax filing, statutory documentation), Digital Marketing (SEO, social media, website solutions, advertising), Investment & Wealth (Mutual Funds, SIP, Stocks guidance, IPO support, PMS), Insurance (Life, Health, and General Insurance), and practical skill courses (Digital Marketing and Excel)."
  },
  {
    question: "Do you help small businesses?",
    answer: "Yes, small businesses, local retail shops, traders, and emerging entrepreneurs are at the core of what we do. We assist with initial registrations, regular GST and accounting maintenance, setting up digital presence, local SEO, and creating financial documentation necessary for business growth and banking requirements."
  },
  {
    question: "Can I get investment-related support?",
    answer: "Yes. Carrier Craft Finserv is an AMFI-registered Mutual Fund Distributor (ARN-358845). We assist clients in setting up paperless KYC, starting systematic investment plans (SIPs), selecting mutual fund schemes based on their goals and risk profile, and understanding equity, IPO, and PMS avenues. Note that we provide distribution and educational guidance, not personalized portfolio management advisory."
  },
  {
    question: "What types of insurance are available?",
    answer: "We assist with all major insurance categories: Life Insurance (term plans, critical illness add-ons), Health Insurance (individual, family floater, and senior citizen hospitalization coverage), and General Insurance (motor vehicle policies, shopkeeper packages, fire and property insurance). Insurance is the subject matter of solicitation."
  },
  {
    question: "Do you provide GST/accounting support?",
    answer: "Yes. We offer regular accounting support, computerized ledger maintenance, monthly and quarterly GST computation & return filing (GSTR-1, GSTR-3B), annual reconciliations, and income tax filing for business entities and individuals."
  },
  {
    question: "Do you provide digital marketing services?",
    answer: "Yes. We build responsive business websites, manage social media profiles, run targeted local search and advertising campaigns, and optimize Google Business profiles to help regional brands attract genuine customer inquiries."
  },
  {
    question: "Where is Carrier Craft Finserv located?",
    answer: "Our office is located at Sarkanda, Chantideeh, Ramayan Chowk, Bilaspur, Chhattisgarh – 495001. We serve clients across Bilaspur, surrounding districts of Chhattisgarh, and remotely across India through digital channels."
  },
  {
    question: "How can I talk to an expert?",
    answer: "You can click on 'Talk to an Expert' anywhere on this website to request a consultation, reach us via WhatsApp at +91 91798 12345, email us at support@carriercraft.in, or visit our office at Ramayan Chowk, Sarkanda, Bilaspur."
  }
];
