import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import i18n from './Fakei18n';

jest.unmock('react-i18next');

const testingResources = {
  hello: 'こんばんは {{target}}'
};

i18n.addResourceBundle('ja', 'app', testingResources);

test('renders hello text', () => {
  const { getByTestId } = render(<App />);
  const helloElement = getByTestId('hello-area');
  expect(helloElement.textContent).toBe('こんばんは React i18n');
});
