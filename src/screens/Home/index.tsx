import React, { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "@service/api";

export function Home(){
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=> {
      getAllPokemons()
    },[])

    async function getAllPokemons(){
        const { data } = await api.get("/pokemon");
        setPokemons(data);
    }

    return(
        <S.Container>

        </S.Container>
    )
}