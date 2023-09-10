import styled from "styled-components/native";

type SeparatorProps = {
    distance: number;
}
export const ContainerH = styled.View<SeparatorProps>`
  margin-top: ${({ distance }) => distance}px;
`
export const ContainerV = styled.View<SeparatorProps>`
 margin-left: ${({ distance }) => distance}px;
`