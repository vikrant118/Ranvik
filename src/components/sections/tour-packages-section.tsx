
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { tourPackagesData } from '@/lib/tours';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function TourPackagesSection() {
  return (
    <section id="tour-packages" className="pt-[15px] pb-16 md:pb-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Tour Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore curated tours designed for an unforgettable experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tourPackagesData.map((tour) => (
            <Card key={tour.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl">
              <CardHeader className="p-0">
                <div className="relative w-full h-56">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover rounded-t-xl"
                    data-ai-hint={tour.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-semibold text-foreground mb-2 flex items-center">
                  <tour.icon className="mr-2 h-6 w-6 text-primary" />
                  {tour.name}
                </CardTitle>
                {tour.description && (
                  <CardDescription className="text-muted-foreground mb-3">
                    {tour.description}
                  </CardDescription>
                )}
              </CardContent>
              <CardFooter className="p-6 bg-muted/30 rounded-b-xl border-t">
                <Button variant="outline" className="w-full hover:bg-primary/10">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
