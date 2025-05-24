import {Paragraphe} from "@/types/Paragraphe";
import React from "react";
import {Chapitre} from "@/types/Chapitre";

export const paragraphes : Paragraphe[] = [
    {
        nom : "Capitale des Gaules (Lugdunum)",
        texte : "Fondée en -43 av. J.-C. par les Romains.\n" +
            "Devient capitale des Gaules et centre stratégique de l’Empire romain.\n" +
            "Vestiges encore visibles : théâtres antiques de Fourvière, odéon, aqueducs, etc.",
        images : [
                "image3.png"
            ],
        partie : "Historique"
    },
    {
        nom : "Lieu clé du christianisme en Gaule",
        texte : "Martyre de saint Pothin et sainte Blandine au IIe siècle.\n" +
            "Lyon devient un centre religieux majeur avec un archevêché puissant.\n" +
            "La primatiale Saint-Jean en est le symbole.",
        images : [
                "image3.png"
            ],
        partie : "Historique"
    },
    {
        nom : "Capitale mondiale de la soie (XV–XIXe siècles)",
        texte : "Dès le XVe siècle, Lyon devient un centre de la soierie grâce aux foires et à l’arrivée d’artisans italiens.\n" +
            "Au XIXe siècle, les canuts, ouvriers tisserands de la Croix-Rousse, sont à l’origine d’importantes révoltes ouvrières (1831, 1834).\n" +
            "Influence majeure sur l’essor industriel et social de la ville.",
        images : [
                "image3.png"
            ],
        partie : "Historique"
    },
    {
        nom : "Ville de l’imprimerie à la Renaissance",
        texte : "Au XVIe siècle, Lyon est un des plus grands centres d’imprimerie et d’édition d’Europe.\n" +
            "Publications religieuses, scientifiques, philosophiques… une effervescence intellectuelle unique.",
        images : [
                "image3.png"
            ],
        partie : "Historique"
    },
    {
        nom : "Haut lieu de Résistance pendant la Seconde Guerre mondiale",
        texte : "Centre stratégique de la Résistance française.\n" +
            "Siège du réseau de Jean Moulin, délégué de De Gaulle.\n" +
            "La ville est décorée de la Légion d’honneur et de la Croix de la Libération.\n" +
            "Le Centre d’Histoire de la Résistance et de la Déportation en garde la mémoire.",
        images : [
                "image3.png"
            ],
        partie : "Historique"
    },
]

export function getParagraphes() {
    return paragraphes;
}

export function getParagrapheParNom(nom: string) : Paragraphe | null {
    for (var paragraphe of paragraphes) {
        if (paragraphe.nom === nom) {
            return paragraphe;
        }
    }
    return null;
}
