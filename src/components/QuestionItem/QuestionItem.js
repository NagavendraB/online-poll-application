import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledChoicesLength,
  StyledPublishedDate,
  StyledQuestion,
  StyledQuestionItemWrapper,
} from './QuestionItem.styled';

const QuestionItem = ({
  question,
  publishedAt,
  choicesLength,
  onClickQuestionItem,
}) => (
  <StyledQuestionItemWrapper onClick={onClickQuestionItem}>
    <StyledQuestion data-testid="question">{question}</StyledQuestion>
    <StyledPublishedDate data-testid="published-at">Published: {publishedAt}</StyledPublishedDate>
    <StyledChoicesLength data-testid="choices-length">Choices length: {choicesLength}</StyledChoicesLength>
  </StyledQuestionItemWrapper>);

QuestionItem.defaultProps = {
  onClickQuestionItem: () => {},
};

QuestionItem.propTypes = {
  question: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  choicesLength: PropTypes.number.isRequired,
  onClickQuestionItem: PropTypes.func,
};

export default QuestionItem;
