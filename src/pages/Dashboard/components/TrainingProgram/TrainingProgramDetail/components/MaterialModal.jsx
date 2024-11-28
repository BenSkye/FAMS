import React, { useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineSnippetFolder, MdOutlineEdit } from 'react-icons/md';
import { TbTrashX } from 'react-icons/tb';

const MaterialModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fileInputRef = useRef();
  const handleChange = () => {
  };

  return (
    <>
      <Button onClick={onOpen} p={0} _hover={'none'} color={'#265b97'} h={'full'} bg={'none'} mx={'auto'}><MdOutlineSnippetFolder name='icon' size={'2em'} /></Button>
      <Modal size={'3xl'} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderBottomRadius={'20px'}>
          <ModalHeader textColor={'white'} bgColor={'#2D3748'}>Day 3</ModalHeader>
          <ModalCloseButton border={'solid 2px white'} borderRadius={'50%'} textColor={'white'} />
          <ModalBody>
            <Flex fontSize={'xl'}>
              <Box w={'20%'}>
                <Text fontWeight={'bold'}>Unit 5</Text>
              </Box>
              <Box w={'80%'}>
                <Text fontWeight={'bold'}>.NET introduction</Text>
              </Box>
            </Flex>
            <Stack mt={5} p={2} bgColor={'#f3f3f3'} textAlign={'left'}>
              <Text fontWeight={'bold'} fontSize={'md'}>.NET Introduction</Text>
              <Flex w={'100%'} fontSize={'md'}>
                <Box w={'45%'}>
                  <Link p={0} color={'blue'} fontStyle={''}>PDF File</Link>
                </Box>
                <Box textAlign={'right'} w={'41%'}>
                  <Text fontStyle={'italic'}>By Joseph in 12/03/2022</Text>
                </Box>
                <Box textAlign={'center'} w={'7%'}>
                  <Button p={0} _hover={'none'} color={'#265b97'} h={'full'} bg={'none'}><MdOutlineEdit size={'30px'} /></Button>
                </Box>
                <Box textAlign={'center'} w={'7%'}>
                  <Button p={0} _hover={'none'} color={'#265b97'} h={'full'} bg={'none'}><TbTrashX size={'30px'} /></Button>
                </Box>
              </Flex>
            </Stack>
            <Flex>
              <Input type='file' accept='application/pdf,application/vnd.ms-excel' onChange={handleChange} ref={fileInputRef} hidden />
              <Button bgColor={'#323232'} color={'white'} my={3} mx={'auto'} onClick={() => fileInputRef.current.click()} _hover={'none'}>
                Upload
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );

};

export default MaterialModal;