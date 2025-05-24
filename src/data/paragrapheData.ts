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
                "history/history1.jpg"
            ],
        partie : "Historique"
    },
    {
        nom : "Lieu clé du christianisme en Gaule",
        texte : "Martyre de saint Pothin et sainte Blandine au IIe siècle.\n" +
            "Lyon devient un centre religieux majeur avec un archevêché puissant.\n" +
            "La primatiale Saint-Jean en est le symbole.",
        images : [
                "history/history2.jpg"
            ],
        partie : "Historique"
    },
    {
        nom : "Capitale mondiale de la soie (XV–XIXe siècles)",
        texte : "Dès le XVe siècle, Lyon devient un centre de la soierie grâce aux foires et à l’arrivée d’artisans italiens.\n" +
            "Au XIXe siècle, les canuts, ouvriers tisserands de la Croix-Rousse, sont à l’origine d’importantes révoltes ouvrières (1831, 1834).\n" +
            "Influence majeure sur l’essor industriel et social de la ville.",
        images : [
                "history/history3.jpg"
            ],
        partie : "Historique"
    },
    {
        nom : "Ville de l’imprimerie à la Renaissance",
        texte : "Au XVIe siècle, Lyon est un des plus grands centres d’imprimerie et d’édition d’Europe.\n" +
            "Publications religieuses, scientifiques, philosophiques… une effervescence intellectuelle unique.",
        images : [
                "history/history4.jpg"
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
                "history/history5.jpg"
            ],
        partie : "Historique"
    },
    {
        nom : "La Fête des Lumières",
        texte : "Événement emblématique chaque décembre.\n" +
            "Illumine la ville pendant 4 jours avec des installations artistiques monumentales.\n" +
            "Attire plusieurs millions de visiteurs chaque année.\n" +
            "Fait de Lyon une capitale mondiale de la lumière et du mapping vidéo.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Le Vieux Lyon classé à l’UNESCO",
        texte : "Inscrit au patrimoine mondial de l'UNESCO depuis 1998.\n" +
            "Un des plus grands quartiers Renaissance d’Europe.\n" +
            "Travaux de conservation et valorisation reconnus à l'international.\n" +
            "de la colline de Fourvière, de la Presqu'île et des pentes de la Croix-Rousse sont inscrits sur la liste du patrimoine mondial de l'UNESCO.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Berceau du cinéma",
        texte : "Les frères Lumière ont inventé le cinéma à Lyon (avec le cinématographe).\n" +
            "Le Musée Lumière et l'Institut Lumière célèbrent cet héritage.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Capitale de la gastronomie",
        texte : "Ville natale de Paul Bocuse, chef emblématique.\n" +
            "Présence de nombreux bouchons lyonnais, restaurants étoilés, et le SIRHA (salon international de la restauration).\n" +
            "Accueil régulier du Bocuse d'Or, prestigieux concours culinaire.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Hub en santé et biotechnologies",
        texte : "Lyon est un pôle majeur de l’industrie pharmaceutique (Sanofi, bioMérieux…).\n" +
            "Présence d’un cluster mondial en infectiologie et biotechnologies.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Pôle de transport stratégique",
        texte : "Nœud ferroviaire avec la gare de la Part-Dieu, une des plus fréquentées d'Europe.\n" +
            "Connexions rapides en TGV avec Paris, Marseille, Genève, Turin…",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Ville étudiante et innovante",
        texte : "Accueille plus de 150 000 étudiants.\n" +
            "Universités reconnues (Lyon 1, 2, 3, INSA, EM Lyon…).\n" +
            "Classements fréquents parmi les meilleures villes étudiantes de France.",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
    },
    {
        nom : "Événements sportifs internationaux",
        texte : "Accueil de matchs de la Coupe du Monde (1998), de l’Euro (2016), et bientôt des JO (2024).\n" +
            "Stade Groupama Stadium (OL) utilisé pour de grands événements sportifs et concerts",
        images : [
                "image3.png"
            ],
        partie : "Actuel"
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
