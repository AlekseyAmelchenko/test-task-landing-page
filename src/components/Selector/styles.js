import styled from "styled-components";
import { Row, Text, Flex } from "../Common";

export const Container = styled(Row)``;
export const Label = styled(Text).attrs({
  color: "grey",
  mr: 3
})`
  &:after {
    content: ":";
  }
`;
export const OptionContainer = styled(Row).attrs({
  bg: "option",
  borderRadius: 3
})`
  border: ${props => `1px solid ${props.theme.colors.stroke}`};
  overflow: hidden;
`;
export const Option = styled(Flex).attrs(props => ({
  alignItems: "center",
  justifyContent: "center",
  bg: props.active ? "green" : "transparent",
  color: props.active ? "white" : "grey",
  py: 3
}))`
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  user-select: none;
`;
export const HeaderColumn = styled(Flex).attrs({
  alignItems: "center",
  mb: 4,
  bg: "gray"
})`
  flex-direction: column;
  height: 250px;
`;
