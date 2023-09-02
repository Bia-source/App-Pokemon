import React from "react";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type ButtonComponentProps = TouchableOpacityProps & {
    type: string;
    size: string;
    title: string;
}

export function Button({type, title, size, ...rest}: ButtonComponentProps) {
    return (
        <S.Container {...rest}
         type={type}
         size={size}
        >
          <S.Title type={type}> {title} </S.Title>
        </S.Container>
    )
}