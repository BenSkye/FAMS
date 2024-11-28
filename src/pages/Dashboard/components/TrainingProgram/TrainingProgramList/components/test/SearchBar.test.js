import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/components/SearchBar';

test('renders the search input with the correct placeholder', () => {
  render(<SearchBar placeholder="Search..." />);
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();
});

test('triggers the onChange function when the search input value changes', () => {
  const onChange = jest.fn();
  render(<SearchBar onChange={onChange} />);
  const searchInput = screen.getByPlaceholderText('Search...');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(onChange).toHaveBeenCalledWith('test');
});

test('triggers the onSubmit function when the search form is submitted', () => {
  const onSubmit = jest.fn();
  render(<SearchBar onSubmit={onSubmit} />);
  const searchInput = screen.getByPlaceholderText('Search...');
  const searchForm = searchInput.closest('form');
  fireEvent.submit(searchForm);
  expect(onSubmit).toHaveBeenCalled();
});