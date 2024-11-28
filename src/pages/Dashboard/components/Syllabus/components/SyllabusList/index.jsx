import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tag,
  Text,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { mockData } from '@/mocks/syllabusListData.js';
import CalendarPopover from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/CalendarPopover';
import AddButton from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/AddButton';
import { PopupModal } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/PopupModal';
import { DataTableSyllabus } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/DataTableSyllabus';

export const SyllabusList = () => {
  const [value, setValue] = useState('Nhập ở đây');

  const handleInput = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box p='1rem' display='flex' flexDir={'column'} w='100%'>
      <Text aria-label='Heading Page' m={2} textAlign='left' mt={3} fontWeight='semibold'>
        Syllabus
      </Text>

      <Spacer />

      <Flex width='100%' flexWrap='wrap' columnGap={3} rowGap={3} justifyContent='space-between'>
        <Flex
          justifyContent='flex-start'
          flexDirection={{ md: 'row', base: 'column' }}
          columnGap={3}
          rowGap={3}
        >
          <InputGroup width='240px'>
            <InputLeftElement pointerEvents='none'>
              <Icon as={FaSearch} color='gray.500' />
            </InputLeftElement>
            <Input borderRadius='12px' type='text' placeholder='Search' variant='filled' />
          </InputGroup>
          <CalendarPopover />
        </Flex>
        <Flex flexDirection={{ md: 'row', base: 'column' }} columnGap={3} rowGap={3}>
          <PopupModal />
          <AddButton />
        </Flex>
      </Flex>
      <Box mt='0.6rem'>
        <HStack spacing={4}>
          <Tag
            size='md'
            borderRadius='full'
            variant='solid'
            backgroundColor='#474747'
            color='#FFF'
            height='32px'
          >
            <Text pr='0.4rem'>R9PTE</Text>
            <MdOutlineClose />
          </Tag>
          <Tag
            size='md'
            borderRadius='full'
            variant='solid'
            backgroundColor='#474747'
            color='#FFF'
            height='32px'
          >
            <Text pr='0.4rem'>R9PTE</Text>
            <MdOutlineClose />
          </Tag>
        </HStack>
      </Box>
      <DataTableSyllabus data={mockData} />
    </Box>
  );
};
