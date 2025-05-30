"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Tag, ArrowRight, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ourCabsData = [
    {
        id: 'swift-dzire',
        name: 'Swift Dzire',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/dzire.jpg',
        description: 'Comfortable sedan, perfect for city and outstation rides.',
        capacity: 4,
        fare: '10 ₹/km (CNG) / 11 ₹/km (Diesel)',
    },
    {
        id: 'ertiga',
        name: 'Ertiga',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/new-ertiga-removebg-preview.png',
        description: 'Spacious MPV, ideal for families and group travel.',
        capacity: 6,
        fare: '13 ₹/km',
    },
    {
        id: 'innova-crysta',
        name: 'Innova Crysta',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/toyotainnova-removebg-preview.png',
        description: 'Premium comfort and space for long journeys.',
        capacity: 7,
        fare: '17 ₹/km',
    },
    {
        id: 'tempo-traveller',
        name: 'Tempo Traveller',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/tempo-traveller-tempo-traveller-500x500-removebg-preview.png',
        description: 'Best for large groups and tours.',
        capacity: 12,
        fare: '25 ₹/km',
    },
    {
        id: 'etios',
        name: 'Etios',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2023/07/toyota-etios-car-rental-services-removebg-preview-1.png',
        description: 'Reliable sedan for comfortable travel.',
        capacity: 4,
        fare: '11 ₹/km',
    },
    {
        id: 'kia-carens',
        name: 'Kia Carens',
        icon: Car,
        image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/image-removebg-preview-1.png',
        description: 'Modern MPV with advanced features.',
        capacity: 6,
        fare: '14 ₹/km',
    },
];

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
                                    <span className="font-semibold">Fare:</span>&nbsp;{car.fare}
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
                    Note: Base fares are indicative and may vary. Booking fee may apply.
                </p>
            </div>
        </section>
    );
}
