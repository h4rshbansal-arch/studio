import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, GraduationCap, Target } from 'lucide-react';

export function Faculty() {
  const facultyMembers = [
    {
      name: "Surya Kant Sharma",
      subject: "Commerce Specialist",
      subjects: "Accountancy, Business Studies, Economics",
      image: PlaceHolderImages.find(img => img.id === 'faculty-commerce')?.imageUrl,
      experience: "Seasoned Educator",
      credentials: [
        { icon: <GraduationCap size={16} />, text: "MBA in Marketing and Finance" },
        { icon: <Award size={16} />, text: "Former Faculty at Vijaya International School" },
        { icon: <Target size={16} />, text: "Result-Driven: Preparing you for the future" }
      ]
    },
    {
      name: "Dr. Anita Verma",
      subject: "Mathematics Expert",
      subjects: "Advanced Maths & Science Foundation",
      image: PlaceHolderImages.find(img => img.id === 'faculty-maths')?.imageUrl,
      experience: "12+ Years",
      credentials: [
        { icon: <GraduationCap size={16} />, text: "Ph.D in Applied Mathematics" },
        { icon: <Award size={16} />, text: "Former Senior Researcher" },
        { icon: <Target size={16} />, text: "Conceptual Clarity Specialist" }
      ]
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Our Mentors</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Learn from the Best</h3>
          <p className="text-muted-foreground text-lg">
            Guided by elite faculty members who bring academic excellence and years of proven results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {facultyMembers.map((member, idx) => (
            <div key={idx} className="premium-card rounded-[2rem] overflow-hidden group">
              <div className="grid sm:grid-cols-2">
                <div className="relative aspect-[4/5] sm:aspect-auto overflow-hidden">
                  <Image
                    src={member.image || ''}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="professional portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent sm:hidden" />
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                      {member.experience}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                  <p className="text-secondary font-semibold mb-6">{member.subject}</p>
                  
                  <div className="space-y-4">
                    {member.credentials.map((cred, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-0.5 text-primary">{cred.icon}</div>
                        <span>{cred.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mb-2">Expertise In</p>
                    <p className="text-foreground text-sm font-semibold">{member.subjects}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
