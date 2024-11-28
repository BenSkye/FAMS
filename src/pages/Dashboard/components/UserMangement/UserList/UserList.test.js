import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { UserList } from '@/pages/Dashboard/components/UserMangement/UserList/index.jsx';

describe('UserList component', () => {
  // Testing for correct display of elements
  test('renders the user list header', () => {
    render(<UserList />);

    expect(screen.getByText('User Management')).toBeInTheDocument();
  });

  test('renders the search bar and filter button', () => {
    render(<UserList />);

    expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument();
  });

  test('opens and closes the Add User dialog', async () => {
    render(<UserList />);

    const addUserButton = screen.getByRole('button', { name: /Add User/i });
    fireEvent.click(addUserButton);

    // Check if the dialog's content is present
    await waitFor(() => expect(screen.getByText('Add a New User')).toBeInTheDocument());

    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    userEvent.click(cancelButton);

    // Check if the dialog's content has been removed
    await waitFor(() => expect(screen.queryByText('Add a New User')).not.toBeInTheDocument());
  });
});
