import { React } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ClassDetail } from '@/pages/Dashboard/components/Class/components/ClassDetail/index.jsx';


describe('ClassDetail Component', () => {
  test('renders without crashing', () => {
    render(<ClassDetail />);

  });

  test('toggles edit button when clicked', () => {
    render(<ClassDetail />);
    
    const editButton = screen.getByTestId('edit-button')
    const editMenu = screen.getByTestId('edit-menu')

    //check if button is rendered
    expect(editButton).toBeInTheDocument();
    expect(editMenu).not.toBeVisible();

    //click to see if menu appears
    userEvent.click(editButton);
    expect(editMenu).toBeInTheDocument();

    expect(screen.getByText('Manage class')).toBeInTheDocument();
    expect(screen.getByText('Edit class')).toBeInTheDocument();

    //menu disappears after click
    userEvent.click(editButton);
    expect(editMenu).not.toBeVisible();

  });

  test('toggles general table visibility when button clicked', () => {
    render(<ClassDetail />);
    // Initially, table is visible
    const buttonTable = screen.getByTestId('general-button')
    let generalTable = screen.getByTestId('general-table')

    expect(generalTable).toBeInTheDocument();

    expect(screen.getByText('Class time')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Trainer')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('FSU')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
    expect(screen.getByText('Approve')).toBeInTheDocument();

    //on click table is gone
    userEvent.click(buttonTable);
    expect(generalTable).not.toBeInTheDocument();

    //on click table reappears
    userEvent.click(buttonTable);

    // Query the table again after the click
    generalTable = screen.getByTestId('general-table');
    expect(generalTable).toBeInTheDocument();

  });

  test('toggles fresher table visibility when button clicked', () => {
    render(<ClassDetail />);
    // Initially, table is visible
    const buttonFresher = screen.getByTestId('fresher-button')
    let fresherTable = screen.getByTestId('fresher-table')

    expect(fresherTable).toBeInTheDocument();

    expect(screen.getByText('Planned')).toBeInTheDocument();
    expect(screen.getByText('Accepted')).toBeInTheDocument();
    expect(screen.getByText('Actual')).toBeInTheDocument();

    //on click table is gone
    userEvent.click(buttonFresher);
    expect(fresherTable).not.toBeInTheDocument();

    //on click table reappears
    userEvent.click(buttonFresher);

    // Query the table again after the click
    fresherTable = screen.getByTestId('fresher-table');
    expect(fresherTable).toBeInTheDocument();

  });

 
  // Add more test cases as needed
});