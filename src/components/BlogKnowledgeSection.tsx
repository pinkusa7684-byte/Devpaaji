import { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Sparkles,
  Share2
} from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '../data/content';
import { KnowledgeArticle } from '../types';

interface BlogKnowledgeSectionProps {
  onOpenConsultation: () => void;
}

export default function BlogKnowledgeSection({ onOpenConsultation }: BlogKnowledgeSectionProps) {
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Investment', 'Mutual Funds', 'Tax & GST', 'Business Growth', 'Digital Marketing', 'Insurance Awareness'];

  const filteredArticles = KNOWLEDGE_ARTICLES.filter(art => {
    if (filterCategory === 'all') return true;
    return art.category.toLowerCase().includes(filterCategory.toLowerCase());
  });

  return (
    <section id="blog" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Financial & Business Literacy
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn Before You Decide
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Practical insights on systematic investing, tax compliance, small business growth, and risk management. No confusing jargon.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterCategory === cat
                    ? 'bg-[#0B1528] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All Guides' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Knowledge Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2.5 line-clamp-2">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">Educational</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">• {activeArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeArticle.title}
                </h2>
                
                <p className="text-sm text-slate-500 mt-2 italic">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Article Body */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="my-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-2">
                  Key Practical Takeaways
                </h4>
                <div className="space-y-2">
                  {activeArticle.keyTakeaways.map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reader Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Have questions about this topic?
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0B1528] text-white text-xs font-bold hover:bg-blue-950 transition-colors text-center"
                  >
                    Discuss With An Expert
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
