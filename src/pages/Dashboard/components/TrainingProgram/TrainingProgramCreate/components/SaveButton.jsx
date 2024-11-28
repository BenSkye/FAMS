import { Button, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverHeader, 
  PopoverBody } from '@chakra-ui/react';
import React from 'react';

function SaveButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button width={'100px'}
          bg='#2D3748'
          color='white'>Save</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>SAVED SUCCESSFULLY</PopoverHeader>
        <PopoverBody>Your data has been saved!</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default SaveButton;