import {Partie} from "@/types/Partie";

export const parties : Partie[] = [
    {
        nom : "Réseau",
        resume : "Haha, I'm in danger",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Roussel"
    }
]

export function getParties() {
    return parties;
}

export function getPartieParNom(nom: string) : Partie | null {
    for (var partie of parties) {
        if (partie.nom === nom) {
            return partie;
        }
    }
    return null;
}
