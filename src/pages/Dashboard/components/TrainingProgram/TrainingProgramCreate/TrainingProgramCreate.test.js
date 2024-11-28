import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/index.jsx';

test('renders the TrainingProgramCreate page', () => {
  render(<Index />);
  const pageTitle = screen.getByText('Training Program Create Page Title');
  expect(pageTitle).toBeInTheDocument();
});