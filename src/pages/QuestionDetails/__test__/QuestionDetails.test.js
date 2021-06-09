import React from 'react';
import ReactRouter from 'react-router';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import QuestionDetails from '../QuestionDetails';
import { reducer } from '../../../redux/reducers';

const render = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
};

let component;

beforeEach(() => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
  component = render(<QuestionDetails />, { initialState: { isQuestionAdded: false } });
});

describe('QuestionDetails', () => {
  test('QuestionDetails screen should have correct title', () => {
    const headerEl = component.getByTestId('header');
    expect(headerEl.textContent).toBe('Questions Details');
  });

  test('QuestionDetails screen should show loader initially', async () => {
    expect(component.getByTestId('loading')).toBeTruthy();
  });
});


