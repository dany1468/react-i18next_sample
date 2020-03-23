import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn_react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn_react/i);
  expect(linkElement).toBeInTheDocument();
});
