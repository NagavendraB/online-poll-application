import React from 'react';

import {
  StyledQuestionItemWrapper,
  StyledLoader,
} from './QuestionItem.styled';

const QuestionItemSkeleton = () => (
  <StyledQuestionItemWrapper>
    <StyledLoader width="40%" />
    <StyledLoader width="90%" />
    <StyledLoader width="90%" />
  </StyledQuestionItemWrapper>
);

QuestionItemSkeleton.defaultProps = {
};

QuestionItemSkeleton.propTypes = {
};

export default QuestionItemSkeleton;
