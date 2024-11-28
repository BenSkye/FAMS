import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { FaRegCalendar } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const CalendarPopover = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const clearDate = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const formattedDateRange =
    startDate && endDate
      ? `${format(startDate, 'dd/MM/yyyy')} - ${format(endDate, 'dd/MM/yyyy')}`
      : '';

  return (
    <Popover isOpen={isOpen} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
      <PopoverTrigger>
        <Button borderRadius='12px' display={'flex'} justifyContent={'start'} width='240px'>
          <FaRegCalendar /> <Text ml={4}>{formattedDateRange || 'Created date'}</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Button mt={2} onClick={clearDate} size='sm' colorScheme='red'>
              Clear
            </Button>
            <Button mt={2} onClick={() => setIsOpen(false)} size='sm' colorScheme='red'>
              Close
            </Button>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarPopover;
