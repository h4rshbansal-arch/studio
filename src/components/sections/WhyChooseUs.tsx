import React from 'react';
import { Search, RotateCcw, FileText, Target, Clock, ShieldCheck } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Search className="text-primary" />,
      title: "Personal Attention",
      desc: "Each student is monitored individually for growth."
    },
    {
      icon: <RotateCcw className="text-secondary" />,
      title: "Regular Tests",
      desc: "Weekly revisions and test series for performance analysis."
    },
    {
      icon: <FileText className="text-primary" />,
      title: "Study Material",
      desc: "Curated notes and material provided for all subjects."
    },
    {
      icon: <Target className="text-secondary" />,
      title: "Goal Oriented",
      desc: "Special focus on scoring 95%+ in board examinations."
    },
    {
      icon: <Clock className="text-primary" />,
      title: "Time Management",
      desc: "Students are taught to manage exam time efficiently."
    },
    {
      icon: <ShieldCheck className="text-secondary" />,
      title: "Safe Environment",
      desc: "Premium, comfortable and safe learning infrastructure."
    }
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Our Edge</h2>
          <h3 className="text-4xl font-bold">Why Join The Alliance?</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="premium-card p-8 rounded-3xl border border-white/5 hover:bg-card/80 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-background border border-white/5 flex items-center justify-center mb-6 shadow-inner">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
