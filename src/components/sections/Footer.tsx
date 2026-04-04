
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'institute-logo');

  return (
    <footer className="bg-card pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src={logo?.imageUrl || ''}
                  alt="Academic Alliance Logo"
                  fill
                  className="object-contain"
                  data-ai-hint="academy logo"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Academic <span className="text-primary">Alliance</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Empowering students with quality education and personalized attention since 2010. Your success is our alliance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/h4rsh.bansal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Our Courses</Link></li>
              <li><Link href="#faculty" className="text-muted-foreground hover:text-primary transition-colors">Meet Faculty</Link></li>
              <li><Link href="#admission" className="text-muted-foreground hover:text-primary transition-colors">Admission Form</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Courses</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Commerce (11th & 12th)</li>
              <li className="text-muted-foreground">Mathematics (9th - 12th)</li>
              <li className="text-muted-foreground">Foundation Courses</li>
              <li className="text-muted-foreground">Science (9th & 10th)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Get updates on admission alerts and educational tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-white/5 rounded-lg px-4 py-2 flex-grow text-sm outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Academic Alliance Institute. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
            <span className="hidden md:inline">|</span>
            <span className="font-medium">
              Apps By <a href="https://instagram.com/h4rsh.bansal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all">Harsh Bansal</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
