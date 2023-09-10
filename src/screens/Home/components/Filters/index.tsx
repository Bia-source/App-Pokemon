import React from "react";
import * as S from "./style";
import { SeparatorH } from "@components/Separator";

export function Filter(){
    return(
        <S.Container>
            <S.Title> Filtros </S.Title>
            <S.Subtitle> Use a pesquisa avançada para explorar Pokémon por tipo, fraqueza, altura e muito mais! </S.Subtitle>
             
            <SeparatorH distance={20}/>
            <S.TitleFilterType> Types </S.TitleFilterType>
            <S.ContentItensFilter>
                <S.ContentIconFilter>
                    <S.IconFilter>
                        
                    </S.IconFilter>
                </S.ContentIconFilter>
            </S.ContentItensFilter>
        </S.Container>
    )
}