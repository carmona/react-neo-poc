import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils.tsx';
import App from './App.tsx';

test('renders app works text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Works!/i);
  expect(linkElement).toBeInTheDocument();
});
