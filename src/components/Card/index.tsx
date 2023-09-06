import React from "react";
import * as S from "./style";
import dotsImage from "@assets/dots.png";
import pokeball from "@assets/pokeballCard.png";
import { TouchableOpacityProps } from "react-native";
import { FadeAnimation } from "@components/FadeAnimation";

export type PokemonType = {
    type: {
        name: string;
    };
};


export type PokemonProps = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
}

type CardComponentProps = TouchableOpacityProps & {
    data: PokemonProps;
}

export function Card({ data, ...rest }: CardComponentProps) {
    return (
        <S.Container
            {...rest}
            type={data.types[0].type.name}>
            <S.LeftSide>
                <S.PokemonId> #{data.id} </S.PokemonId>
                <S.PokemonName> {data.name} </S.PokemonName>
                <S.ImageCardDetailLeftSide source={dotsImage} />

                <S.PokemonContentType>
                    {data.types.map(pokemonType =>
                        <S.PokemonType type={pokemonType.type.name}>
                            <S.PokemonTypeText key={pokemonType.type.name}> {pokemonType.type.name} </S.PokemonTypeText>
                        </S.PokemonType>
                    )}

                </S.PokemonContentType>
            </S.LeftSide>

            <S.RightSide>
                <S.PokeballDetail source={pokeball} />
                <FadeAnimation direction="fade-in-x">
                    <S.PokemonImage
                        source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                        }}
                    />
                </FadeAnimation>

            </S.RightSide>
        </S.Container>
    )
}