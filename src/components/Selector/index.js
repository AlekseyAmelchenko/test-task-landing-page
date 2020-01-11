import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Label, OptionContainer, Option } from "./styles";

const Selector = props => {
  const { label, options, selected, onChange, optionWidth, mr } = props;
  const hasOptions = options && options.length > 0;
  return (
    <Container mr={mr}>
      <Label>{label}</Label>
      {hasOptions && (
        <OptionContainer>
          {options.map(item => {
            return (
              <Option
                width={optionWidth || "150px"}
                active={item === selected}
                onClick={() => {
                  onChange(item);
                }}
              >
                {item}
              </Option>
            );
          })}
        </OptionContainer>
      )}
    </Container>
  );
};

Selector.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

Selector.defaultProps = {
  options: [],
  selected: "",
  onChange: () => {}
};

export default Selector;
