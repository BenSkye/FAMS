import React from 'react';
import { Button } from '@chakra-ui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';

export const StatusText = ({ data }) => {
  let bgColor = 'facebook';
  let icon = false;
  if (data === 'Inactive') {
    bgColor = 'gray';
  } else if (data === 'Draft') {
    bgColor = 'blue';
  }

  return (
    <Button margin={'2px'} colorScheme={bgColor} size='sm'>
      {data} {icon ? <IoCloseCircleOutline /> : ''}
    </Button>
  );
};
