import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt="Luxury Classroom"
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint="classroom luxury"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Admission Open 2026-27
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering Your <br />
            <span className="gold-gradient">Academic Future</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
            Premium Commerce & Maths Science Coaching for excellence. 
            Personalized attention from the industry's best faculty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg group h-14" asChild>
              <Link href="#admission">
                Apply Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14" asChild>
              <Link href="tel:+918218503127">
                <Phone className="mr-2" size={20} /> Call Now
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">1000+</span>
              <span>Success Stories</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
