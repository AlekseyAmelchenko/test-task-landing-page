import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Selector from "../components/Selector";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyles from "../globals";
import { Row, Column } from "../components/Common";
import { Option } from "../components/Selector/styles";

export default {
  title: "Selector"
};

export const checkOption = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Column p={4}>
      <Option>London</Option>
      <Option active>London</Option>
    </Column>
  </ThemeProvider>
);

export const emptySelector = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Column p={4}>
      <Selector label={"Sort By"} />
    </Column>
  </ThemeProvider>
);

export const twoItems = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Column p={4}>
      <Selector
        label={"Sort By"}
        options={["Name", "City"]}
        selected={"City"}
      />
    </Column>
  </ThemeProvider>
);

export const threeItems = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Column p={4}>
      <Selector
        label={"Sort By"}
        options={["London", "Manchester", "Dublin"]}
        selected={"City"}
      />
    </Column>
  </ThemeProvider>
);

export const yesNo = () => {
  const [selected, makeSelected] = useState("No");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Column p={4}>
        <Selector
          label={"Sort By"}
          options={["Yes", "No"]}
          optionWidth={"80px"}
          selected={selected}
          onChange={makeSelected}
        />
      </Column>
    </ThemeProvider>
  );
};

export const twoSelectors = () => {
  const [filter, pickFilter] = useState("London");
  const [sortBy, pickSort] = useState("No");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Row p={4}>
        <Selector
          label={"Filter By"}
          options={["London", "Manchester", "Dublin"]}
          optionWidth={"80px"}
          selected={filter}
          onChange={pickFilter}
        />
        <Selector
          label={"Sort By"}
          options={["Yes", "No"]}
          optionWidth={"80px"}
          selected={sortBy}
          onChange={pickSort}
        />
      </Row>
    </ThemeProvider>
  );
};
