import React from 'react';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
  Divider
} from '@chakra-ui/react';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';
import { TbTrashX } from 'react-icons/tb';

const Header = ({ createClicked, programName }) => {
  return (
    <>
      <Box mt={{ base: 0, md: 0, lg: 1, sm: 0 }} bg='#2D3748' w={'100%'} textAlign={'left'} p={6} pb={2} color='black'>
        <Flex justify="space-between">
          <Text fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '4xl' }} as='kbd' color={'white'}>
            {createClicked ? 'New Training Program' :
              <>
                <Flex>
                  <Text fontSize={'0.5em'}>Training Program</Text>
                </Flex>
                <Flex>
                  <Text>{programName}</Text>
                </Flex>
              </>
            }
          </Text>
          <Menu>
            <MenuButton fontSize={{ base: '3xl', lg: '5xl', sm: '3xl', md: '3xl' }} as={Button} colorScheme='#2D3748'>
              <Text mb={'50%'}>...</Text>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<MdOutlineEdit size={'20px'} />}>Edit program</MenuItem>
              <MenuItem icon={<HiOutlineDuplicate size={'20px'} />}>Duplicate program</MenuItem>
              <MenuItem icon={<FaRegEyeSlash size={'20px'} />}>De-active program</MenuItem>
              <MenuItem icon={<TbTrashX size={'20px'} />}>Delete program</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      

      {createClicked ? <></>:
      <Box width={'100%'}>
      <Flex>
        <Text fontSize={'0.6em'}>... days</Text>
        <Text fontSize={'0.6em'}>{"(... hours)"}</Text>
      </Flex>
      <Flex>
        <Text fontSize={'0.6em'}>{"Modified on 23/07/2022 by "}</Text>
        <Text fontSize={'0.6em'}>{" Warior Tran"}</Text>
      </Flex>
      <Divider/>
    </Box>}

    </>
  );
};

export default Header;