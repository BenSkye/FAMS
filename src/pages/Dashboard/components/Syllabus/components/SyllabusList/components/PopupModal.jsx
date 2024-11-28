import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdOutlineUpload } from 'react-icons/md';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'underline',
  color: '#285D9A',
};

export const PopupModal = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Get the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleSelectButtonClick = () => {
    // Trigger the hidden file input
    document.getElementById('fileInput').click();
  };

  const handleSubmit = () => {
    // Handle form submission, you can upload the file or perform any other action
    console.log('Selected File:', selectedFile);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button borderRadius='12px' onClick={onOpen} color={'white'} backgroundColor={'#D45B13'} _hover={{backgroundColor: '#D45B13'}} mr={'0.5rem'}>
        {' '}
        <MdOutlineUpload fontSize={'1.2rem'} />
        <Text ml='0.4rem'>Import</Text>
      </Button>
      <Modal isCentered onClose={onClose} size={'xl'} isOpen={isOpen} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent borderTopRadius={'10px'}>
          <ModalHeader
            textAlign={'center'}
            color={'white'}
            borderTopRadius={'10px'}
            size='xl'
            bg={'#2D3748'}
          >
            Import Syllabus
          </ModalHeader>
          <ModalBody>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <Flex justifyContent={'space-between'}>
                <Text fontWeight={630}>Import setting</Text>
                <Flex flex={0.8}>
                  <FormControl>
                    <Flex gap={'1.6rem'} flexDir={'column'} alignItems='start'>
                      <Text fontWeight={'450'}>File (csv)*</Text>
                      <Text fontWeight={'450'}>Encoding type</Text>
                      <Text fontWeight={'450'}>Column seperator</Text>
                      <Text fontWeight={'450'}>Import template</Text>
                    </Flex>
                    <input
                      id='fileInput'
                      type='file'
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </FormControl>
                  <FormControl>
                    <Flex flexDir={'column'} gap={'1.1rem'} alignItems='start'>
                      <Button
                        size={'sm'}
                        px='1.6rem'
                        bg={'#2D3748'}
                        color={'white'}
                        onClick={handleSelectButtonClick}
                      >
                        Select
                      </Button>
                      <Select
                        borderRadius={'5px'}
                        placeholder='Auto detect'
                        width={120}
                        size='sm'
                      />
                      <Select borderRadius={'5px'} placeholder='Comma' width={120} size='sm' />
                      <Link
                        to='download'
                        style={linkStyle}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Download
                      </Link>
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
              <hr style={{ margin: '10px' }} />
              <Flex justifyContent={'space-between'}>
                <Text fontWeight={630}>Duplicate control</Text>
                <Flex flex={0.845} flexDir={'column'} gap={'1rem'}>
                  <FormControl>
                    <Flex gap={'1rem'} flexDir={'column'} alignItems='start'>
                      <Text fontWeight={'450'}>Scanning</Text>
                      <Stack gap={'1.5rem'} direction={'row'}>
                        <Checkbox defaultChecked colorScheme='facebook'>
                          Syllabus code
                        </Checkbox>
                        <Checkbox>Syllabus name</Checkbox>
                      </Stack>
                    </Flex>
                  </FormControl>
                  <FormControl>
                    <Flex gap={'1rem'} flexDir={'column'} alignItems='start'>
                      <Text fontWeight={'450'}>Duplicate handle</Text>
                      <RadioGroup defaultValue='2'>
                        <Stack spacing={5} direction='row'>
                          <Radio colorScheme='facebook' value='1'>
                            Allow
                          </Radio>
                          <Radio colorScheme='facebook' value='2'>
                            Replace
                          </Radio>
                          <Radio colorScheme='facebook' value='3'>
                            Skip
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
              <hr style={{ margin: '10px' }} />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              textDecorationLine={'underline'}
              color='#E74A3B'
              variant={'link'}
              mr={6}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button borderRadius={'10px'} p={'0.5rem 1.5rem'} color={'white'} bg={'#2D3748'}>
              Import
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
