import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Categories from './components/categories';
import '@testing-library/jest-dom'

jest.mock('axios'); // Mock axios for testing data fetching

test('renders all categories and "All" button', async () => {
  const mockCategories = [
    { id: '1', name: 'Pizza' },
    { id: '2', name: 'Burgers' },
  ];
  const setSelectedCategory = jest.fn();

  // Mock axios response
  (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockCategories });

  render(<Categories setSelectedCategory={setSelectedCategory} />);

  
  const allButton = await screen.findByText('All');
  expect(allButton).toBeInTheDocument();


  const categoryButtons = screen.getAllByRole('button', { name: /Pizza|Burgers/i });
  expect(categoryButtons).toHaveLength(mockCategories.length);

 
  fireEvent.click(categoryButtons[0]); // Assuming the first button is "Pizza"

  // Verify if setSelectedCategory was called with the correct argument
  expect(setSelectedCategory).toHaveBeenCalledWith('pizza');
});
