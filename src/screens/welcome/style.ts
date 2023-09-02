import styled, { ThemeProps, css } from "styled-components/native";

export const Container = styled.View`
 ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background.red_light};
 `}
`

export const Content = styled.View`
  height: 70%;
  max-width: 80%;
  margin-left: 10%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.font_size.lg}px;
    color: ${theme.colors.text.white};
  `}
  margin-top: 20px;
`

export const SubTitle = styled.Text`
  ${({ theme })=> css`
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.text.white};
  `}
  margin-top: 5px;
`

export const Footer = styled.View`
  ${({ theme }) => css`
     justify-content: center;
     align-items: center;
     border-top-right-radius: 20px;
     border-top-left-radius: 20px;
     height: 30%;
     background-color: ${theme.colors.background.white};
  `}
`

