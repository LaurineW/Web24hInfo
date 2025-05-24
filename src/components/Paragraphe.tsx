import {Paragraphe} from "@/types/Paragraphe";
import React from "react";

export function Paragraphe(paragraphe : Paragraphe) : React.ReactElement {
    return <>
            <h5>{paragraphe.nom}</h5>
            <p>{paragraphe.texte}</p>
            <div>
                {paragraphe.images.map(img => <img src={img} key={img} />)}
            </div>
        </>
}