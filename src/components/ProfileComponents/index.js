import React from "react";
import styled from "styled-components";
import { Flex, Image, Grid } from "../Common";

export const ProfileGrid = styled(Grid).attrs({})`
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Profile = styled(Flex).attrs({
  width: "305px",
  bg: "#b5b5b5",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "3",
  mb: "2"
})``;
export const NoPhoto = styled(Image).attrs({
  src: "https://bizraise.pro/wp-content/uploads/2014/09/no-avatar.png",
  width: "150px",
  height: "150px"
})`
  flex: 0 0 auto;
`;
export const Info = styled(Flex).attrs({
  p: "3"
})``;
export const Name = styled(Flex).attrs({})``;
export const City = styled(Flex).attrs({
  p: "3",
  width: "70px"
})``;

export const Students = styled(Flex).attrs({
  p: "3"
})``;
export const LogoUsers = styled(Image).attrs({
  src: "https://bizraise.pro/wp-content/uploads/2014/09/no-avatar.png",
  width: "50px",
  height: "50px",
  borderRadius: "50px",
  mr: "2",
  flexDirection: "row"
})`
  &:last-child {
    margin-right: 0;
  }
`;
export const InfoContainer = styled(Flex).attrs({
  bg: "#cecece",
  height: "100%",
  flexDirection: "column",
  width: "100%"
})`
  border-radius: 0px 0px 10px 10px;
`;
export const LogoContainer = styled(Flex).attrs({
  p: "3"
})``;
export const CityContainer = styled(Flex).attrs({
  p: "3"
})``;

export const BorderLine = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  margin-bottom: 30px;
`;
