import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import * as S from "./style";
import { useWindowDimensions } from "react-native";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type DirectionType = "fade-out-x" | "fade-in-x" | "fade-out-y" | "fade-in-y";
type FadeAnimationProps = ViewProps & {
   children: React.ReactNode;
   direction: DirectionType
}

export function FadeAnimation({ children, direction, ...rest }: FadeAnimationProps) {
   const { width: displayWidth, height: displayHeight } = useWindowDimensions();
   const cardOpacityOut = useSharedValue(1);
   const cardOpacityIn = useSharedValue(0);

   const cardOffsetOut = useSharedValue(0);
   const cardOffsetIn = useSharedValue(direction === "fade-in-x" || direction === "fade-out-x" ? 1.25 * displayWidth : 1.25 * displayHeight);

   function showDirection(direction: DirectionType) {
      switch (direction) {
         case "fade-out-x":
            console.log("entrei");
            cardOpacityOut.value = withTiming(0, { duration: 3000 });
            cardOffsetOut.value = withTiming(1.25 * displayWidth, { duration: 3000 });
            break;
         case "fade-in-x":
            cardOpacityIn.value = withTiming(1, { duration: 3000 });
            cardOffsetIn.value = withTiming(0, { duration: 3000 });
            break;
         case "fade-out-y":
            cardOpacityOut.value = withTiming(0, { duration: 3000 });
            cardOffsetOut.value = withTiming(3.25 * displayWidth, { duration: 3000 });
            break;
         case "fade-in-y":
            cardOpacityIn.value = withTiming(1, { duration: 3000 });
            cardOffsetIn.value = withTiming(0, { duration: 3000 });
            break;
         default:
            break;
      }
   }

   const animatedStyle = useAnimatedStyle(() => {
      'worklet'
      return {
         opacity: direction === "fade-in-x" || direction === "fade-in-y" ? cardOpacityIn.value
            : direction === "fade-out-x" || direction === "fade-out-y" ? cardOpacityOut.value : 0,
         transform: [
            {
               translateX: direction === "fade-in-x" || direction === "fade-in-y" ? cardOffsetIn.value
                  : direction === "fade-out-x" || direction === "fade-out-y" ? cardOffsetOut.value : 0,
            }
         ]
      }
   });

   const animatedNotification = useAnimatedStyle(() => {
      'worklet'
      return {
         opacity: direction === "fade-in-x" || direction === "fade-in-y" ? cardOpacityIn.value
            : direction === "fade-out-x" || direction === "fade-out-y" ? cardOpacityOut.value : 0,
         transform: [
            {
               translateY: direction === "fade-in-x" || direction === "fade-in-y" ? cardOffsetIn.value
                  : direction === "fade-out-x" || direction === "fade-out-y" ? cardOffsetOut.value : 0,
            }
         ]
      }
   });

   useEffect(() => {
      showDirection(direction);
   }, [])


   return (
      <S.AnimationContainer {...rest} style={direction === "fade-in-x" || direction === "fade-out-x" ? animatedStyle : animatedNotification}>
         {children}
      </S.AnimationContainer>
   )
}