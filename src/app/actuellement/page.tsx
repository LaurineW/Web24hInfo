"use client";
import React, { JSX } from "react";
import { CardDemo } from "@/components/ui/carddemo.tsx"; // Assume que tu as ce composant
import { cn } from "@/lib/utils";
import {Paragraphe} from "@/components/Paragraphe";
import {getParagrapheParNom, paragraphes} from "@/data/paragrapheData";



const actuelParagraphes = paragraphes.filter(p => p.partie === "Actuel");


export default function ActuellementPage(): JSX.Element {
    return (
        <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-neutral-900">
            <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[70vh] overflow-hidden">
                <img
                    src="TheatreRomainLyon.jpg"
                    alt="Background actuellement"
                    className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-32 pointer-events-none dark:hidden"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(248,250,252,1) 100%)",
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-32 pointer-events-none hidden dark:block"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 30%, #121212 100%)",
                    }}
                />
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center pt-20 md:pt-40 drop-shadow-lg">
                    Actuellement
                </h1>
            </div>

            <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 py-20 max-w-7xl mx-auto">
                {actuelParagraphes.map((paragraphe, index) => (
                    <CardDemo key={index} data={paragraphe}/>
                ))}
            </section>
        </main>

    );
}
