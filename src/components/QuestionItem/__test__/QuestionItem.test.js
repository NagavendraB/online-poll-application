import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import QuestionItem from '../QuestionItem';

let getByTestId;

beforeEach(() => {
  const component = render(<QuestionItem
    question="This is a question?"
    publishedAt="1/1/2020 10:12"
    choicesLength={2}
  />);
  // eslint-disable-next-line prefer-destructuring
  getByTestId = component.getByTestId;
});

describe('QuestionItem', () => {
  test('QuestionItem should renders with correct question', () => {
    const questionItemEl = getByTestId('question');
    expect(questionItemEl.textContent).toBe('This is a question?');
  });

  test('QuestionItem renders with correct publishedAt date', () => {
    const questionItemEl = getByTestId('published-at');
    expect(questionItemEl.textContent).toBe('Published: 1/1/2020 10:12');
  });

  test('QuestionItem renders with correct choices length', () => {
    const questionItemEl = getByTestId('choices-length');
    expect(questionItemEl.textContent).toBe('Choices length: 2');
  });
});

