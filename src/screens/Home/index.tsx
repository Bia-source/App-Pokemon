import React, { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "@service/api";

type PokemonTypes = {
  type: string;
}

type PokemonProps = {
    name: string;
    url: string;
    id: number;
    types: PokemonTypes;
}

type ReturnPokemon = {
   id: number;
   types: PokemonTypes[]
}

export function Home(){
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    useEffect(()=> {
      getAllPokemons()
    },[])

    async function getAllPokemons(){
        const { data }= await api.get("/pokemon");
        const { results } = data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon:PokemonProps) => {
                const { id, types } = await getMoreInfoPokemon(pokemon.url)
                return {
                    name: pokemon.name,
                    id,
                    types
                }
            })
        );
        setPokemons(payloadPokemons)
    }

    async function getMoreInfoPokemon(url:string): Promise<ReturnPokemon>{
        const { id, types } = (await api.get(url)).data;
        return { 
            id,
            types
        }
    }

    return(
        <S.Container>
            {pokemons.map(item => <S.Title>{item.name}</S.Title>)}
        </S.Container>
    )
}