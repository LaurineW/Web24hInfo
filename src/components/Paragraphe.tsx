"use client";
import {Paragraphe} from "@/types/Paragraphe";
import React from "react";

export function Paragraphe(paragraphe : Paragraphe) : React.ReactElement {
    return <>
            <div>
                <h5>{paragraphe.nom}</h5>
                <p>{paragraphe.texte}</p>
            </div>
            <div>
                {paragraphe.images.map(img => <img src={img} key={img} width={500} height={300} />)}
            </div>
        </>
}