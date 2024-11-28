import React from 'react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SyllabusList } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/index';
import { DataTableSyllabus } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/DataTableSyllabus';
import CalendarPopover from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/CalendarPopover';
import { PopupModal } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/PopupModal';
import { mockData } from '@/mocks/syllabusListData.js';

// Testing SyllabustList Render
// 2 Cases
describe('SyllabusList', () => {
  test('renders SyllabusList component', () => {
    render(
      <MemoryRouter>
        <SyllabusList />
      </MemoryRouter>
    );
    const syllabusText = screen.getByLabelText('Heading Page');
    expect(syllabusText).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(
      <MemoryRouter>
        <SyllabusList />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'New Value' } });
    expect(searchInput.value).toBe('New Value');
  });
});

// Testing CalendarPopover Components
// 3 Cases
describe('CalendarPopover', () => {
  test('renders CalendarPopover component with default state', () => {
    render(
      <MemoryRouter>
        <CalendarPopover />
      </MemoryRouter>
    );

    // Check if the button with default text is rendered
    const buttonElement = screen.getByRole('button', { name: /Created date/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('opens and closes the popover', () => {
    render(
      <MemoryRouter>
        <CalendarPopover />
      </MemoryRouter>
    );

    // Check if the popover is closed initially
    const popoverContent = screen.queryByRole('dialog');
    expect(popoverContent).not.toBeInTheDocument();

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: /Created date/i }));

    // Check if the popover is open
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Close the popover
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    // Check if the popover is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('clears selected date range', () => {
    render(
      <MemoryRouter>
        <CalendarPopover />
      </MemoryRouter>
    );

    // Open the popover
    fireEvent.click(screen.getByRole('button', { name: /Created date/i }));

    // Select a date range
    fireEvent.click(screen.getByText('15'));
    fireEvent.click(screen.getByText('20'));

    // Check if the selected date range is displayed
    expect(screen.getByText('15/02/2024 - 20/02/2024')).toBeInTheDocument();

    // Click the clear button
    fireEvent.click(screen.getByRole('button', { name: /Clear/i }));

    // Check if the date range is cleared
    expect(screen.queryByText('15/02/2022 - 20/02/2022')).not.toBeInTheDocument();
  });
});

// Testing PopupModal
describe('PopupModal', () => {
  test('renders PopupModal component with default state', () => {
    render(
      <MemoryRouter>
        <PopupModal />
      </MemoryRouter>
    );

    // Check if the "Import" button is rendered
    const importButton = screen.getByRole('button', { name: 'Import' });
    expect(importButton).toBeInTheDocument();
  });

  test('opens and closes the modal', async () => {
    render(
      <MemoryRouter>
        <PopupModal />
      </MemoryRouter>
    );

    // Check if the modal is closed initially
    const modalContent = screen.queryByRole('dialog');
    expect(modalContent).not.toBeInTheDocument();

    // Open the modal
    fireEvent.click(screen.getByRole('button', { name: /Import/i }));

    // Use findByRole to wait for the modal to appear
    const modalDialog = await screen.findByRole('dialog');
    expect(modalDialog).toBeInTheDocument();

    // Close the modal
    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));

    // Use findByRole to wait for the modal to disappear
    await screen.findByRole('dialog', { hidden: true });
  });
});

// Testing DataTableSyllabus
// 5 Cases
describe('DataTableSyllabus', () => {
  test('renders DataTableSyllabus component with mock data', () => {
    render(
      <MemoryRouter>
        <DataTableSyllabus data={mockData} />
      </MemoryRouter>
    );
    const tableContainer = screen.getByRole('table');
    //Header of the table
    expect(screen.getByText('Syllabus', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Code', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Created On', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Created By', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Duration', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Output Standard', { container: tableContainer })).toBeInTheDocument();
    expect(screen.getByText('Status', { container: tableContainer })).toBeInTheDocument();
  });

  test('changes row per page on menu selection', async () => {
    render(
      <MemoryRouter>
        <DataTableSyllabus data={mockData} />
      </MemoryRouter>
    );
    const menuButton = screen.getByRole('button', { name: /Row per page/i });
    fireEvent.click(menuButton);
    const menuItem = await screen.findByText('25');
    fireEvent.click(menuItem);
    expect(screen.getByText('Row per page - 25')).toBeInTheDocument();
  });

  test('navigates through pages', async () => {
    render(
      <MemoryRouter>
        <DataTableSyllabus data={mockData} />
      </MemoryRouter>
    );

    const nextButton = screen.getByLabelText('Next page');
    fireEvent.click(nextButton);

    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('displays correct number of rows per page', async () => {
    render(
      <MemoryRouter>
        <DataTableSyllabus data={mockData} />
      </MemoryRouter>
    );
    const rowPerPageMenuButton = screen.getByRole('button', { name: /Row per page/i });
    fireEvent.click(rowPerPageMenuButton);
    const tenRowsMenuItem = await screen.findByText('10');
    fireEvent.click(tenRowsMenuItem);
    expect(screen.getAllByRole('row').length).toBe(10 + 1); // Including header row
  });

  test('displays "No data available" message when there is no data', () => {
    render(
      <MemoryRouter>
        <DataTableSyllabus data={[]} />
      </MemoryRouter>
    );
    const noDataMessage = screen.getByText('No data available');
    expect(noDataMessage).toBeInTheDocument();
  });
});
