import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from '@/pages/LoginPage/components/LoginForm/index.jsx';

describe('LoginForm component', () => {
  it('renders without crashing', () => {
    render(<LoginForm />, { wrapper: MemoryRouter });
  });

  it('allows the user to fill in the form', async () => {
    const { getByLabelText } = render(<LoginForm />, { wrapper: MemoryRouter });

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com');
      expect(passwordInput.value).toBe('password123');
    });
  });

  it('submits the form', async () => {
    const { getByLabelText, getByRole } = render(<LoginForm />, { wrapper: MemoryRouter });

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByRole('button', { name: /Login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(emailInput.value).toBe('test@example.com');
      expect(passwordInput.value).toBe('password123');
    });
  });
});
