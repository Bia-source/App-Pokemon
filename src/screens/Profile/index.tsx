import circle from "@assets/circle.png";
import dots from "@assets/dots.png";
import { FadeAnimation } from "@components/FadeAnimation";
import { OpacityAnimation } from "@components/OpacityAnimation";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "@service/api";
import { PokemonNameColor, PokemonTypeColors } from "@utils/types";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./style";
import * as Progress from 'react-native-progress';

type RouteParamsProfile = {
    pokemonId: number;
}

type Stat = {
    base_stat: number;
    stat: {
        name: string;
    }
}


type PokemonType = {
    type: {
        name: PokemonTypeColors;
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
                <ScrollView style={{ backgroundColor: "#fff" }}>
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
                        <S.DotsImage source={dots} />
                    </S.Header>

                    <S.Container>
                        <S.Title type={pokemon.types[0].type.name}>Base States</S.Title>
                        {pokemon.stats.map(atribute =>
                            <S.StatusBar key={atribute.stat.name}>
                                {atribute.stat.name.length > 10 ?
                                    <S.Atributes>
                                        {`${atribute.stat.name[0]}${atribute.stat.name[1]}${atribute.stat.name[7]}${atribute.stat.name[8]}${atribute.stat.name[9]}${atribute.stat.name[10]}`}
                                    </S.Atributes>
                                    : <S.Atributes> {atribute.stat.name} </S.Atributes>
                                }
                                <S.AtributesValue> {atribute.base_stat} </S.AtributesValue>
                                <S.ContentBar>
                                    <Progress.Bar
                                        borderWidth={0}
                                        progress={100}
                                        width={atribute.base_stat}
                                        color={colors.type[pokemon.types[0].type.name]}
                                    />
                                </S.ContentBar>
                            </S.StatusBar>
                        )}

                        <S.Title type={pokemon.types[0].type.name}> Abilities </S.Title>

                        {pokemon.abilities.map(currentAbility => 
                        <S.Ability>
                            {currentAbility.ability.name}
                        </S.Ability>)
                        }
                    </S.Container>
                </ScrollView>

            }

        </>

    )
}