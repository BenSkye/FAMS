import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectedOptions from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SelectedOption';

test('renders the selected option with the correct label', () => {
  render(<SelectedOptions label="Option 1" />);
  const optionElement = screen.getByText('Option 1');
  expect(optionElement).toBeInTheDocument();
});

test('triggers the onRemove function when the remove button is clicked', () => {
  const onRemove = jest.fn();
  render(<SelectedOptions label="Option 1" onRemove={onRemove} />);
  const removeButton = screen.getByText('Remove');
  fireEvent.click(removeButton);
  expect(onRemove).toHaveBeenCalledWith('Option 1');
});