import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa';
import { TbTrashX } from 'react-icons/tb';
import { AccordionContent } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/components/AccordionContent.jsx';
import { ListOfClass } from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/ListOfClass.jsx';
import { fakeDataDetail } from '@/mocks/fakeDataTrainingProgramDetail.js';

export const TrainingProgramDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { t } = useTranslation();
  const handleEditProgram = () => {
    console.log('edit');
  };

  const handleDuplicateProgram = () => {
    console.log('duplicate');
  };

  const handleDeActiveProgram = () => {
    console.log('de-active');
  };

  const handleDeleteProgram = () => {
    console.log('delete');
  };

  useEffect(() => {
    setData();
  }, [data]);

  return (
    <>
      <Box mt={{ base: 0, md: 0, lg: 1, sm: 0 }} bg='#2D3748' w={'100%'} textAlign={'left'} p={6} pb={2} color='white'>
        <Text textAlign='left' mt={3} fontWeight='semibold'>{t('training_program')}</Text>
        <br />
        <Flex>
          <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '40%' }}>
            <Text fontSize={{ base: '2xl', sm: '2xl', md: '2xl', lg: '4xl' }} as='kbd'>{fakeDataDetail.title}</Text>
            <Badge ml={{ base: 0, md: 2, sm: 2, lg: 4 }} variant='outline' mb={2}
              color={'white'} px={3} py={1} borderRadius={'30px'} border={'solid 2px'}
            >
              {fakeDataDetail.status}
            </Badge>
          </Box>
          <Box w={'60%'} textAlign={'right'}>
            <Menu>
              <MenuButton fontSize={{ base: '3xl', lg: '5xl', sm: '3xl', md: '3xl' }} as={Button} colorScheme='#2D3748'>
                <Text mb={'50%'}>...</Text>
              </MenuButton>
              <MenuList>
                <MenuGroup color={'black'} fontSize={'lg'} textAlign={'left'} title={t('manage')}>
                  <MenuItem onClick={handleEditProgram} fontSize={'md'} color={'#265b97'} icon={<MdOutlineEdit size={'20px'} />}>{t('edit_program')}</MenuItem>
                  <MenuItem onClick={handleDuplicateProgram} fontSize={'md'} color={'#265b97'} icon={<HiOutlineDuplicate size={'20px'} />}>{t('duplicate_program')} </MenuItem>
                  <MenuItem onClick={handleDeActiveProgram} fontSize={'md'} color={'#265b97'} icon={<FaRegEyeSlash size={'20px'} />}>{t('deactive_program')}</MenuItem>
                  <MenuItem onClick={handleDeleteProgram} fontSize={'md'} color={'#979797'} icon={<TbTrashX size={'20px'} />}>{t('delete_program')}</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box pl={3} py={3} w={'100%'} textAlign={'left'} fontSize={'lg'} borderBottom={'solid 2px black'}>
        <Text>
          <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{fakeDataDetail.day}</span> days <span style={{ fontStyle: 'italic' }}>({fakeDataDetail.hour} hours)</span></Text>
        <Text>{t('modified_on')} <span style={{ fontStyle: 'italic' }}>{fakeDataDetail.modifiedOn}</span> {t('by')} <span style={{ fontWeight: 'bold' }}>{fakeDataDetail.modifiedBy}</span></Text>
      </Box>
      <Box pl={3} w={'100%'} textAlign={'left'} fontSize={'lg'}>
        <Heading fontSize={{ base: '1rem', lg: '1.5rem' }} fontWeight='semibold'>
          {t('general_information')}
        </Heading>
        <Box mt={5} borderRadius={'1rem'} w={{ base: '80%' }} px={3} py={5} background='#FAFAFA' _hover={{ backgroundColor: '#FFF' }}>
          <UnorderedList>
            {fakeDataDetail.information.map((e) => (
              <ListItem key={e.id} fontSize='medium'>{e.message}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Box pl={3} my={5} w={'100%'} textAlign={'left'} fontSize={'lg'}>
        <Heading fontSize={{ base: '1rem', lg: '1.5rem' }} fontWeight='semibold'>
          {t('content')}
        </Heading>
        {/* Accordion Content */}
        <AccordionContent contentData={fakeDataDetail.content} />
        <Box my={3} marginRight={3}>
          <Heading fontSize={{ base: '1rem', lg: '1.5rem' }} fontWeight='semibold' marginBottom={3}>
            {t('list_class')}
          </Heading>
          {/* List of Class Content Table */}
          <ListOfClass listOfClass={data} />
        </Box>
      </Box>
    </>
  );
};