import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import SearchBar from './components/searchbar';
import '@testing-library/jest-dom'

test('renders search bar with placeholder text', () => {
  const setSearchQuery = jest.fn();
  render(<SearchBar setSearchQuery={setSearchQuery} />);

  const searchInput = screen.getByPlaceholderText('Enter restaurant name...');
  expect(searchInput).toBeInTheDocument();
});

test('updates search query on input change', () => {
  const setSearchQuery = jest.fn();
  render(<SearchBar setSearchQuery={setSearchQuery} />);

  const searchInput = screen.getByPlaceholderText('Enter restaurant name...');
  fireEvent.change(searchInput, { target: { value: 'Pizza' } });

  expect(setSearchQuery).toHaveBeenCalledWith('Pizza');
});
