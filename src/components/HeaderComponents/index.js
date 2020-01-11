import React from "react";
import styled from "styled-components";
import { Row, StyledButton, Text } from "../Common";

export const HeaderContainer = styled(Row).attrs({
  justifyContent: "space-between",
  p: "20px",
  alignItems: "center",
  bg: "gray"
})``;

export const Left = styled(Text).attrs({})`
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 18px;
`;

export const Center = styled(Text).attrs({
  mr: "4"
})``;

export const SignIn = styled(StyledButton).attrs({
  bg: "transparent",
  border: "1px solid grey",
  borderRadius: "4px",
  width: "70px",
  justifyContent: "center"
})`
  outline: none;
  cursor: pointer;
  &:hover {
  }
`;
