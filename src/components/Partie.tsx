"use client";
import {Partie} from "@/types/Partie";
import React from "react";

export function Partie(partie : Partie) : React.ReactElement {
    return <>
            <h5>{partie.nom}</h5>
            <p>{partie.resume}</p>
            <div>
                {partie.images.map(img => <img src={img} key={img}/>)}
            </div>
        </>
}