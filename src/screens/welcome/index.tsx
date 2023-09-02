import React from "react";
import * as S from "./style";
import AnimetedLottieView from "lottie-react-native";

export function Welcome(){
    return (
     <S.Container>
        <S.Content>
          <AnimetedLottieView autoPlay source={require('../../assets/logo.json')} loop/>
        </S.Content>
        <S.Footer> 
            <S.Title> Bem vindo </S.Title>
            <S.SubTitle> Todos os pókemons em um só lugar 🚀</S.SubTitle>
        </S.Footer>
     </S.Container>
    )
}