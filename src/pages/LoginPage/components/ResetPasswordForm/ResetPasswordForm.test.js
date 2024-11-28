import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ResetPasswordForm } from '@/pages/LoginPage/components/ResetPasswordForm/index.jsx';

describe('ResetPasswordForm component', () => {
  it('renders without crashing', () => {
    render(<ResetPasswordForm />, { wrapper: MemoryRouter });
  });

  it('allows the user to fill in the form', async () => {
    const { getByLabelText } = render(<ResetPasswordForm />, { wrapper: MemoryRouter });

    const emailInput = getByLabelText('Email');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com');
    });
  });

  it('submits the form', async () => {
    const { getByLabelText, getByRole } = render(<ResetPasswordForm />, { wrapper: MemoryRouter });

    const emailInput = getByLabelText('Email');
    const submitButton = getByRole('button', { name: /Send Link/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com');
    });
  });
});
