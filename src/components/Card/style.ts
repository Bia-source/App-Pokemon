import styled, { css } from "styled-components/native";

type PokemonType = {
    type: "dark" | "bug" | "dragon" | "eletric" | "fairy" | "fighting" | "fire" | "flying" 
    | "ghost" | "grass" | "ground" | "ice" | "normal" | "poison" | "psychic" | "rock" 
    | "steel" | "water";
}

export const Container = styled.TouchableOpacity<PokemonType>`
${({ theme, type }) => css`
   background-color: ${theme.colors.background_type[type]};
   border-radius: 10px;
   margin-top: 30px;
   flex-direction: row;
   padding: 20px;
   
   box-shadow: ${theme.colors.background_type[type]} 3px 3px 7px;
`}
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`

export const LeftSide = styled.View`
  width: 50%;
  position: relative;

`

export const PokemonId = styled.Text`
 ${({ theme }) => css`
   color: ${theme.colors.text.grey};
   font-size: ${theme.font_size.sm}px;
   line-height: 14px;
   font-family: ${theme.font_family.bold};
`}
`

export const PokemonName = styled.Text`
 ${({ theme }) => css`
   color: ${theme.colors.text.white};
   font-size: ${theme.font_size.lg}px;
   line-height: 31px;
   margin-top: 5px;
   text-transform: capitalize;
   font-family: ${theme.font_family.bold};
`}
`

export const PokemonContentType = styled.View`
  flex-direction: row;
`

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
   background-color: ${theme.colors.type[type]};
   margin-top: 5px;
   padding: 5px;
   width: 65px;
   height: 25px;
   border-radius: 3px;
   margin-top: 5px;
   margin-left: 5px;
   justify-content: center;
   align-items: center;
`}
`

export const PokemonTypeText = styled.Text`
   ${({ theme }) => css`
   color: ${theme.colors.text.white};
   font-size: ${theme.font_size.sm}px;
   line-height: 14px;
   font-family: ${theme.font_family.bold};
   text-transform: capitalize;
`}
`

export const RightSide = styled.View`
  width: 50%;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const PokemonImage = styled.Image`
 margin-top: -40px;
 width: 130px;
 height: 130px;
`

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`

export const PokeballDetail = styled.Image`
  position: absolute;
  right: -20px;
`