import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/components/Status';

test('renders the status component with the correct text', () => {
  render(<Status text="Active" />);
  const statusElement = screen.getByText('Active');
  expect(statusElement).toBeInTheDocument();
});

test('applies the correct class based on the status type', () => {
  render(<Status text="Active" type="active" />);
  const statusElement = screen.getByText('Active');
  expect(statusElement).toHaveClass('active');
});