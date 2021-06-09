import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ChoiceItem from '../ChoiceItem';

let getByTestId;

beforeEach(() => {
  const component = render(<ChoiceItem
    index={1}
    choice="This is choice item"
    votes={2}
    percentage={20}
  />);
  // eslint-disable-next-line prefer-destructuring
  getByTestId = component.getByTestId;
});

describe('ChoiceItem', () => {
  test('ChoiceItem should render correct choice', () => {
    const choiceItemEl = getByTestId('choice');
    expect(choiceItemEl.textContent).toBe('Choice2: This is choice item');
  });

  test('ChoiceItem renders with correct votes', () => {
    const choiceItemEl = getByTestId('votes');
    expect(choiceItemEl.textContent).toBe('Votes: 2');
  });

  test('ChoiceItem renders with correct percentage', () => {
    const choiceItemEl = getByTestId('percentage');
    expect(choiceItemEl.textContent).toBe('Percent: 20%');
  });
});

