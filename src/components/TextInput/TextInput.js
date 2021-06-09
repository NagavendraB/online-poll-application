import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextInputWrapper } from './TextInput.styled';

const TextInput = ({
  id,
  label,
  value,
  placeholder,
  onChange,
}) => (
  <StyledTextInputWrapper>
    <label htmlFor="name" data-testid="label">{label}</label>
    <input
      id={id}
      data-testid={id}
      tabIndex="0"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </StyledTextInputWrapper>
);

TextInput.defaultProps = {
  id: '',
  label: '',
  value: '',
  placeholder: '',
  onChange: () => {},
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
