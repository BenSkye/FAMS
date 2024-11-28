import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProgramList } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramList/ProgramList';
import { trainingProgramTable } from "@/mocks/trainingProgramFakeData";

describe('ProgramList', () => {
  test('renders the table headers correctly', () => {
    render(<ProgramList data={trainingProgramTable} />);

    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Program name')).toBeInTheDocument();
    expect(screen.getByText('Created on')).toBeInTheDocument();
    expect(screen.getByText('Create by')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('applies the correct filters to the table headers', () => {
    const mockData = [
      trainingProgramTable[0], trainingProgramTable[1], trainingProgramTable[2], trainingProgramTable[3], trainingProgramTable[4]
    ];

    render(<ProgramList data={mockData} />);

    const filterIcon = screen.getByTestId('filter-icon-ID');
    fireEvent.click(filterIcon);
  });

});