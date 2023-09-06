import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get("window").width;

export const Container = styled.ScrollView`
 ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background.white};
    /* padding: 20px; */
 `}

`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xlg}px;
    line-height: 38px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.text.black};
    
 `}
`

export const Header = styled.ImageBackground`
${({ theme }) => css`
    height: 220px;
    width: ${windowWidth}px;
    background-color: ${theme.colors.background.white};
    margin-left: -20px;
 `}
`;