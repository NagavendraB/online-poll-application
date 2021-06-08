import styled from 'styled-components';

export const Button = styled.button.attrs(() => ({ 'data-testid': 'button' }))`
  padding: 12px;
  background: grey;
  color: white;
  cursor: pointer;
`;
