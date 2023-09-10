import styled, { css } from "styled-components/native";

export const Container = styled.View`
${({ theme }) => css`
    flex: 0.5;
    background-color: ${theme.colors.background.white};
 `}
 position: absolute;
 margin-top: 500px;
 width: 100%;
 height: 100%;
 padding: 25px;
 border-top-right-radius: 20px;
 border-top-left-radius: 20px;
`

export const Title = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.text.black};
 `}
`
export const Subtitle = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.text.grey};
    max-width: 334px;
 `}
 
`
export const TitleFilterType = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.text.black};
 `}
`

export const ContentItensFilter = styled.View`
 flex-direction: row;
`

export const ContentIconFilter = styled.TouchableOpacity`
  
`
export const IconFilter = styled.Image`

`

