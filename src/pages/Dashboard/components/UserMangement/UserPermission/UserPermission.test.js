import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { UserPermission } from '@/pages/Dashboard/components/UserMangement/UserPermission/index';

describe('UserPermission component', () => {
  // Testing for correct display of elements
  test('renders the User Permission header', () => {
    render(<UserPermission />);

    expect(screen.getByText('User Permission')).toBeInTheDocument();
  });

  test('renders the Admin section', () => {
    render(<UserPermission />);

    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  test('renders the Trainer section', () => {
    render(<UserPermission />);

    expect(screen.getByText('Trainer')).toBeInTheDocument();
  });

  test('renders correct default permissions for each user role', () => {
    render(<UserPermission />);

    const permissions = screen.getAllByRole('combobox');
    expect(permissions).toHaveLength(12); // 2 sections * 3 permissions per section

    permissions.forEach((permission) => {
      expect(permission).toHaveValue('Access denied');
    });
  });

  test('updates permissions correctly when changed', async () => {
    render(<UserPermission />);

    const selectDropdown = async (select, value) => {
      fireEvent.change(select, { target: { value } });
      await waitFor(() => expect(select).toHaveValue(value));
    };

    const permissions = screen.getAllByRole('combobox');
    await selectDropdown(permissions[0], 'View');
    await selectDropdown(permissions[1], 'Modify');

    // Add more test cases for other permission changes as needed
  });
});