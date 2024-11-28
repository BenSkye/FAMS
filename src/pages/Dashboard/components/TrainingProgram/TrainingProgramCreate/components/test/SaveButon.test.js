import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SaveButton from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SaveButton';

test('renders the save button with the correct label', () => {
  render(<SaveButton label="Save Program" />);
  const buttonElement = screen.getByText('Save Program');
  expect(buttonElement).toBeInTheDocument();
});

test('triggers the onSave function when the button is clicked', () => {
  const onSave = jest.fn();
  render(<SaveButton label="Save Program" onSave={onSave} />);
  const buttonElement = screen.getByText('Save Program');
  fireEvent.click(buttonElement);
  expect(onSave).toHaveBeenCalled();
});