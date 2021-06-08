import styled from 'styled-components';

export const StyledChoicesRow = styled.div`
  border-bottom: 1px solid #cecaca;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  flex-wrap: wrap;
  
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const StyledColumn = styled.div`
  flex: 1;
`;

export const StyledLoader = styled.div`
  width: ${({ width }) => width || '70px'};
  height: 30px;
  display: block;
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
