import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${props => props.textColor};
  background-color: ${props => {
    switch (props.disabled) {
      case true:
        return "gray";
      case false:
        return props.backgroundColor;
    }
  }};
  height: ${props => {
    switch (props.size) {
      case "small":
        return "5vh";
      case "medium":
        return "10vh";
      case "large":
        return "15vh";
    }
  }};
`;

export const Button = props => (
  <StyledButton {...props}>{props.text}</StyledButton>
);

Button.defaultProps = {
  backgroundColor: "blue",
  textColor: "white",
  size: "medium"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func.isRequired
};
