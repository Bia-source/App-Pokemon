
import React from "react";
import { ContainerH, ContainerV } from "./style";

type SeparatorComponentProps = {
    distance: number;
}

export function SeparatorH({ distance }: SeparatorComponentProps){
    return(
        <ContainerH distance={distance}/>
     )
}

export function SeparatorV({ distance }: SeparatorComponentProps){
    return(
        <ContainerV distance={distance}/>
     )
}