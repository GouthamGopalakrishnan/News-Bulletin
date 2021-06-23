import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsBulletin from './App';

test('renders learn react link', () => {
  render(<NewsBulletin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
