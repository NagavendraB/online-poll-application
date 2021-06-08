import React from 'react';
import ReactRouter from 'react-router';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Questions from '../Questions';
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

const initialState = [
  {
    published_at: "2021-06-07T20:33:38.906Z",
    question: "What is you favourite food?",
    url: "/questions/31",
    choices: [
      {
        choice: "Risotto",
        url: "/questions/31/choices/126",
        votes: 3,
      },
      {
        choice: "Pasta",
        url: "/questions/31/choices/124",
        votes: 2,
      }
    ]
  },
  {
    published_at: "2021-06-07T20:33:38.906Z",
    question: "What is you favourite food?",
    url: "/questions/31",
    choices: [
      {
        choice: "Risotto",
        url: "/questions/31/choices/126",
        votes: 3,
      },
      {
        choice: "Pasta",
        url: "/questions/31/choices/124",
        votes: 2,
      }
    ]
  },
];

beforeEach(() => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
  component = render(<Questions />, { initialState });
});

describe('Questions', () => {
  test('Questions screen should have correct title', () => {
    const headerEl = component.getByTestId('header');
    expect(headerEl.textContent).toBe('Questions');
  });
});


