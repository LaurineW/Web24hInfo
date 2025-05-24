import {Partie} from "@/types/Partie";

export const parties : Partie[] = [
    {
        nom : "La Basilique Notre-Dame de Fourvière",
        localisation : "8 Pl. de Fourvière, 69005 Lyon",
        resume : "La basilique Notre-Dame de Fourvière surplombe la ville de\n" +
            "Lyon au sommet de la colline de Fourvière depuis la fin du\n" +
            "XIXᵉ siècle. Elle est construite à peu près sur l'emplacement\n" +
            "de l'ancien forum de Trajan, Forum vetus.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Le Théâtre antique de Fourvière",
        localisation : "17 Rue Cleberg, 69005 Lyon",
        resume : "Le théâtre antique de Lugdunum est un des principaux\n" +
            "monuments romains visibles à Lyon. Il est adossé à la\n" +
            "colline de Fourvière, en dessous de son sommet, ce qui le\n" +
            "plaçait près du centre de la colonie romaine.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "La Cathédrale Saint-Jean",
        localisation : "Pl. Saint-Jean, 69005 Lyon",
        resume : "La primatiale Saint-Jean-Baptiste-et-Saint-Étienne est le\n" +
            "siège épiscopal de l'archidiocèse de Lyon. Elle a rang de\n" +
            "cathédrale et de primatiale : l'archevêque de Lyon a le titre\n" +
            "de primat des Gaules.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Place des Terreaux",
        localisation : "Pl. des Terreaux",
        resume : "La place des Terreaux est une place située dans le 1er\n" +
            "arrondissement de Lyon, en France. Place centrale au nord\n" +
            "de la Presqu'île entre le Rhône et la Saône au pied de la\n" +
            "colline de la Croix-Rousse.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Grand Hôtel-Dieu",
        localisation : "20 Quai Jules Courmont, 69002 Lyon",
        resume : "L'Hôtel-Dieu de Lyon est l'un des plus grands bâtiments\n" +
            "de la presqu'île de Lyon. Il est construit en bordure ouest\n" +
            "du Rhône, dans le quartier de Bellecour. Ce n'est pas le \n" +
            "premier hôpital lyonnais. Son rôle hospitalier lui a été\n" +
            "dévolu par un autre établissement, créé en 542..",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Place Bellecour",
        localisation : "Pl. Bellecour",
        resume : "La place Bellecour est une place du 2e arrondissement de Lyon,\n" +
            "en France. Élément majeur de la ville et sa plus grande\n" +
            "place avec ses 62 000 m2, cinquième plus grande place de\n" +
            "France, elle est la plus grande place piétonnière d'Europe.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Musée des Confluences",
        localisation : "86 Quai Perrache, 69002 Lyon",
        resume : "Le musée des Confluences est un musée d'histoire naturelle,\n" +
            "d'anthropologie, des sociétés et des civilisations situé à Lyon,\n" +
            "dans la région Auvergne-Rhône-Alpes en France.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Musée des Beaux-Arts",
        localisation : "20 Pl. des Terreaux",
        resume : "Le musée des Beaux-Arts de Lyon est un musée municipal\n" +
            "situé sur la place des Terreaux à Lyon dans l'abbaye de\n" +
            "Saint-Pierre-les-Nonnains, plus connu sous le nom de\n" +
            "palais Saint-Pierre.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Théâtre des Célestins",
        localisation : "4 Rue Charles Dullin, 69002 Lyon",
        resume : "Le théâtre des Célestins, appelé désormais « Les\n" +
            "Célestins, théâtre de Lyon », est un théâtre situé\n" +
            "place des Célestins dans le quartier de Bellecour,\n" +
            "du 2ᵉ arrondissement de Lyon.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
    {
        nom : "Opéra de Lyon",
        localisation : "1 Pl. de la Comédie, 69001 Lyon",
        resume : "Monument historique présentant des rénovations\n" +
            "modernes, qui accueille des opéras, des spectacles\n" +
            "de danse et des concerts.",
        images : [
                "image2.jpeg"
            ],
        chapitre : "Visite"
    },
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
