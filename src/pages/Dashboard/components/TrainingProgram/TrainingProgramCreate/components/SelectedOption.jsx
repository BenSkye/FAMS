import React from 'react';
import { Flex, 
  Badge, 
  Button, 
  Divider } from '@chakra-ui/react';

const SelectedOptions = ({ selectedOptions, handleRemoveOption }) => {
  return (
    <>
      <Divider my={2} />
      <Flex mt={4} flexWrap="wrap">
        {selectedOptions.map((option, index) => (
          <Badge
            key={index}
            variant="solid"
            colorScheme="blue"
            borderRadius="full"
            px={3}
            py={1}
            mr={2}
            mb={2}
            fontSize="0.8em" 
            cursor="pointer"
            _hover={{ bg: 'blue.600' }} 
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', '');
            }}
          >
            {option}
            <Button size="xs" ml={2} onClick={() => handleRemoveOption(option)}>
              X
            </Button>
          </Badge>
        ))}
      </Flex>
    </>
  );
};

export default SelectedOptions;

