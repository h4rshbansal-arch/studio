import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
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
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Commerce & Maths Science Admissions 2026-27
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 tracking-tight">
            Master Commerce <br />
            <span className="gold-gradient">With The Best!</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Looking for clarity in <span className="text-foreground font-semibold">Accountancy, Business Studies, or Economics?</span> Join Commerce Classes by <span className="text-primary font-bold">Surya Kant Sharma</span> and learn from a seasoned educator.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="rounded-full px-10 text-lg font-bold group h-16 shadow-xl shadow-primary/20" asChild>
              <Link href="#admission">
                Enroll Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 text-lg font-bold h-16 border-white/10 hover:bg-white/5" asChild>
              <Link href="https://wa.me/918218503127">
                <MessageSquare className="mr-2" size={20} /> WhatsApp Us
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-12 text-sm font-medium text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-foreground">Elite</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">Faculty Background</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-foreground">100%</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">Result Oriented</span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-foreground">Agra</span>
              <span className="uppercase tracking-widest text-[10px] font-bold">Premier Location</span>
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
