import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('Renders Nav Bar', () => {
  render(<App />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Sequencer/i)).toBeInTheDocument();
  expect(screen.getByText(/Users/i)).toBeInTheDocument();
});

test('The Counter buttons work', () => {
  render(<App />);
  const IncBtn = screen.getByText(/Increase/i);
  const decBtn = screen.getByText(/Decrease/i);
  expect(IncBtn).toBeInTheDocument();
  expect(decBtn).toBeInTheDocument();
  fireEvent.click(IncBtn);
  fireEvent.click(IncBtn);
  expect(screen.getByText('2')).toBeInTheDocument();
  fireEvent.click(decBtn);
  fireEvent.click(decBtn);
  fireEvent.click(decBtn);
  expect(screen.getByText('-1')).toBeInTheDocument();
  for (let i = 0; i < 20; i++) {
    fireEvent.click(IncBtn);
  }
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('PING button works', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('PING'));
  const pingtxt = await screen.getByText(/loading/);
  expect(pingtxt).toBeInTheDocument();
});
