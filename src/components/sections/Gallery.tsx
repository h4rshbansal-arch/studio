import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

  return (
    <section className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4">Gallery</h2>
          <h3 className="text-4xl font-bold">Life at Academic Alliance</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5 cursor-pointer">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-125"
                data-ai-hint="institute life"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
