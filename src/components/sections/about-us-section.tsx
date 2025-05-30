
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Briefcase, Phone } from 'lucide-react';

const founders = [
  {
    name: "Vikrant Shekhawat",
    title: "CTO & Founder",
    image: "https://roadmateindia.com/static/media/vikrant.beb4da9eb69f6c5f7c8b.png",
    dataAiHint: "founder portrait professional",
    bio: "As the technical architect behind RanVik, Vikrant drives our innovation. His expertise ensures a smooth, reliable, and modern platform, making your booking experience as efficient as your journey.",
    icon: Lightbulb,
  },
  {
    name: "Ranvijay Rathore",
    title: "CEO & Founder",
    image: "https://media-bom2-3.cdn.whatsapp.net/v/t61.24694-24/483920215_1548266625858913_3078914857260093990_n.jpg?ccb=11-4&oh=01_Q5Aa1gEIB7NQgzOfIGIyhwVR_V5vZV7bx88lytSjIdodHaaf7w&oe=684548DD&_nc_sid=5e03e0&_nc_cat=109",
    dataAiHint: "founder casual",
    bio: "With a vision for seamless travel experiences, Ranvijay co-founded RanVik, bringing entrepreneurial spirit and a deep understanding of customer needs. He spearheads our commitment to exceptional service and community engagement.",
    icon: Briefcase,
  },
];

export default function AboutUsSection() {
  return (
    <section id="about-us" className="pt-[15px] pb-8 md:pb-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Story: The Journey of RanVik
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Five years ago, two friends, Ranvijay Rathore and Vikrant Shekhawat, embarked on a mission to redefine local travel. What started as a passion project has now evolved into RanVik, bringing our trusted cab services to your fingertips online. We're committed to the same reliability and customer focus that has been our hallmark since day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((founder) => (
            <Card key={founder.name} className="flex flex-col items-center text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden">
              <CardHeader className="p-0 pt-8">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-md">
                  <Image
                    src={founder.image}
                    alt={`Portrait of ${founder.name}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                    data-ai-hint={founder.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-4">
                <CardTitle className="text-2xl font-semibold text-foreground mb-1 flex items-center justify-center">
                  <founder.icon className="mr-2 h-6 w-6 text-primary" />
                  {founder.name}
                </CardTitle>
                <p className="text-sm font-medium text-primary mb-3">{founder.title}</p>
                <CardDescription className="text-muted-foreground text-sm">
                  {founder.bio}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 w-full">
                <Button variant="outline" className="w-full hover:bg-primary/10 hover:text-primary">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
