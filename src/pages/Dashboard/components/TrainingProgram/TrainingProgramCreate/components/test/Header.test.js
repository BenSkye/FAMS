import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/Header';

test('renders the header with the correct title', () => {
  render(<Header title="Test Title" />);
  const headerElement = screen.getByText('Test Title');
  expect(headerElement).toBeInTheDocument();
});