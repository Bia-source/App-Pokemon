import React from "react";
import * as S from "./style";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text }from "react-native";

type RouteParamsProfile = {
    pokemonId: number;
}

export function Profile() {
   const route = useRoute();
   const { pokemonId } = route.params as RouteParamsProfile;

    return (
        <>
         <Text style={{margin: 100}}> {pokemonId}</Text>
        </>
    )
}