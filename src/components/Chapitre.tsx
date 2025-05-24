"use client";
import {Chapitre} from "@/types/Chapitre";
import React from "react";

export function Chapitre(chapitre : Chapitre) : React.ReactElement {
    return <>
            <h5>{chapitre.nom}</h5>
            <p>{chapitre.resume}</p>
            <div>
                {chapitre.images.map(img => <img src={img} key={img}/>)}
            </div>
        </>
}