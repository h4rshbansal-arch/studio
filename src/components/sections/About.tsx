import React from 'react';
import { Award, Users, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Academic Excellence",
      desc: "Headed by Surya Kant Sharma (MBA), bringing elite pedagogy to Agra."
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Elite Background",
      desc: "Faculty from top international schools ensuring world-class standards."
    },
    {
      icon: <BookOpen className="text-primary" size={24} />,
      title: "Focused Curriculum",
      desc: "Specialized coaching for Accountancy, Economics, and Business Studies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">The Academic Alliance</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              We Don't Just Teach; <br />
              <span className="text-muted-foreground">We Prepare You For The Future.</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Academic Alliance Institute is Agra's premier educational hub. Under the leadership of <span className="text-foreground font-semibold">Surya Kant Sharma</span>, we provide a seasoned approach to Commerce and Science coaching that bridges the gap between textbooks and real-world excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">MBA Led Pedagogy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Former Elite School Faculty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Commerce Specialization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">95%+ Score Strategy</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="premium-card p-8 rounded-2xl flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500 group-hover:text-primary-foreground">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
