import styled, { css } from "styled-components/native";
import { PokemonNameColor, PokemonTypeColors } from "@utils/types";

type TypeProps = {
    type: PokemonNameColor
}

type TypeOthers = {
    type: PokemonTypeColors
}

export const Header = styled.View<TypeProps>`
  ${({ theme, type }) => css`
     background-color: ${theme.colors.background_type[type]};
  `}
  height: 340px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  position: relative;

`
export const BackButton = styled.TouchableOpacity`
 position: absolute;
 top: 70px;
 left: 40px;
`
export const ContentImage = styled.View`
 position: relative;
`
export const CircleImage = styled.Image`
 width: 125px;
 height: 125px;
 position: absolute;
`
export const PokemonImage = styled.Image`
 width: 125px;
 height: 125px;
`

export const Content = styled.View`
 margin-left: 30px;
`

export const PokemonId = styled.Text`
 ${({ theme }) => css`
   font-size: ${theme.font_size.md}px;
   font-style: normal;
   font-family: ${theme.font_family.bold};
   line-height: 30px;
   color: ${theme.colors.text.grey};
 `}
`

export const PokemonName = styled.Text`
${({ theme }) => css`
   font-size: ${theme.font_size.lg}px;
   font-style: normal;
   font-family: ${theme.font_family.bold};
   line-height: 38px;
   color: ${theme.colors.text.white};
   text-transform: capitalize;
 `}
`

export const PokemonTypeContainer = styled.View`
flex-direction: row;
`

export const PokemonType = styled.View<TypeOthers>`
${({ theme, type }) => css`
   width: 61px;
   height: 25px;
   background-color: ${theme.colors.type[type]};
   border-radius: 3px;
   margin-left: 5px;
   margin-top: 10px;
   justify-content: center;
   align-items: center;
 `}
`

export const PokemonTypeText = styled.Text`
${({ theme }) => css`
font-size: ${theme.font_size.sm}px;
line-height: 14px;
font-style: normal;
color: ${theme.colors.text.white};
font-weight: 500;
`}
`

export const DotsImage = styled.Image`
 position: absolute;
 width: 85px;
 right: -20px;
 top: 222px;
 height: 36px;
`

export const Container = styled.View`
 ${({ theme }) => css`
 flex: 1;
 padding: 20px;
font-size: ${theme.font_size.sm}px;
line-height: 14px;
font-style: normal;
background-color: ${theme.colors.background.white};
border-top-right-radius: 40px;
border-top-left-radius: 40px;
margin-top: -40px;
`}
`

export const Title = styled.Text<TypeProps>`
  ${({ theme, type })=> css`
    font-style: normal;
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.md}px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.background_type[type]};
  `}
` 

export const StatusBar = styled.View`
 width: 100%;
 padding: 10px 20px;
 flex-direction: row;
 align-items: center;
`

export const Atributes = styled.Text`
${({ theme })=> css`
    font-style: normal;
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    line-height: 16px;
    text-transform: capitalize;
    color: ${theme.colors.text.black};
    width: 55px;
  `}
`

export const AtributesValue = styled.Text`
${({ theme })=> css`
    font-style: normal;
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    line-height: 28px;
    text-align: right;
    color: ${theme.colors.text.grey};
    margin-left: 20px;
  `}
`

export const ContentBar = styled.View`
 margin-left: 20px;
`

export const Ability = styled.Text`
${({ theme })=> css`
    font-style: normal;
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    line-height: 19px;
    text-transform: capitalize;
    color: ${theme.colors.text.black};
    padding: 10px 20px;
  `}
`