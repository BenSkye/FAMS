import React from 'react';
import { Button, 
  ChakraProvider, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem } from '@chakra-ui/react';
import { CgImport } from "react-icons/cg";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const ProgramMenuEllipsisButton = () => {
  return (
    <ChakraProvider>
      <Menu>
        <MenuButton as={Button}>
          ...
        </MenuButton>
        <MenuList>
          <MenuItem>Training material</MenuItem>
          <MenuItem>Edit program</MenuItem>
          <MenuItem>Dublicate program</MenuItem>
          <MenuItem>De-activate program</MenuItem>
          <MenuItem>Delete program</MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

const RedImportButton = ({ onClick }) => (
  <>
      <Button colorScheme="red" color={'white'} width={'7rem'}>
          <CgImport color='white' />
          Import
      </Button>
  </>
);

const BlackAddNewButton = ({onclick}) =>  (
    <>
        <Button colorScheme="green" color={'white'} width={'7rem'}
            marginLeft={'10px'}
        >
            <MdOutlineAddCircleOutline color='white' />
            Add new
        </Button>
    </>
)

export { ProgramMenuEllipsisButton, RedImportButton, BlackAddNewButton};