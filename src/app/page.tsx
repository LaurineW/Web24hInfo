"use client";

import type { NextPage } from "next";
import { useEffect } from "react";
import { FocusCards } from "@/app/components/ui/focus-cards";

const Home: NextPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const lyonText = document.getElementById("lyon-text");
      if (lyonText) {
        lyonText.classList.add("lit");

        const images = document.querySelectorAll(".sliding-image");
        images.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add("slide-in");
          }, index * 300);
        });

        setTimeout(() => {
          const descriptionText = document.getElementById("description-text");
          if (descriptionText) {
            descriptionText.classList.add("fade-in");
          }

          const clickableImages = document.querySelectorAll(".clickable-image");
          clickableImages.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add("fade-in");
            }, index * 200);
          });
        }, images.length * 300);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    { title: "Histoire de Lyon", src: "/clickable-image1.jpg", href: "/history" },
    { title: "Valeurs de Lyon", src: "/clickable-image2.jpg", href: "/valor" },
    { title: "Lieux à visiter", src: "/clickable-image3.jpg", href: "/to-visit" },
  ];

  return (
      <div className="min-h-screen bg-gray-900 pt-20 flex flex-col items-center overflow-hidden">
        <h1 id="lyon-text" className="text-9xl font-bold text-gray-700 transition-all duration-500 blink">
          LYON
        </h1>

        <div className="flex mt-10 space-x-4">
          {[...Array(5)].map((_, index) => (
              <img
                  key={index}
                  src={`/image${index + 1}.jpg`}
                  alt={`Lyon ${index + 1}`}
                  className="sliding-image w-60 h-60 object-cover rounded opacity-0"
              />
          ))}
        </div>

        <p id="description-text" className="text-xl text-gray-300 opacity-0 mt-10 text-center">
          Lyon, ville de lumière et pôle d'innovation chaleureuse. Découvrez ce que cette mégalopole a à offrir.
        </p>

        <div id="focus-cards-container" className="mt-10 w-full px-4">
          <FocusCards cards={cards} />
        </div>
      </div>
  );
};

export default Home;