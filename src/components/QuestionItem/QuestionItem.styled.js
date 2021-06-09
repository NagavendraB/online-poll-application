import styled from 'styled-components';

export const StyledQuestionItemWrapper = styled.div`
  border: 1px solid lightgrey;
  padding: 26px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  min-width: 260px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgb(0 0 0 / 30%), 0 0 40px rgb(0 0 0 / 10%) inset;
`;

export const StyledQuestion = styled.span`
  margin-bottom: 22px;
`;

export const StyledPublishedDate = styled.span`
  margin-bottom: 8px;
  color: grey;
`;

export const StyledChoicesLength = styled.span`
  color: grey;
`;

export const StyledLoader = styled.div`
  width: ${({ width }) => width || '70px'};
  height: 15px;
  display: block;
  margin-bottom: 14px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 80%
  ), lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  @keyframes shine {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;
