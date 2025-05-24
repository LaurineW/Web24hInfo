"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
    card: {
        title: string;
        src: string;
        href: string;
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Card = React.memo(({ card, index, hovered, setHovered }: CardProps) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "relative overflow-hidden rounded-lg dark:bg-neutral-900 h-96 w-full mb-10 transition-all duration-300",
            hovered !== null && hovered !== index && "blur-sm scale-95",
        )}
    >
        <a href={card.href}>
        <img
            src={card.src}
            alt={card.title}
            className="clickable-image absolute inset-0 object-cover h-full"
        />
        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex items-end p-4 text-white text-xl transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            {card.title}
        </div>
        </a>
    </div>
));

Card.displayName = "Card";

type FocusCardsProps = {
    cards: { title: string; src: string, href: string}[];
};

export function FocusCards({ cards }: FocusCardsProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}