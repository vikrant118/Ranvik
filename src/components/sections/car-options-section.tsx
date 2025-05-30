"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ourCabsData } from '@/lib/cabs';
import { fareConfig } from '@/config/fare';

export default function CarOptionsSection() {
  // Scroll to the booking form section
  const handleBookNowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="our-cabs" className="pt-[15px] pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Cabs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our diverse fleet to match your travel needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {ourCabsData.map((car) => (
            <Card key={car.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl">
              <CardHeader className="p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover rounded-t-xl"
                    data-ai-hint={car.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-semibold text-foreground mb-1 flex items-center">
                  <car.icon className="mr-2 h-6 w-6 text-primary" />
                  {car.name}
                </CardTitle>
                {car.description && (
                  <p className="text-sm text-muted-foreground mb-2">{car.description}</p>
                )}
                <CardDescription className="text-muted-foreground flex items-center mb-1">
                  <Users className="mr-2 h-4 w-4" />
                  Seats up to {car.capacity} passengers
                </CardDescription>
                <CardDescription className="text-muted-foreground flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  Base Fare: {fareConfig.currencySymbol}{car.baseFarePerKm.toFixed(2)} / km
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-muted/30 rounded-b-xl border-t">
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:text-primary"
                  onClick={handleBookNowClick}
                >
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <p className="mt-8 text-center text-sm text-muted-foreground">
            Note: Base fares are indicative and may vary. Booking fee of {fareConfig.currencySymbol}{fareConfig.bookingFee.toFixed(2)} applies.
          </p>
      </div>
    </section>
  );
}
