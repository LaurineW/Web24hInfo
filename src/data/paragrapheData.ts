import {Paragraphe} from "@/types/Paragraphe";
import React from "react";

export const paragraphes : Paragraphe[] = [
    {
        nom : "RIP",
        texte : "Run Tim ! Run !",
        images : [
                "image3.png"
            ],
        partie : "Réseau"
    }
]

export function getParagraphes() {
    return paragraphes;
}
