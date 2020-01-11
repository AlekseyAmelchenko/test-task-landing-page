import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Common";

export const Button = styled(StyledButton).attrs(props => ({
  bg: "green",
  width: "150px",
  py: "3",
  color: "white",
  fontSize: 2,
  borderRadius: "3",
  border: `1px solid ${props.theme.colors.darkGreen}`,
  justifyContent: "center"
}))`
  border: none;
  user-select: none;
  cursor: pointer;
  outline: none;
`;

export const SecondButton = styled(Button).attrs({
  bg: "#dadada",
  py: 3,
  px: 4,
  fontSize: 2,
  width: "auto",
  m: "0 auto",
  mb: "4",
  color: "#222B3a"
})``;
