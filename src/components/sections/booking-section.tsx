"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, CalendarCheck, Camera, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { heroImages } from '@/components/sections/hero-section';
import React, { useState } from 'react';
import { Car as CarIcon } from 'lucide-react';

export default function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ensure this variable name matches exactly what's in your .env.local
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (!formspreeEndpoint) {
      console.error(
        'Formspree endpoint (NEXT_PUBLIC_FORMSPREE_ENDPOINT) is not set or not loaded. ' +
        'Please ensure it is correctly defined in your .env.local file in the project root, ' +
        'and that you have RESTARTED your Next.js development server after adding/changing it. ' +
        `Current value: '${formspreeEndpoint}'`
      );
      toast({
        title: "Configuration Error",
        description: "The form submission service is not configured. Please ensure NEXT_PUBLIC_FORMSPREE_ENDPOINT is set in your .env.local file and restart your server.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Booking Submitted!",
          description: "Your booking request has been sent successfully.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        const responseData = await response.json();
        const errorMessage = responseData.errors?.map((err: { message: string }) => err.message).join(', ') || "An unknown error occurred.";
        console.error("Failed to send to Formspree:", responseData);
        toast({
          title: "Error Sending Booking",
          description: `Could not submit your booking: ${errorMessage}. Please try again.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting to Formspree:", error);
      toast({
        title: "Error Sending Booking",
        description: "Could not submit your booking. Please check your connection or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="booking" className="pt-[15px] pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Confirm Your Ride
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to go? Fill in your details and we'll get back to you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl rounded-xl overflow-hidden h-full flex flex-col">
              <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="text-2xl flex items-center">
                  <CalendarCheck className="mr-2 h-6 w-6 text-primary" />
                  Booking Details
                </CardTitle>
                <CardDescription>Please provide your contact and ride information.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <CardContent className="p-6 space-y-6 flex-grow">
                  <div>
                    <Label htmlFor="name" className="flex items-center mb-1"><User className="mr-2 h-4 w-4 text-muted-foreground" />Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="e.g., John Doe" required className="text-base" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-1"><Phone className="mr-2 h-4 w-4 text-muted-foreground" />Mobile Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="e.g., (123) 456-7890" required className="text-base" />
                  </div>
                  <div>
                    <Label htmlFor="pickupLocation" className="flex items-center mb-1"><MapPin className="mr-2 h-4 w-4 text-muted-foreground" />Pickup Location</Label>
                    <Input id="pickupLocation" name="pickupLocation" type="text" placeholder="e.g., Jaipur Airport" className="text-base" />
                    <p className="text-xs text-muted-foreground mt-1">Typically pre-filled from the estimator.</p>
                  </div>
                  <div>
                    <Label htmlFor="dropLocation" className="flex items-center mb-1"><MapPin className="mr-2 h-4 w-4 text-muted-foreground" />Drop-off Location</Label>
                    <Input id="dropLocation" name="dropLocation" type="text" placeholder="e.g., Hawa Mahal, Jaipur" className="text-base" />
                    <p className="text-xs text-muted-foreground mt-1">Typically pre-filled from the estimator.</p>
                  </div>
                  <div>
                    <Label htmlFor="carType" className="flex items-center mb-1">
                      <CarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      Car Type
                    </Label>
                    <select
                      id="carType"
                      name="carType"
                      required
                      className="text-base w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a car</option>
                      <option value="Swift Dzire">Swift Dzire</option>
                      <option value="Ertiga">Ertiga</option>
                      <option value="Innova Crysta">Innova Crysta</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                      <option value="Etios">Etios</option>
                      <option value="Kia Carens">Kia Carens</option>
                    </select>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Your booking details will be sent for confirmation.
                  </p>
                </CardContent>
                <CardFooter className="p-6 bg-muted/30">
                  <Button type="submit" className="w-full shadow-lg hover:shadow-primary/30 transition-shadow duration-300 text-base py-3" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" /> {isSubmitting ? 'Submitting...' : 'Send Booking Request'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl rounded-xl overflow-hidden h-full flex flex-col">
              <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="text-2xl flex items-center">
                  <Camera className="mr-2 h-6 w-6 text-primary" />
                  Travel in Style
                </CardTitle>
                <CardDescription>Comfortable and reliable rides, every time.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="space-y-4">
                  {heroImages.length > 0 && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md group hover:shadow-primary/20 transition-shadow duration-300">
                      <Image
                        src={heroImages[0].src}
                        alt={heroImages[0].alt}
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint={heroImages[0].dataAiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    {heroImages.length > 1 && (
                      <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md group hover:shadow-primary/20 transition-shadow duration-300">
                        <Image
                          src={heroImages[1].src}
                          alt={heroImages[1].alt}
                          fill
                          className="object-cover rounded-lg"
                          data-ai-hint={heroImages[1].dataAiHint}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                        />
                      </div>
                    )}
                    {heroImages.length > 2 && (
                       <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md group hover:shadow-primary/20 transition-shadow duration-300">
                        <Image
                          src={heroImages[2].src}
                          alt={heroImages[2].alt}
                          fill
                          className="object-cover rounded-lg"
                          data-ai-hint={heroImages[2].dataAiHint}
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground text-center pt-2">Images are illustrative of our journey inspiration.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

