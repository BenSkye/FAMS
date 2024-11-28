import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MaterialModal from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/components/MaterialModal.jsx';

describe('Material Modal Test', () => {
  test('action test modal button', () => {
    render(<MemoryRouter><MaterialModal /></MemoryRouter>);
    const buttonModal = screen.getByRole('button', { name: '' });
    fireEvent.click(buttonModal);
    expect(screen.getByText('Unit 5')).toBeInTheDocument();
    expect(screen.getByText('.NET introduction')).toBeInTheDocument();
    expect(screen.getByText('PDF File')).toBeInTheDocument();
    expect(screen.getByText('By Joseph in 12/03/2022')).toBeInTheDocument();
  });
});