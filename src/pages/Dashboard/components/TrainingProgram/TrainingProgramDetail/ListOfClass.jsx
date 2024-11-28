import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { fakeData } from '@/mocks/fakeDataTrainingProgramDetail.js';

export const ListOfClass = ({ listOfClass }) => {
  const data = fakeData;
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getColorStatus = (status) => {
    switch (status) {
      case 'planning':
        return 'blue'
      case 'opening':
        return 'green'
      case 'completed':
        return 'gray'
      case 'scheduled':
        return 'orange'
      default:
        return ''
    }
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    setListData(listOfClass);
  }, [listData, listOfClass]);


  return (
    <>
      <TableContainer borderTopRadius={'15px'} background='#FAFAFA'>
        <Table variant='simple' fontSize='small'>
          <Thead>
            <Tr bgColor={'#2D3748'} >
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('class')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('class_code')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('created_on')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('created_by')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('duration')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('status')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>{t('location')}</Th>
              <Th textTransform='none' fontWeight='normal' color={'white'}>FSU</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(e => (
              <Tr key={e.id}>
                <Td><Link style={{ borderBottom: '1px solid blue', color: 'blue' }}>{e.class}</Link></Td>
                <Td>{e.classCode}</Td>
                <Td>{e.createdOn}</Td>
                <Td>{e.createBy}</Td>
                <Td>{e.duration}</Td>
                <Td>{<Badge fontWeight='semibold' textTransform='none' minWidth='100px' textAlign='center' variant='solid' px={3} py={1} borderRadius={'15px'} colorScheme={getColorStatus(e.status)}>{capitalizeFirstLetter(e.status)}</Badge>}</Td>
                <Td>{e.location}</Td>
                <Td>{e.FSU}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box display="flex" w={'100%'} justifyContent="center" mx={5} mt={5}>
        <Box marginRight={{ base: 0, lg: 'auto' }} w={'20%'}>
          <Button fontSize={{ base: 'sm', lg: 'lg' }} width='fit-content'
            fontWeight='semibold' borderRadius='12px' _hover={'none'}
            colorScheme='blackAlpha' py={0} px={6} onClick={() => navigate('/dashboard/training-program/list')}>
            {t('back')}
          </Button>
        </Box>
        <Box marginLeft={{ base: 0, lg: 'auto' }} w={'80%'} display={'flex'} justifyContent={'end'} mr={10} >
          <Button fontSize={{ base: 'sm', lg: 'lg' }} borderRadius={'12px'} _hover={'none'} width='fit-content' fontWeight='semibold' colorScheme='blue' py={0} px={6} mr={{ base: 1, lg: 3 }}>{t('edit')}</Button>
          <Button fontSize={{ base: 'sm', lg: 'lg' }} borderRadius={'12px'} _hover={'none'} width='fit-content' fontWeight='semibold' colorScheme='orange' py={0} px={6} mr={{ base: 1, lg: 3 }}>{t('duplicate')}</Button>
          <Button fontSize={{ base: 'sm', lg: 'lg' }} borderRadius={'12px'} _hover={'none'} width='fit-content' fontWeight='semibold' colorScheme='blackAlpha' py={0} px={6}>{t('inactive')}</Button>
        </Box>
      </Box>
    </>
  );
};

