import React from "react";
import * as S from "./style";
import AnimetedLottieView from "lottie-react-native";
import { Button } from "@components/Button";

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        
            <AnimetedLottieView style={{width:200}} autoPlay source={require('../../assets/logo.json')} loop />
            <S.Title> Bem vindo </S.Title>
        <S.SubTitle> Todos os pókemons em um só lugar 🚀</S.SubTitle>

      </S.Content>
      <S.Footer>
       <Button title="Iniciar" type="red_light" size="lg"/>
      </S.Footer>
    </S.Container>
  )
}