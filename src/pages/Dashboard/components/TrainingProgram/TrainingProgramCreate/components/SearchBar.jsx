import React from 'react';
import {
  Text,
  Flex,
  Menu,
  InputGroup,
  Input,
  InputLeftElement,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  Spacer,
  ButtonGroup
} from '@chakra-ui/react';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SaveButton from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramCreate/components/SaveButton'

const SearchBar = ({ 
  searchSyllabusTerm, 
  handleInputChange, 
  suggestions, 
  handleSelectOption, 
  createClicked, 
  setCreateClicked 
}) => {
  return (
    <>
      <Flex alignSelf='start' justifyContent='center' mt={4}>
        <Flex justifyContent='center' alignItems='center' flex={1}>
          <Menu placement='bottom-start'>
            <Text fontWeight={600} marginRight='2rem'>
              Syllabus
            </Text>
            <InputGroup marginRight='1rem' borderRadius='1rem' width='300px' height='36px'>
              <InputLeftElement pointerEvents='none'>
                <IoMdSearch color='#2D3748' />
              </InputLeftElement>
              <Input
                borderRadius='12px'
                type='text'
                placeholder='Search by...'
                value={searchSyllabusTerm}
                onChange={handleInputChange}
              />
            </InputGroup>
            <MenuList>
              {suggestions.map((option) => (
                <MenuItem key={option} onClick={() => handleSelectOption(option)}>
                  {option}
                </MenuItem>
              ))}
            </MenuList>
            <MenuButton as={Button} bg='#2D3748' color='white'>
              Search
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
      <Flex minWidth='max-content' alignContent='space-around' marginTop='40px' gap='2'>
        <Link to='/dashboard/training-program/create'>
          <Button alignSelf='start' width='100px' bg='#2D3748' color='white' onClick={() => {setCreateClicked(!createClicked);}}>
            Back
          </Button>
        </Link>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button width='100px' bg='white' color='red'>
            Cancel
          </Button>
          <SaveButton />
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default SearchBar;