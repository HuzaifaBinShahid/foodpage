import React from 'react';
import { render, screen } from '@testing-library/react';
import Items from './components/items';
import '@testing-library/jest-dom'

test('items component renders correctly', async () => {
  render(<Items searchQuery="" selectedCategory={null} />);

  // Use a more flexible text matching strategy
  const showMoreButton = await screen.findByText(/Show More/i);
  expect(showMoreButton).toBeInTheDocument();
});
