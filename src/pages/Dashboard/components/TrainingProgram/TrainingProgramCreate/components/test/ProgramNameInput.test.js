import React from 'react';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import ProgramNameInput from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/ProgramNameInput';

test('renders the input field with the correct placeholder', () => {
  render(<ProgramNameInput />);
  const inputElement = screen.getByPlaceholderText('Search by...');
  expect(inputElement).toBeInTheDocument();
});

test('triggers the handleInputTerm function when input value changes', () => {
  const handleInputTerm = jest.fn();
  render(<ProgramNameInput handleInputTerm={handleInputTerm} />);
  const inputElement = screen.getByPlaceholderText('Search by...');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(handleInputTerm).toHaveBeenCalledWith('test');
});