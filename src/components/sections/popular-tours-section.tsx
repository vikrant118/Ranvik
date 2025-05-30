import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { popularToursData } from '@/lib/tours';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function PopularToursSection() {
  return (
    <section id="popular-tours" className="pt-[15px] pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Popular Taxi Routes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Frequently booked routes for your convenience.
          </p>
        </div>
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl text-primary">
              One-Way Taxi Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {popularToursData.map((tour) => (
                <li key={tour.id} className="bg-muted/30 p-4 rounded-lg hover:bg-primary/10 transition-colors duration-200">
                  <Button variant="link" className="p-0 h-auto text-left w-full justify-start text-foreground hover:text-primary">
                    <tour.icon className="mr-2 h-5 w-5 text-primary/80" />
                    <span className="text-base">{tour.name}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
