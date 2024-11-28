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
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ImPencil } from 'react-icons/im';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { MdOutlineDeleteForever } from 'react-icons/md';

const features = [
  { name: 'Add training program', ic: <IoIosAddCircleOutline /> },
  { name: 'Edit Syllabus', ic: <ImPencil /> },
  { name: 'Duplicate syllabus', ic: <HiOutlineDuplicate /> },
  { name: 'Delete syllabus', ic: <MdOutlineDeleteForever /> },
];

const FeatureButton = ({ feature }) => (
  <Button
    color='#2C5282'
    background='none'
    display='flex'
    justifyContent='start'
    alignItems='center'
    p='5px'
    gap='10px'
    w='100%'
    borderRadius='12px'
  >
    {feature.ic}
    <Text fontSize='1rem' ml='0.2rem'>
      {feature.name}
    </Text>
  </Button>
);

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Popover
      size='md'
      isOpen={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      placement='bottom-start'
    >
      <PopoverTrigger>
        <Button
          borderRadius='12px'
          _hover={{ backgroundColor: '#2D3748' }}
          backgroundColor='#2D3748'
          color='white'
        >
          <IoIosAddCircleOutline fontSize='1.2rem' />
          <Text ml='0.4rem'>Add Syllabus</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          {features.map((feature, index) => (
            <FeatureButton key={`feature-${index}`} feature={feature} />
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default AddButton;
