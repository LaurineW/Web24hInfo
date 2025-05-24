import React, { JSX } from "react";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
    {
        title: "2021",
        content: (
            <p className="text-neutral-700 dark:text-neutral-300">
                Début du projet Aceternity, recherche et prototypes.
            </p>
        ),
    },
    {
        title: "2022",
        content: (
            <p className="text-neutral-700 dark:text-neutral-300">
                Développement des fonctionnalités principales.
            </p>
        ),
    },
    {
        title: "2023",
        content: (
            <p className="text-neutral-700 dark:text-neutral-300">
                Lancement de la version bêta et premiers retours utilisateurs.
            </p>
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
                <Timeline data={timelineData} />
            </div>
        </main>
    );
}

