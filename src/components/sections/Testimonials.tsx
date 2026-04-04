import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Kumar",
      result: "98% in Commerce",
      text: "The faculty here is amazing. The conceptual clarity I got in Accountancy helped me top my school.",
      initials: "RK"
    },
    {
      name: "Sneha Gupta",
      result: "96% in Mathematics",
      text: "Personal attention and regular doubt sessions made Maths easy for me. Highly recommended!",
      initials: "SG"
    },
    {
      name: "Aryan Singh",
      result: "95% in Science",
      text: "The study materials are top-notch. It covered everything needed for both boards and competitive foundation.",
      initials: "AS"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold">Wall of Excellence</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="premium-card p-8 rounded-3xl flex flex-col h-full bg-card/40">
              <div className="mb-6 flex justify-between items-start">
                <Quote className="text-primary/20" size={40} />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-lg italic text-foreground/90 mb-8 flex-grow leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold">{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <span className="text-secondary text-sm font-semibold">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
