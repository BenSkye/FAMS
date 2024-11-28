import React from 'react';
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { IoChevronDownCircleOutline, IoFilter } from 'react-icons/io5';
import { HiOutlineDotsHorizontal, HiOutlineDuplicate } from 'react-icons/hi';
import { MdOutlineDeleteForever, MdOutlineEdit, MdOutlineNavigateNext } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { convertTablePerPage } from '@/utils/covertItemPerPage';
import { StatusText } from '@/pages/Dashboard/components/Syllabus/components/SyllabusList/components/StatusText';

export const DataTableSyllabus = ({ data = [] }) => {
  const [covertedData, setConvertedData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [rowPerPage, setRowPerPage] = React.useState(5);

  React.useEffect(() => {
    setCurrentPage(0);
    setConvertedData(convertTablePerPage(data, rowPerPage));
  }, [data, rowPerPage]);

  const changePos = (step) => {
    if (step === 0) {
      if (currentPage % 3 === 1) {
        setCurrentPage(currentPage - 1);
      } else if (currentPage % 3 === 2) {
        setCurrentPage(currentPage - 2);
      }
    } else if (step === 1) {
      if (currentPage % 3 === 0) {
        setCurrentPage(currentPage + step);
      } else if (currentPage % 3 === 2) {
        setCurrentPage(currentPage - step);
      }
    } else if (step === 2) {
      if (currentPage % 3 === 0) {
        setCurrentPage(currentPage + step);
      } else if (currentPage % 3 === 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const checkValidPos = (currentPage) => {
    if (rowPerPage * currentPage <= rowPerPage * Math.ceil(data.length / rowPerPage)) {
      return true;
    }
    return false;
  };

  const changeStepSkip = (step) => {
    if (step === -1) {
      let newCurrentPage = currentPage - 3;
      if (newCurrentPage < 0) {
        newCurrentPage = 0;
      }
      setCurrentPage(newCurrentPage);
    } else if (step === 1) {
      let newCurrentPage = currentPage + 3;
      if (newCurrentPage > Math.floor(data.length / rowPerPage)) {
        newCurrentPage = Math.floor(data.length / rowPerPage);
      }
      setCurrentPage(newCurrentPage);
    }
  };

  const checkValidPosJumpBack = () => {
    return currentPage - 1 > 0;
  };

  const checkValidPosJumpNext = () => {
    return currentPage + 1 < Math.floor(data.length / rowPerPage);
  };

  return (
    <Flex flex={1} mt={4} flexDirection='column'>
      <TableContainer width='-webkit-fill-available' borderRadius={15} backgroundColor='#FFF'>
        <Table variant='simple' fontSize='small'>
          <Thead backgroundColor='#2D3748'>
            <Tr>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Syllabus</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Code</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Created On</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Created By</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Duration</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Output Standard</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'>
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>Status</Text>
                  <IoFilter />
                </Flex>
              </Th>
              <Th fontSize='small' fontWeight='normal' textTransform='none' color='#FFF'></Th>
            </Tr>
          </Thead>
          <Tbody>
            {covertedData.length !== 0 && covertedData[currentPage] ? (
              covertedData[currentPage].map((item) => (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td>{item.code}</Td>
                  <Td>{item.createdOn}</Td>
                  <Td>{item.createdBy}</Td>
                  <Td>{item.duration}</Td>
                  <Td>
                    {item.output.split(',').map((i) => (
                      <StatusText data={i} />
                    ))}
                  </Td>
                  <Td>
                    <StatusText data={item.status} />
                  </Td>
                  <Td>
                    <MenuUserItems />
                  </Td>
                </Tr>
              ))
            ) : (
              <tr>
                <Td
                  fontSize='small'
                  fontWeight='normal'
                  textTransform='none'
                  color='#000'
                  colSpan={8}
                >
                  No data available
                </Td>
              </tr>
            )}
          </Tbody>
        </Table>
        <Flex
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          width='100%'
          marginY={3}
        >
          <GrFormPrevious
            pointerEvents={checkValidPosJumpBack() ? 'auto' : 'none'}
            opacity={checkValidPosJumpBack() ? 1 : 0.5}
            cursor='pointer'
            onClick={() => changeStepSkip(-1)}
          />
          <Flex
            pointerEvents={checkValidPos(3 * Math.floor(currentPage / 3) + 1) ? 'auto' : 'none'}
            opacity={checkValidPos(3 * Math.floor(currentPage / 3) + 1) ? 1 : 0.5}
            color={currentPage % 3 === 0 ? '#FFF' : '#2D3748'}
            marginLeft={3}
            onClick={() => changePos(0)}
            cursor='pointer'
            fontSize='small'
            fontWeight='semibold'
            width='35px'
            height='35px'
            backgroundColor={currentPage % 3 === 0 ? '#2D3748' : 'transparent'}
            borderRadius={8}
            justifyContent='center'
            alignItems='center'
          >
            {3 * Math.floor(currentPage / 3) + 1}
          </Flex>
          <Flex
            pointerEvents={checkValidPos(3 * Math.floor(currentPage / 3) + 2) ? 'auto' : 'none'}
            opacity={checkValidPos(3 * Math.floor(currentPage / 3) + 2) ? 1 : 0.5}
            color={currentPage % 3 === 1 ? '#FFF' : '#2D3748'}
            onClick={() => changePos(1)}
            cursor='pointer'
            fontSize='small'
            fontWeight='semibold'
            width='35px'
            height='35px'
            backgroundColor={currentPage % 3 === 1 ? '#2D3748' : 'transparent'}
            borderRadius={8}
            justifyContent='center'
            alignItems='center'
          >
            {3 * Math.floor(currentPage / 3) + 2}
          </Flex>
          <Flex
            pointerEvents={checkValidPos(3 * Math.floor(currentPage / 3) + 3) ? 'auto' : 'none'}
            opacity={checkValidPos(3 * Math.floor(currentPage / 3) + 3) ? 1 : 0.5}
            color={currentPage % 3 === 2 ? '#FFF' : '#2D3748'}
            marginRight={3}
            onClick={() => changePos(2)}
            cursor='pointer'
            fontSize='small'
            fontWeight='semibold'
            width='35px'
            height='35px'
            backgroundColor={currentPage % 3 === 2 ? '#2D3748' : 'transparent'}
            borderRadius={8}
            justifyContent='center'
            alignItems='center'
          >
            {3 * Math.floor(currentPage / 3) + 3}
          </Flex>
          <GrFormNext
            aria-label='Next page'
            pointerEvents={checkValidPosJumpNext() ? 'auto' : 'none'}
            opacity={checkValidPosJumpNext() ? 1 : 0.5}
            cursor='pointer'
            onClick={() => changeStepSkip(1)}
          />
        </Flex>
      </TableContainer>

      <Flex flex={1} justifyContent='flex-end' mx={3} mb={3}>
        <Menu>
          <MenuButton
            fontSize='small'
            background='transparent'
            _hover={{ backgroundColor: 'transparent' }}
            as={Button}
            rightIcon={<IoChevronDownCircleOutline />}
          >
            Row per page - {rowPerPage}
          </MenuButton>
          <MenuList p={2} borderRadius='12px'>
            <MenuItem onClick={() => setRowPerPage(5)} borderRadius='8px' fontSize='small'>
              5
            </MenuItem>
            <MenuItem onClick={() => setRowPerPage(10)} borderRadius='8px' fontSize='small'>
              10
            </MenuItem>
            <MenuItem onClick={() => setRowPerPage(25)} borderRadius='8px' fontSize='small'>
              25
            </MenuItem>
            <MenuItem onClick={() => setRowPerPage(50)} borderRadius='8px' fontSize='small'>
              50
            </MenuItem>
            <MenuItem onClick={() => setRowPerPage(100)} borderRadius='8px' fontSize='small'>
              100
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

const MenuUserItems = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<HiOutlineDotsHorizontal />}
          iconSpacing={0}
          backgroundColor='transparent'
          _hover={{ backgroundColor: 'transparent' }}
        ></MenuButton>
        <MenuList padding={3} borderRadius='12px'>
          <MenuItem borderRadius='8px'>
            <Flex alignItems='center' width='100%' justifyContent='space-between'>
              <Flex flex={1} columnGap={3}>
                <IoIosAddCircleOutline fontSize='1.2rem' />
                <Text fontWeight='semibold'>Add training program</Text>
              </Flex>
              <MdOutlineNavigateNext color='transparent' />
            </Flex>
          </MenuItem>
          <MenuItem borderRadius='8px'>
            <Flex alignItems='center' width='100%' justifyContent='space-between'>
              <Flex flex={1} columnGap={3}>
                <MdOutlineEdit size='20px' />
                <Text fontWeight='semibold'>Edit Syllabus</Text>
              </Flex>
            </Flex>
          </MenuItem>
          <MenuItem borderRadius='8px'>
            <Flex alignItems='center' width='100%' justifyContent='space-between'>
              <Flex flex={1} columnGap={3}>
                <HiOutlineDuplicate size='20px' />
                <Text fontWeight='semibold'>Duplicate syllabus</Text>
              </Flex>
              <MdOutlineNavigateNext color='transparent' />
            </Flex>
          </MenuItem>
          <MenuItem borderRadius='8px'>
            <Flex alignItems='center' width='100%' justifyContent='space-between'>
              <Flex flex={1} columnGap={3}>
                <MdOutlineDeleteForever size='20px' />
                <Text fontWeight='semibold'>Delete syllabus</Text>
              </Flex>
              <MdOutlineNavigateNext color='transparent' />
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
