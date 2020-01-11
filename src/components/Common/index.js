import styled from "styled-components";
import {
  space,
  flexbox,
  color,
  fontSize,
  fontFamily,
  background,
  border,
  width,
  grid,
  layout,
  textAlign
} from "styled-system";

export const Flex = styled.div`
  display: flex;
  ${space}
  ${layout}
  ${flexbox}
  ${background}
  ${color}
  ${border}
  ${fontSize}
`;

export const Grid = styled.div`
  display: grid;
  ${space}
  ${layout}
  ${grid}
  ${background}
  ${color}
  ${border}
  ${fontSize}
`;

export const StyledButton = styled(Flex).attrs({
  as: "button"
})``;

export const Row = styled(Flex)`
  align-items: center;
`;

export const Column = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledText = styled.p`
  ${space}
  ${color}
  ${fontSize}
  ${fontFamily}
  ${textAlign}
`;

export const Text = styled(StyledText).attrs({
  m: 0,
  p: 0
})``;

export const Image = styled.img`
  ${space}
  ${layout}
  ${flexbox}
  ${background}
  ${color}
  ${border}
  ${fontSize}
`;
