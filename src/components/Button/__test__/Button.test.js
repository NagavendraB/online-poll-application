import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '../Button.styled';

describe('Button', () => {
  test('Button should renders with correct label', () => {
    const component = render(<Button >Add question</Button>);
    const buttonEl = component.getByTestId('button');

    expect(buttonEl.textContent).toBe('Add question');
  });
});
