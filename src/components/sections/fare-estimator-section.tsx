
"use client";

import { useState, useRef, type LegacyRef } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Car, Milestone, ArrowRight, RefreshCw, DollarSign, Map as MapIcon } from 'lucide-react';
import { ourCabsData } from '@/lib/cabs'; // Updated import
import type { CarType } from '@/types';
import { fareConfig } from '@/config/fare';
import { useToast } from "@/hooks/use-toast";
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const fareSchema = z.object({
  pickupLocation: z.string().min(3, { message: "Pickup location must be at least 3 characters." }),
  dropLocation: z.string().min(3, { message: "Drop location must be at least 3 characters." }),
  carTypeId: z.string({ required_error: "Please select a car type." }),
  distance: z.coerce.number().min(0.1, { message: "Distance must be at least 0.1 km." }),
});

type FareFormData = z.infer<typeof fareSchema>;

const libraries: ("places")[] = ['places']; // Explicitly type if needed, e.g., const libraries: ("places" | "drawing")[] = ['places'];


export default function FareEstimatorSection() {
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [selectedCarDetails, setSelectedCarDetails] = useState<CarType | null>(null);
  const { toast } = useToast();
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const form = useForm<FareFormData>({
    resolver: zodResolver(fareSchema),
    defaultValues: {
      pickupLocation: '',
      dropLocation: '',
      distance: undefined,
      carTypeId: undefined,
    },
  });

  const onLoadPickup = (autocomplete: google.maps.places.Autocomplete) => {
    pickupAutocompleteRef.current = autocomplete;
  };

  const onLoadDrop = (autocomplete: google.maps.places.Autocomplete) => {
    dropAutocompleteRef.current = autocomplete;
  };

  const onPlaceChangedPickup = () => {
    if (pickupAutocompleteRef.current) {
      const place = pickupAutocompleteRef.current.getPlace();
      if (place && place.formatted_address) {
        form.setValue('pickupLocation', place.formatted_address);
      } else if (place && place.name) {
        form.setValue('pickupLocation', place.name);
      }
    }
  };

  const onPlaceChangedDrop = () => {
    if (dropAutocompleteRef.current) {
      const place = dropAutocompleteRef.current.getPlace();
       if (place && place.formatted_address) {
        form.setValue('dropLocation', place.formatted_address);
      } else if (place && place.name) {
        form.setValue('dropLocation', place.name);
      }
    }
  };

  const onSubmit: SubmitHandler<FareFormData> = (data) => {
    const selectedCar = ourCabsData.find(car => car.id === data.carTypeId); // Use ourCabsData
    if (selectedCar) {
      const fare = (selectedCar.baseFarePerKm * data.distance) + fareConfig.bookingFee;
      setEstimatedFare(fare);
      setSelectedCarDetails(selectedCar);
      toast({
        title: "Fare Estimated!",
        description: `Your estimated fare is ${fareConfig.currencySymbol}${fare.toFixed(2)}.`,
      });
    } else {
      toast({
        title: "Error",
        description: "Selected car type not found. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    form.reset();
    setEstimatedFare(null);
    setSelectedCarDetails(null);
  }

  if (!googleMapsApiKey) {
    return (
      <section id="fare-estimator" className="pb-16 md:pb-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle>Configuration Error</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-500">
                Google Maps API key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local file.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Refer to the documentation or .env.local.example for setup instructions.
                The fare estimator cannot function without a valid API key.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
      <section id="fare-estimator" className="pb-16 md:pb-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Estimate Your Fare
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter your ride details to get an instant fare estimate.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl rounded-xl overflow-hidden">
              <CardHeader className="bg-muted/30 p-6">
                <CardTitle className="text-2xl flex items-center">
                  <DollarSign className="mr-2 h-6 w-6 text-primary" />
                  Fare Calculator
                </CardTitle>
                <CardDescription>Fill in the details below.</CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="pickupLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-muted-foreground" />Pickup Location</FormLabel>
                            <FormControl>
                              <Autocomplete
                                onLoad={onLoadPickup}
                                onPlaceChanged={onPlaceChangedPickup}
                                options={{ componentRestrictions: { country: 'in' }, types: ['geocode'] }}
                              >
                                <Input 
                                  placeholder="e.g., Main Street, Delhi" 
                                  {...field} 
                                  className="text-base" 
                                />
                              </Autocomplete>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dropLocation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-muted-foreground" />Drop Location</FormLabel>
                            <FormControl>
                              <Autocomplete
                                onLoad={onLoadDrop}
                                onPlaceChanged={onPlaceChangedDrop}
                                options={{ componentRestrictions: { country: 'in' }, types: ['geocode'] }}
                              >
                                <Input 
                                  placeholder="e.g., City Center, Mumbai" 
                                  {...field} 
                                  className="text-base" 
                                />
                              </Autocomplete>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="mt-4 p-4 border border-dashed border-border rounded-lg bg-muted/20 text-center">
                      <MapIcon className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Location inputs above now use Google Places Autocomplete.
                      </p>
                      <p className="text-xs text-muted-foreground/70 mt-1">
                        An interactive map display can be added here in a future update.
                      </p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="carTypeId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center"><Car className="mr-2 h-4 w-4 text-muted-foreground" />Car Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="text-base">
                                <SelectValue placeholder="Select a car type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {ourCabsData.map(car => ( // Use ourCabsData
                                <SelectItem key={car.id} value={car.id} className="text-base">
                                  <div className="flex items-center">
                                    <car.icon className="mr-2 h-5 w-5 text-primary" />
                                    {car.name} ({fareConfig.currencySymbol}{car.baseFarePerKm.toFixed(2)}/km)
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="distance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center"><Milestone className="mr-2 h-4 w-4 text-muted-foreground" />Distance (km)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g., 10.5" {...field} step="0.1" className="text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="p-6 bg-muted/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto">
                      <RefreshCw className="mr-2 h-4 w-4" /> Reset
                    </Button>
                    <Button type="submit" className="w-full sm:w-auto shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
                      Calculate Fare <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>

            {estimatedFare !== null && selectedCarDetails && (
              <Card className="mt-8 shadow-lg rounded-xl bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Estimated Fare
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-foreground">
                    {fareConfig.currencySymbol}{estimatedFare.toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For a {selectedCarDetails.name} over {form.getValues('distance')} km (includes {fareConfig.currencySymbol}{fareConfig.bookingFee.toFixed(2)} booking fee).
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </LoadScript>
  );
}
