import { 
  GraduationCap, 
  FileSpreadsheet, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Award
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenConsultation: (courseName: string) => void;
}

export default function CoursesSection({ onOpenConsultation }: CoursesSectionProps) {
  const courses = [
    {
      id: "digital-marketing-course",
      title: "Digital Marketing Course",
      tagline: "Hands-on Practical Campaign Mastery",
      icon: Share2,
      duration: "6 Weeks • Practical Sessions",
      summary: "Learn how to build brands, generate leads, optimize local SEO, and manage paid Meta & Google ad campaigns for real businesses.",
      modules: [
        "Local SEO & Google Business Profile Optimization",
        "Meta Ads (Facebook & Instagram) Campaign Structure",
        "Content Strategy & Social Media Community Building",
        "Landing Page Conversion Principles & WhatsApp Funnels"
      ],
      idealFor: "College students, business owners & freelance aspirants in Bilaspur",
      badge: "In-Demand Skill"
    },
    {
      id: "excel-course",
      title: "Excel Course for Professionals",
      tagline: "From Formulas to Automated Dashboards",
      icon: FileSpreadsheet,
      duration: "4 Weeks • Intensive Practical Lab",
      summary: "Master data management, bookkeeping reconciliations, advanced formulas, VLOOKUP, XLOOKUP, pivot tables, and interactive business reporting.",
      modules: [
        "Essential Business Formulas & Logical Functions",
        "VLOOKUP, XLOOKUP & Data Validation Techniques",
        "Pivot Tables, Slicers & Financial Summaries",
        "Automated MIS Reports & Chart Dashboards"
      ],
      idealFor: "Accounts staff, office managers, analysts & students",
      badge: "Career Booster"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
            Practical Skill Building
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Courses & Professional Learning
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            “Practical learning opportunities for people who want to build useful professional and digital skills.”
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="rounded-2xl border border-slate-200 hover:border-purple-300 bg-slate-50/60 hover:bg-white p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-purple-700" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-950 transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {course.summary}
                  </p>

                  {/* Modules */}
                  <div className="space-y-2 pt-4 border-t border-slate-200/80 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Syllabus Modules
                    </span>
                    {course.modules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-600">
                    <strong className="text-slate-800">Who should join: </strong>
                    {course.idealFor}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <button
                    onClick={() => onOpenConsultation(course.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1528] group-hover:bg-purple-950 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
                  >
                    <span>Enroll / Inquire About {course.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning guarantee callout */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-center text-xs text-purple-900 flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-purple-700 flex-shrink-0" />
          <span>
            Classes conducted with practical case studies and live doubt sessions at our Bilaspur center and online.
          </span>
        </div>

      </div>
    </section>
  );
}
