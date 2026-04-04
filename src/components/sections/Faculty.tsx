import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Faculty() {
  const facultyMembers = [
    {
      name: "Prof. Rajesh Sharma",
      subject: "Commerce (Accounts, Economics, BST)",
      image: PlaceHolderImages.find(img => img.id === 'faculty-commerce')?.imageUrl,
      experience: "15+ Years"
    },
    {
      name: "Dr. Anita Verma",
      subject: "Mathematics Expert",
      image: PlaceHolderImages.find(img => img.id === 'faculty-maths')?.imageUrl,
      experience: "12+ Years"
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Mentors</h2>
            <h3 className="text-4xl font-bold mb-4">Our Elite Faculty</h3>
            <p className="text-muted-foreground">
              Guided by the most experienced minds in the industry, our students achieve beyond expectations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {facultyMembers.map((member, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
                <Image
                  src={member.image || ''}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="professional portrait"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="bg-primary/20 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                      {member.experience}
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold mb-1">{member.name}</h4>
                  <p className="text-secondary font-medium tracking-wide">{member.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
