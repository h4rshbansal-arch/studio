import React from 'react';
import { Calculator, BarChart3, Globe, Rocket, Landmark } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: "Commerce Stream",
      classes: "11th & 12th",
      subjects: ["Accountancy", "Economics", "Business Studies"],
      icon: <Landmark className="text-primary" size={32} />,
      color: "from-primary/20 to-transparent"
    },
    {
      title: "Mathematics & Science",
      classes: "9th to 12th",
      subjects: ["Advanced Maths", "Science Foundation"],
      icon: <Calculator className="text-secondary" size={32} />,
      color: "from-secondary/20 to-transparent"
    },
    {
      title: "Foundation Courses",
      classes: "9th & 10th",
      subjects: ["Board Preparation", "Conceptual Clarity", "Skill Dev"],
      icon: <Rocket className="text-primary" size={32} />,
      color: "from-primary/20 to-transparent"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Our Programs</h2>
          <h3 className="text-4xl font-bold mb-6">Designed for Success</h3>
          <p className="text-muted-foreground">
            We provide specialized coaching tailored to the academic needs of modern students, ensuring a strong foundation and competitive edge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="premium-card rounded-3xl p-1 group">
              <div className={`bg-gradient-to-b ${course.color} rounded-[1.4rem] p-8 h-full flex flex-col`}>
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <div className="mb-4">
                  <span className="text-sm font-bold text-secondary uppercase tracking-tighter">{course.classes}</span>
                  <h4 className="text-2xl font-bold mt-1">{course.title}</h4>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {course.subjects.map((sub, i) => (
                    <li key={i} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <button className="text-primary font-bold inline-flex items-center gap-2 group/btn">
                  View Curriculum <Rocket size={16} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
