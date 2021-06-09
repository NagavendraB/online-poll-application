import styled from 'styled-components';

import { Button } from '../../components/Button/Button.styled';

export const StyledQuestionsWrapper = styled.div``;

export const StyledQuestionsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
   @media (min-width: 768px) {
     justify-content: initial;
  }
`;

export const StyledButton = styled(Button)`
  margin: 16px;
`;

