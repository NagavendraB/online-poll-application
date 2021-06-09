import styled from 'styled-components';

export const StyledAddQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 36px;
  
  input[type="text"] {
    display: inline;
    margin-bottom: 17px;
    padding: 12px;
    min-width: 450px;
  }
  label {
    margin-bottom: 8px;
  }
`;

export const StyledSuccessMessage = styled.div`
  border: 4px solid #94ce94;
  padding: 12px;
  color: green;
  font-weight: bold;
`;

