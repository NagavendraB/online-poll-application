import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button.styled';
import {
  StyledChoicesRow,
  StyledColumn,
} from './ChoiceItem.styled';

const ChoiceItem = ({
  index,
  choice,
  votes,
  percentage,
  onClickSaveVote,
}) => (
  <StyledChoicesRow>
    <StyledColumn data-testid="choice">Choice{index + 1}: {choice}</StyledColumn>
    <StyledColumn data-testid="votes">Votes: {votes}</StyledColumn>
    <StyledColumn data-testid="percentage">Percent: {percentage}%</StyledColumn>
    <Button onClick={onClickSaveVote}>Save vote</Button>
  </StyledChoicesRow>
);

ChoiceItem.defaultProps = {
  onClickSaveVote: () => {},
};

ChoiceItem.propTypes = {
  index: PropTypes.number.isRequired,
  choice: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  onClickSaveVote: PropTypes.func,
};

export default ChoiceItem;
