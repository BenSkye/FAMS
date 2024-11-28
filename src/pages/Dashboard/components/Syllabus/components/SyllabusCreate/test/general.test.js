import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { General } from '@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/general.jsx';

test('handles level input change', () => {
  const onLevelChange = jest.fn();
  render(<General onLevelChange={onLevelChange} />);
  const levelSelect = screen.getByLabelText(/level/i);
  fireEvent.change(levelSelect, { target: { value: 'option2' } });
  expect(onLevelChange).toHaveBeenCalledWith('option2');
});
test('handles attendee number input change', () => {
  const onAttendeeNumberChange = jest.fn();
  render(<General onAttendeeNumberChange={onAttendeeNumberChange} />);
  const attendeeNumberInput = screen.getByLabelText(/attendee number/i);
  fireEvent.change(attendeeNumberInput, { target: { value: '10' } });
  expect(onAttendeeNumberChange).toHaveBeenCalledWith('10');
});
test('handles technical requirement input change', () => {
  const onTechReqChange = jest.fn();
  render(<General onTechReqChange={onTechReqChange} />);
  const techReqTextarea = screen.getByLabelText(/technical requirement/i);
  fireEvent.change(techReqTextarea, {
    target: { value: 'Some technical requirements' },
  });
  expect(onTechReqChange).toHaveBeenCalledWith('Some technical requirements');
});
// test('handles course objectives input change', () => {
//   const handleCourseObjChange = jest.fn();
//   render(<TextEditor onCourseObjChange={handleCourseObjChange} />);
//   const editor = screen.getByRole('textbox');
//   const content = 'Sample content';
//   userEvent.type(editor, content);
//   expect(handleCourseObjChange).toHaveBeenCalledTimes(1);
//   expect(handleCourseObjChange).toHaveBeenCalledWith(content);
// });
