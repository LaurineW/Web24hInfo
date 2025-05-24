import React, { JSX } from "react";
import { Timeline } from "@/components/ui/timeline";
import {Paragraphe} from "@/components/Paragraphe";
import {getParagrapheParNom} from "@/data/paragrapheData";

const timelineData = [
    {
        title: "-43 av. J.-C.",
        content: (
            <Paragraphe {...getParagrapheParNom("Capitale des Gaules (Lugdunum)")} />
        ),
    },
    {
        title: "IIe siècle",
        content: (
            <Paragraphe {...getParagrapheParNom("Lieu clé du christianisme en Gaule")} />
        ),
    },
    {
        title: "XV-XIXe siècles",
        content: (
            <Paragraphe {...getParagrapheParNom("Capitale mondiale de la soie (XV–XIXe siècles)")} />
        ),
    },
    {
        title: "XVIe siècle",
        content: (
            <Paragraphe {...getParagrapheParNom("Ville de l’imprimerie à la Renaissance")} />
        ),
    },
    {
        title: "1939-1945",
        content: (
            <Paragraphe {...getParagrapheParNom("Haut lieu de Résistance pendant la Seconde Guerre mondiale")} />
        ),
    },
];

export default function HistoriquePage(): JSX.Element {
    return (
        <main className="min-h-screen  dark">
            <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[70vh] overflow-hidden">
                {/* Image en background */}
                <img
                    src="TheatreRomainLyon.jpg"
                    alt="Background historique"
                    className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
                />
                {/* Overlay dégradé clair */}
                <div
                    className="absolute bottom-0 left-0 w-full h-32 pointer-events-none dark:hidden"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(248,250,252,1) 100%)",
                    }}
                />
                {/* Overlay dégradé sombre */}
                <div
                    className="absolute bottom-0 left-0 w-full h-32 pointer-events-none hidden dark:block"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 30%, #121212 100%)",
                    }}
                />
                {/* Titre centré au-dessus */}
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center pt-20 md:pt-40 drop-shadow-lg">
                    Historique
                </h1>
            </div>

            <div className="px-4 md:px-10 max-w-7xl mx-auto mt-10">
                <Timeline data={timelineData } />
            </div>
        </main>
    );
}

