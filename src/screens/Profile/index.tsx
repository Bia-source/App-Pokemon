import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { api } from "@service/api";
import { useTheme } from "styled-components";
import { Alert } from "react-native";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import circle from "@assets/circle.png";
import LottieView from "lottie-react-native";
import { FadeAnimation } from "@components/FadeAnimation";
import { PokemonNameColor } from "@utils/types";
import dots from "@assets/dots.png";
import { OpacityAnimation } from "@components/OpacityAnimation";

type RouteParamsProfile = {
    pokemonId: number;
}

type Stat = {
    base_stat: number;
    name: string;
}


type PokemonType = {
    type: {
        name: PokemonNameColor;
    }
}

type Ability = {
    ability: {
        name: string;
        types: PokemonType[];
    }
}

type PokemonPropsProfile = {
    id: number;
    name: string;
    stats: Stat[];
    abilities: Ability[];
    color: string;
    types: PokemonType[];
}

export function Profile() {
    const route = useRoute();
    const navigator = useNavigation();
    const { pokemonId } = route.params as RouteParamsProfile;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({} as PokemonPropsProfile)
    const [load, setLoading] = useState(true);

    useEffect(() => {
        getDetailsPokemon()
    }, [])

    async function getDetailsPokemon() {
        try {
            const response = await api.get(`/pokemon/${pokemonId}`);
            const { stats, abilities, id, name, types } = response.data;
            const currentType = types[0].type.name as PokemonNameColor;
            const color = colors.background_type[currentType];
            setPokemon({ id, name, stats, abilities, color, types });
        } catch (error) {
            Alert.alert("Ocorreu algum erro");
        } finally {
            setLoading(false);
        }
    }

    function handleGoBack() {
        navigator.goBack();
    }

    return (
        <>
            {load ? <LottieView
                autoPlay
                loop
                style={{ width: 300, height: 300 }}
                source={require('../../assets/icons/loading.json')}
            />
                :
                <ScrollView style={{ backgroundColor: "#fff"}}>
                    <S.Header type={pokemon.types[0].type.name}>
                        <S.BackButton onPress={handleGoBack}>
                            <Feather name="chevron-left" size={24} color="#fff" />
                        </S.BackButton>

                        <FadeAnimation direction="fade-in-x">
                            <S.ContentImage>
                                <S.CircleImage source={circle} />
                                <S.PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} />
                            </S.ContentImage>
                        </FadeAnimation>

                        <S.Content>
                            <OpacityAnimation duration={5000} show="appear">
                                <>
                                <S.PokemonId>#{pokemon.id}</S.PokemonId>
                                <S.PokemonName>{pokemon.name}</S.PokemonName>
                                </>
                            </OpacityAnimation>

                            <FadeAnimation direction="fade-in-x">
                                <S.PokemonTypeContainer>
                                    {pokemon.types.map(({ type }) =>
                                        <S.PokemonType type={type.name} key={type.name}>
                                            <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                                        </S.PokemonType>
                                    )}
                                </S.PokemonTypeContainer>
                            </FadeAnimation>
                        </S.Content>
                        <S.DotsImage source={dots}/>
                    </S.Header>
                    <S.Container>
                        <S.Title type={pokemon.types[0].type.name}>Base States</S.Title>
                    </S.Container>
                </ScrollView>

            }

        </>

    )
}