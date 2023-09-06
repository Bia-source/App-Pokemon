import React, { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "@service/api";
import { Card, PokemonProps, PokemonType } from "@components/Card";
import { FlatList } from "react-native";
import { Text } from "react-native";
import pokeballHeader from "../../assets/pokeball.png";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";

type ReturnPokemon = {
    id: number;
    types: PokemonType[]
}

export function Home() {
    const { navigate } = useNavigation()
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

    function handleNavigationProfile(pokemonId: number){
       navigate("profileStack", {pokemonId})
    }

    return (
        <S.Container>
            <FlatList
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString() }
                showsVerticalScrollIndicator={false}
                renderItem={({ item: pokemon }) => (
                    <Card
                      data={pokemon}
                      onPress={() => {
                        handleNavigationProfile(pokemon.id);
                      }}
                    />
                  )}
                ListHeaderComponent={<>
                 <S.Header source={pokeballHeader}/>
                 <S.Title>Pokedex</S.Title>
                </>}
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
                ListEmptyComponent={() => (
                    <>
                        <Text> sem conteudo </Text>
                    </>
                )}
            />

        </S.Container>
    )
}