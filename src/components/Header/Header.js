import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './Header.styled';

const Header = ({ title }) => <StyledHeader data-testid="header">{title}</StyledHeader>;

Header.defaultProps = {
  title: '',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
