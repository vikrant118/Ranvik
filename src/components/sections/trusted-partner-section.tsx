
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Link as LinkIcon } from 'lucide-react'; // Using Handshake for partnership

export default function TrustedPartnerSection() {
  const partner = {
    name: "Jai Bhawani Cab",
    logoUrl: "https://jaibhawanicab.in/wp-content/uploads/2023/10/asdfg-removebg-preview-1.png",
    websiteUrl: "https://jaibhawanicab.in/",
    dataAiHint: "company logo",
  };

  return (
    <section id="trusted-partner" className="pt-[15px] pb-16 md:pb-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center justify-center">
            <Handshake className="mr-3 h-8 w-8 text-primary" />
            Our Trusted Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We collaborate with the best to provide you with exceptional service.
          </p>
        </div>

        <div className="max-w-lg mx-auto"> {/* Changed from max-w-md to max-w-lg */}
          <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden">
            <CardHeader className="p-6 bg-background/50 text-center">
              <div className="relative w-48 h-24 mx-auto mb-4"> {/* Adjusted size for typical logo aspect ratio */}
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain" // Use object-contain to ensure logo is fully visible
                  data-ai-hint={partner.dataAiHint}
                />
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">
                {partner.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-6">
                A valued partner in ensuring your travel is smooth and reliable.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full md:w-auto hover:bg-primary/10 hover:text-primary"
              >
                <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
