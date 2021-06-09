import React from 'react';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AddQuestion from '../AddQuestion';
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
  component = render(<AddQuestion />, { initialState: { isQuestionAdded: false } });
});

describe('AddQuestion', () => {
  test('AddQuestion screen should have correct title', () => {
    const headerEl = component.getByTestId('header');
    expect(headerEl.textContent).toBe('Add Question');
  });

  test('Add Question renders with label to enter the question', async () => {
    expect(await screen.findByText('Please Enter the Question:')).toBeTruthy();
  });

  test('Add Question renders with label to enter the choices', async () => {
    expect(await screen.findByText(
      'Please Enter Choices: (Please enter at least two choices with comma separated)'
    )).toBeTruthy();
  });

  test("Adding Question and Choices should be possible", async () => {
    const addQuestionInputEl = screen.queryByTestId("add-question");
    const addChoiceInputEl = screen.queryByTestId("add-choice");

    expect(addQuestionInputEl.textContent).toBe("");

    fireEvent.change(addQuestionInputEl, { target: { value: "This is the test question." } });

    expect(addQuestionInputEl.value).toBe("This is the test question.");


    expect(addChoiceInputEl.textContent).toBe("");

    fireEvent.change(addChoiceInputEl, { target: { value: "Test choice1, Test choice2" } });

    expect(addChoiceInputEl.value).toBe("Test choice1, Test choice2");
});


