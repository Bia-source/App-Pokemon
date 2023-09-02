import styled, {css} from "styled-components/native";

export const Container = styled.View`
 ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background.white};
 `}
`

export const Title = styled.Text`
  font-size: 20px;
  color: "black";
`