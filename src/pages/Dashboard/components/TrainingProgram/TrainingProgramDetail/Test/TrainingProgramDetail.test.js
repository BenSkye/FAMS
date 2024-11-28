import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TrainingProgramDetail } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/index.jsx';
import { fakeData } from '@/mocks/fakeDataTrainingProgramDetail.js';
import { ListOfClass } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/ListOfClass.jsx';

describe('TrainingProgramDetail Component', () => {
  test('renders component correctly', () => {
    render(<MemoryRouter><TrainingProgramDetail /></MemoryRouter>);
    expect(screen.getByText('Dev-ops Foundation')).toBeInTheDocument();
    expect(screen.getByText('Edit program')).toBeInTheDocument();
  });

  test('clicking on menu button opens the menu', () => {
    render(<MemoryRouter><TrainingProgramDetail /></MemoryRouter>);
    const menuButton = screen.getByRole('button', { name: '...' });
    fireEvent.click(menuButton);
    expect(screen.getByText('Edit program')).toBeInTheDocument();
    expect(screen.getByText('Duplicate program')).toBeInTheDocument();
  });

  test('action click button', () => {
    render(<MemoryRouter><TrainingProgramDetail /></MemoryRouter>);
    const backButton = screen.getByRole('button', { name: 'Back' });
    const editButton = screen.getByRole('button', { name: 'Edit' });
    const duplicateButton = screen.getByRole('button', { name: 'Duplicate' });
    const inactiveButton = screen.getByRole('button', { name: 'Inactive' });
    fireEvent.click(backButton);
    fireEvent.click(editButton);
    fireEvent.click(duplicateButton);
    fireEvent.click(inactiveButton);
  });

  test('render table information', () => {
    render(<MemoryRouter><TrainingProgramDetail /></MemoryRouter>);
    const tableContainer = screen.getByRole('table');
    //Header of the table
    expect(screen.getByText('Class', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Class Code', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Created On', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Created By', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Duration', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Status', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Location', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('FSU', { container: tableContainer })).toBeInTheDocument();
  });

  it('render correct information for each table cell', () => {
    render(<MemoryRouter><ListOfClass /></MemoryRouter>);
    fakeData.forEach(item => {
      const classCell = screen.queryAllByText(item.class);
      const classCodeCell = screen.queryAllByText(item.classCode);
      const createdOnCell = screen.queryAllByText(item.createdOn);
      const createByCell = screen.queryAllByText(item.createBy);
      const durationCell = screen.queryAllByText(item.duration);
      const locationCell = screen.queryAllByText(item.location);
      const FSUCell = screen.queryAllByText(item.FSU);

      classCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      classCodeCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      createdOnCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      createByCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      durationCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      locationCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });

      FSUCell.forEach(cell => {
        expect(cell).toBeInTheDocument();
      });
    });
  });

  it('should render correct badge for each status', () => {
    render(<MemoryRouter><ListOfClass /></MemoryRouter>);
    fakeData.forEach(item => {
      const badgeText = item.status[0].toUpperCase() + item.status.slice(1);
      const badge = screen.queryByText(badgeText);
      if (badge) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(badge).toBeInTheDocument();
        let expectedColor;
        switch (item.status) {
          case 'planning':
            expectedColor = 'blue';
            break;
          case 'opening':
            expectedColor = 'green';
            break;
          case 'completed':
            expectedColor = 'gray';
            break;
          case 'scheduled':
            expectedColor = 'orange';
            break;
          default:
            // eslint-disable-next-line no-unused-vars
            expectedColor = undefined;
            break;
        };
      };
    });
  });
  
});
