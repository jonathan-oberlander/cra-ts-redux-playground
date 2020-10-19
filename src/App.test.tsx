import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders home screen', () => {
  const { getByText } = render(<App />);
  const homeNav = getByText(/Home/i);
  const IncBtn = getByText(/Increase/i);
  expect(homeNav).toBeInTheDocument();
  expect(IncBtn).toBeInTheDocument();
  fireEvent.click(IncBtn);
  fireEvent.click(IncBtn);
  const one = getByText('2');
  expect(one).toBeInTheDocument();
});
