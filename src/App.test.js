import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders plan your trip heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Plan Your Trip/i);
  expect(headingElement).toBeInTheDocument();
});
