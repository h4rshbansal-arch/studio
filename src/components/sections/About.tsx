import React from 'react';
import { Award, Users, BookOpen, CheckCircle } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Experienced Faculty",
      desc: "Learn from industry experts with years of teaching excellence."
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Quality Education",
      desc: "Proven methodologies that ensure deep understanding of concepts."
    },
    {
      icon: <BookOpen className="text-primary" size={24} />,
      title: "Personal Attention",
      desc: "Small batch sizes focusing on individual student growth."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-4">The Institute</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Excellence Through <br />
              <span className="text-muted-foreground">Collaboration</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Academic Alliance Institute is a premier educational hub dedicated to providing top-tier coaching for students from 9th to 12th grades. Our mission is to bridge the gap between classroom learning and practical application, ensuring every student reaches their full potential.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Result-oriented approach</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Comprehensive study material</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Regular doubt-clearing sessions</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6">
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
