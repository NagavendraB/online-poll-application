import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TextInput from '../TextInput';

let getByTestId;

beforeEach(() => {
  const component = render(<TextInput
    id="text-input"
    label="Please add a Question"
  />);
  // eslint-disable-next-line prefer-destructuring
  getByTestId = component.getByTestId;
});

describe('TextInput', () => {
  test('TextInput renders with correct label', () => {
    const textInputEl = getByTestId('label');
    expect(textInputEl.textContent).toBe('Please add a Question');
  });

  test('TextInput renders with empty text input field initially', () => {
    const textInputEl = getByTestId('text-input');
    expect(textInputEl.value).toBe('');
  });
});

