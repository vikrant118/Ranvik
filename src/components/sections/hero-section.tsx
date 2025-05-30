"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { siteConfig } from '@/config/site';
import { Button } from "@/components/ui/button";

export const heroImages = [
  { src: "https://cdn.pixabay.com/photo/2020/06/05/21/09/cultural-tourism-5264542_960_720.jpg", alt: "Indian cultural monument", dataAiHint: "india monument" },
  { src: "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg", alt: "Hawa Mahal palace", dataAiHint: "india palace" },
  { src: "https://cdn.pixabay.com/photo/2020/02/04/19/02/manali-4819132_960_720.jpg", alt: "Manali mountain landscape", dataAiHint: "mountain landscape" },
];

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="hero" className="relative bg-background overflow-hidden">
      <div className="relative w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="
                    flex 
                    aspect-[4/3] 
                    sm:aspect-[16/9] 
                    md:aspect-[2.5/1] 
                    items-center 
                    justify-center 
                    p-0 
                    overflow-hidden
                  "
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={768}
                    className="object-cover w-full h-full"
                    priority={index === 0}
                    data-ai-hint={image.dataAiHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background border-primary text-primary disabled:text-muted-foreground" />
          <CarouselNext className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/70 hover:bg-background border-primary text-primary disabled:text-muted-foreground" />
        </Carousel>

        {/* Overlay for Text and Buttons */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black/50 px-2 py-4 sm:p-4 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-white">
            Your Journey, <span className="text-primary">Simplified.</span>
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-md md:text-xl text-gray-100 max-w-xs sm:max-w-2xl">
            Welcome to {siteConfig.name}. Get instant fare estimates and book your ride with ease. Reliable, fast, and always at your service.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
              Book The Cab
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white bg-white/10 hover:bg-white hover:text-primary shadow-lg transition-colors duration-300"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-0" />
      <div className="hidden md:block absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-2xl opacity-30 z-0" />
      <div className="hidden md:block absolute -top-10 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-2xl opacity-30 z-0" />
    </section>
  );
}
