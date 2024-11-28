import React from 'react';
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';
import Buttons from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/components/Buttons';

test('renders the primary button with the correct label', () => {
  render(<Buttons primaryLabel="Save" />);
  const primaryButton = screen.getByText('Save');
  expect(primaryButton).toBeInTheDocument();
});

test('triggers the onClick function when the primary button is clicked', () => {
  const onClick = jest.fn();
  render(<Buttons primaryLabel="Save" primaryOnClick={onClick} />);
  const primaryButton = screen.getByText('Save');
  fireEvent.click(primaryButton);
  expect(onClick).toHaveBeenCalled();
});

test('renders the secondary button with the correct label', () => {
  render(<Buttons secondaryLabel="Cancel" />);
  const secondaryButton = screen.getByText('Cancel');
  expect(secondaryButton).toBeInTheDocument();
});

test('triggers the onClick function when the secondary button is clicked', () => {
  const onClick = jest.fn();
  render(<Buttons secondaryLabel="Cancel" secondaryOnClick={onClick} />);
  const secondaryButton = screen.getByText('Cancel');
  fireEvent.click(secondaryButton);
  expect(onClick).toHaveBeenCalled();
});