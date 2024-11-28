import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AccordionContent } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/components/AccordionContent.jsx';

describe('AccordionContent Component', () => {
  test('renders accordion general information', () => {
    render(<MemoryRouter><AccordionContent /></MemoryRouter>);
    const accordionButton = screen.getByRole('button', { name: 'Linux Active LIN v2.0 4 days ( 12 hours ) Modified on 23/07/2022 by Johny Deep' });
    fireEvent.click(accordionButton);
    expect(screen.getByText('Day 1')).toBeInTheDocument();
  });

  test('renders accordion day information', () => {
    render(<MemoryRouter><AccordionContent /></MemoryRouter>);
    const accordionButton = screen.getByRole('button', { name: 'Linux Active LIN v2.0 4 days ( 12 hours ) Modified on 23/07/2022 by Johny Deep' });
    expect(accordionButton).toBeInTheDocument();
    fireEvent.click(accordionButton);

    const day1Button = screen.getByRole('button', { name: 'Day 1' });
    expect(day1Button).toBeInTheDocument();
    fireEvent.click(day1Button);
    const overviewElements = screen.queryAllByText('MVC architecture pattern overview');
    expect(overviewElements.length).toBeGreaterThan(0);
  });
});