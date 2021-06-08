import React from 'react';

import {
  StyledChoicesRow,
  StyledLoader,
  StyledColumn,
} from './ChoiceItem.styled';

const ChoiceItemSkeleton = () => (
  <StyledChoicesRow>
    <StyledColumn><StyledLoader width="25%" /></StyledColumn>
    <StyledColumn><StyledLoader width="25%" /></StyledColumn>
    <StyledColumn><StyledLoader width="25%" /></StyledColumn>
    <StyledColumn><StyledLoader width="25%" /></StyledColumn>
  </StyledChoicesRow>
);

ChoiceItemSkeleton.defaultProps = {
};

ChoiceItemSkeleton.propTypes = {
};

export default ChoiceItemSkeleton;
