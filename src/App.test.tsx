import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Click me button is there', () => {
  const { container, getByText } = render(<App />);
  const btn = getByText(/Click me/i);
  const header = container.querySelector('header');
  expect(header.classList.contains('selected')).toBe(false);

  fireEvent.click(btn);
  expect(header.classList.contains('selected')).toBe(true);

  fireEvent.click(btn);
  expect(header.classList.contains('selected')).toBe(false);
});
