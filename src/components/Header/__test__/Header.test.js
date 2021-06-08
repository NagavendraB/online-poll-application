import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

describe('Header', () => {
  test('Header should render correct title', () => {
    const component = render(<Header title="Online Poll App">Add question</Header>);
    const headerEl = component.getByTestId('header');
    expect(headerEl.textContent).toBe('Online Poll App');
  });
});


