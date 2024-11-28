import { render, screen } from '@testing-library/react';
import { ClassView } from '@/pages/Dashboard/components/Class/components/ClassView/index.jsx';

describe('ClassView', () => {
  test('renders the component', () => {
    render(<ClassView />);
    const classViewElement = screen.getByTestId('class-view');
    expect(classViewElement).toBeInTheDocument();
  });

  test('displays the correct number of rows', () => {
    render(<ClassView />);
    const rows = screen.getAllByTestId('table-row');
    expect(rows.length).toBe(5);
  });

  test('displays the correct column headers', () => {
    render(<ClassView />);
    const headers = screen.getAllByTestId('table-header');
    const expectedHeaders = [
      'Class',
      'Class Code',
      'Created By',
      'Duration',
      'Attendee',
      'Location',
      'FSU',
    ];
    expect(headers.map((header) => header.textContent)).toEqual(
      expectedHeaders
    );
  });
});
