import {Chapitre} from "@/types/Chapitre";

const chapitres : Chapitre[] = [
    {
        nom : "Roussel",
        resume : "Roussel isn't real, he can't hurt you",
        images : [
                "image.png"
            ]
    }
]

export function getChapitres() {
    return chapitres;
}

export function getChapitreParNom(nom: string) : Chapitre | null {
    for (var chapitre of chapitres) {
        if (chapitre.nom === nom) {
            return chapitre;
        }
    }
    return null;
}
