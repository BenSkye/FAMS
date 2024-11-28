import React from 'react';
import { render, screen } from '@testing-library/react';
import { TrainingProgramList } from "@/pages/Dashboard/components/TrainingProgram/TrainingProgramListt";
import { trainingProgramTable } from "@/mocks/trainingProgramFakeData";


describe('TrainingProgramList', () => {
  test('renders the TrainingProgramList component with the correct elements', () => {
    render(<TrainingProgramList />);
    expect(screen.getByText('TRAINING PROGRAM')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('import-button')).toBeInTheDocument();
    expect(screen.getByTestId('add-new-button')).toBeInTheDocument();
  });

  test('loads the training programs correctly', () => {
    const mockTrainingPrograms = [
      trainingProgramTable[0], trainingProgramTable[1], trainingProgramTable[2], trainingProgramTable[3], trainingProgramTable[4]
    ];
    jest.spyOn(React, 'useState').mockReturnValue([mockTrainingPrograms, jest.fn()]);
    render(<TrainingProgramList />);
    expect(screen.getByText(trainingProgramTable[0].programName)).toBeInTheDocument();
  });
});