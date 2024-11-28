import React from 'react';
import { Text, 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  Button } from '@chakra-ui/react';
import { IoMdSearch } from 'react-icons/io';

const ProgramNameInput = ({ createClicked, setCreateClicked, inputTerm, handleInputTerm }) => {
  return (
    <Flex alignSelf={'start'} justifyContent={'start'} mt={4}>
      <Text fontWeight={600} marginRight={'2rem'}>
        Program name
      </Text>
      <InputGroup marginRight='1rem' borderRadius='1rem' width='300px' height='36px'>
        <InputLeftElement pointerEvents='none'>
          <IoMdSearch color='#2D3748' />
        </InputLeftElement>
        <Input borderRadius='12px' type='text' placeholder='Search by...' value={inputTerm} onChange={handleInputTerm} />
      </InputGroup>
      <Button onClick={() => setCreateClicked(!createClicked)} padding={'0 1.5rem'} bg='#2D3748' color={'white'}>
        {createClicked ? 'Create' : 'Back'}
      </Button>
    </Flex>
  );
};

export default ProgramNameInput;
