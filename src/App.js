import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Globalstyles from "./globals";
import { Column, Row, Image } from "./components/Common";
import Selector from "./components/Selector";
import {
  Title,
  Description,
  OurTutors,
  OurDescription
} from "./components/TextComponents";
import { Button, SecondButton } from "./components/ButtonComponents";
import { HeaderColumn } from "./components/Selector/styles";
import {
  HeaderContainer,
  Left,
  Center,
  SignIn
} from "./components/HeaderComponents";
import {
  ProfileGrid,
  Profile,
  Info,
  NoPhoto,
  Name,
  City,
  Students,
  LogoUsers,
  InfoContainer,
  LogoContainer,
  CityContainer,
  BorderLine
} from "./components/ProfileComponents";

function App() {
  const [filter, pickFilter] = useState("London");
  const [sortBy, pickSort] = useState("No");
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <HeaderContainer>
        <Left>tutormatch</Left>
        <Row>
          <Center>Become a Tutor</Center>
          <SignIn>Sign in</SignIn>
        </Row>
      </HeaderContainer>
      <HeaderColumn>
        <Title>The Place where Tutors and Students meet</Title>
        <Description>
          Find out who can help you take your educations to the text level
        </Description>
        <Button>Get started now</Button>
      </HeaderColumn>
      <OurTutors>Our Tutors</OurTutors>
      <OurDescription>
        We have more than 100 tutors from various disciplines ready to match
        with you
      </OurDescription>
      <Column p={3}>
        <Row>
          <Selector
            label={"Filter By"}
            options={["London", "Manchester", "Dublin"]}
            selected={filter}
            onChange={pickFilter}
            mr={4}
          />
          <Selector
            label={"Sort By"}
            options={["Yes", "No"]}
            optionWidth={"80px"}
            selected={sortBy}
            onChange={pickSort}
          />
        </Row>
      </Column>
      <BorderLine />
      <ProfileGrid>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          {/* чего тут у тебя :) как сделать через display : grid ? */}
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
        <Profile>
          <NoPhoto />
          <InfoContainer>
            <Info>
              <Name>John Issac</Name>
            </Info>
            <CityContainer>City</CityContainer>
            <City>London</City>
            <Students>Students so far</Students>
            <LogoContainer>
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
              <LogoUsers />
            </LogoContainer>
          </InfoContainer>
        </Profile>
      </ProfileGrid>
      <SecondButton>See all Tutors</SecondButton>
    </ThemeProvider>
  );
}

export default App;
