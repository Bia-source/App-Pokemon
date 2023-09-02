import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.json";
import AnimetedLottieView from "lottie-react-native";

export function Welcome(){
    return (
     <S.Container>
        <S.Content>
          <AnimetedLottieView autoPlay source={logo} loop/>
        </S.Content>
        <S.Footer> 
            <S.Title> Bem vindo </S.Title>
            <S.SubTitle> Todos os pókemons em um só lugar 🚀</S.SubTitle>
        </S.Footer>
     </S.Container>
    )
}