import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SearchBar';

test('renders the search input field with the correct placeholder', () => {
  render(<SearchBar placeholder="Search Programs" />);
  const inputElement = screen.getByPlaceholderText('Search Programs');
  expect(inputElement).toBeInTheDocument();
});

test('triggers the onSearch function when input value changes', () => {
  const onSearch = jest.fn();
  render(<SearchBar onSearch={onSearch} />);
  const inputElement = screen.getByPlaceholderText('Search Programs');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(onSearch).toHaveBeenCalledWith('test');
});