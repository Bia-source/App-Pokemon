import React, { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "@service/api";
import { Card, PokemonProps, PokemonType } from "@components/Card";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { FadeAnimation } from "@components/FadeAnimation";


type ReturnPokemon = {
    id: number;
    types: PokemonType[]
}

export function Home() {
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    useEffect(() => {
        getAllPokemons()
    }, [])



    async function getAllPokemons() {
        const { data } = await api.get("/pokemon");
        const { results } = data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon: PokemonProps) => {
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

    async function getMoreInfoPokemon(url: string): Promise<ReturnPokemon> {
        const { id, types } = (await api.get(url)).data;
        return {
            id,
            types
        }
    }

    return (
        <S.Container>
            <FlatList
                data={pokemons}
                keyExtractor={(pokemon) =>  pokemon.id.toString() }
                showsVerticalScrollIndicator={false}
                renderItem={({ item: pokemon }) => (
                    <Card data={pokemon} />
                )}
                ListEmptyComponent={() => (
                    <>
                        <Text> sem conteudo </Text>
                    </>
                )}
            />

        </S.Container>
    )
}