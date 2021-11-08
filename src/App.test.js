import React from 'react';
import App from './App';
import { fireEvent } from '@testing-library/dom';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

afterEach(() => {
  cleanup()
});

test('initial UI is rendered as expected', () => {
  const renderApp = () => render(<App />);
  let { getByTestId, queryByTestId } = renderApp();
});
