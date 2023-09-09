import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import * as S from "./style";
import { useWindowDimensions } from "react-native";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type TypeShow = "appear" | "disappear";

type FadeAnimationProps = ViewProps & {
   children: React.ReactNode;
   duration: number;
   show: TypeShow;
}

export function OpacityAnimation({ children, show, duration, ...rest }: FadeAnimationProps) {

   const cardOpacityAppear = useSharedValue(0);
   const cardOpacityDisappear = useSharedValue(1);

   function showDirection(show: TypeShow) {
      (show === "appear") ? cardOpacityAppear.value = withTiming(1, { duration: duration }) 
      : cardOpacityDisappear.value = withTiming(0, { duration: 3000 });
   }

   const animatedStyle = useAnimatedStyle(() => {
      'worklet'
      return {
         opacity: show === "appear" ? cardOpacityAppear.value : show === "disappear" ? cardOpacityDisappear.value : 0,
         shadowOpacity: 0.3
      }
   });

   useEffect(() => {
      showDirection(show);
   }, [])


   return (
      <S.AnimationContainerOpacity {...rest} style={animatedStyle}>
         {children}
      </S.AnimationContainerOpacity>
   )
}