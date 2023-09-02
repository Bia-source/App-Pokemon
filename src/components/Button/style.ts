import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "white" | "red_light" | "modal"  ; 
export type ButtonSizeStyleProps = "sm" | "md" | "lg" | "xlg";

type Props = {
  type?: ButtonTypeStyleProps;
  size?: ButtonSizeStyleProps;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, type, size })=> css`
     width: ${size == "lg" ? 100
     : size == "md" ? 50 
     : size == "sm" ? 30 
     : 100
    }%;
     height: 50px;
     background-color: ${type == "white" ? theme.colors.background.red_light
     : type == "modal" ?  theme.colors.background.modal
     : type == "red_light" ?  theme.colors.background.red_light
     : theme.colors.background.pressed_input
    };
  `}

  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

export const Title = styled.Text`
 ${({ theme })=> css`
  font-size: ${theme.font_size.sm};
  color: ${theme.colors.text.white};
 `}

`