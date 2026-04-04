import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Courses } from '@/components/sections/Courses';
import { Faculty } from '@/components/sections/Faculty';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { AdmissionForm } from '@/components/sections/AdmissionForm';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingActions } from '@/components/ui/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <AdmissionForm />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
