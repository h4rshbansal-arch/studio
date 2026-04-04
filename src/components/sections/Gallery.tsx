
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Gallery() {
  const landscapeImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-landscape'));

  return (
    <section id="gallery" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest mb-4 text-sm">Our Campus</h2>
          <h3 className="text-4xl font-bold mb-6">Life at Academic Alliance</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our premium learning environment designed to foster creativity, focus, and academic excellence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {landscapeImages.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="p-1">
                    <Card className="overflow-hidden border-white/5 bg-transparent rounded-[2rem]">
                      <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                        <Image
                          src={img.imageUrl}
                          alt={img.description}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          data-ai-hint={img.imageHint}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white font-medium text-lg">{img.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-white/10 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-white/10 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
