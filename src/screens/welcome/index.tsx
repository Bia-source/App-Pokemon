import React from "react";
import * as S from "./style";
import AnimetedLottieView from "lottie-react-native";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const { navigate } = useNavigation();

  function handleNavigation(){
    navigate('pokeStack');
  }

  return (
    <S.Container>
      <S.Content>
        
            <AnimetedLottieView style={{width:200}} autoPlay source={require('../../assets/logo.json')} loop />
            <S.Title> Bem vindo </S.Title>
        <S.SubTitle> Todos os pókemons em um só lugar 🚀</S.SubTitle>

      </S.Content>
      <S.Footer>
       <Button onPress={handleNavigation} title="Iniciar" type="red_light" size="lg"/>
      </S.Footer>
    </S.Container>
  )
}