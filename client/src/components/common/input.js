import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
`;

export const Input = props => <StyledInput {...props} />;

Input.defaultProps = {
    value: "",
    type: "text"
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};
