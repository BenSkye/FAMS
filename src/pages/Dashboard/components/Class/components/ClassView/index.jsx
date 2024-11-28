import { useEffect, useState } from 'react';
import {
  Badge,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
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
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FaSort } from 'react-icons/fa';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { IoMdAddCircleOutline, IoMdSearch } from 'react-icons/io';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import ReactPaginate from 'react-paginate';
import { generateFakeData } from '@/mocks/fakeDataClassList';
import ActionButton from '@/pages/Dashboard/components/Class/components/ClassView/components/ActionButton';
import FilterPopoverContent from '@/pages/Dashboard/components/Class/components/ClassView/components/FilterPopoverContent';
import '@/pages/Dashboard/components/Class/components/ClassView/paginationStyle.css';

export const ClassView = () => {
  const [data] = useState(() => [...generateFakeData(1000)]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [active, setActive] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    console.log(sorting);
  }, [sorting]);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('class', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Class',
    }),
    columnHelper.accessor('classCode', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Class Code',
    }),
    columnHelper.accessor('createdBy', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Created By',
    }),
    columnHelper.accessor('duration', {
      cell: (info) => <span>{info.getValue()} days</span>,
      header: 'Duration',
    }),
    columnHelper.accessor('attendee', {
      cell: (info) => (
        <div className='flex gap-2'>
          <Badge
            variant='subtle'
            colorScheme={
              info.getValue() === 'Fresher'
                ? 'orange'
                : info.getValue() === 'Online fee-fresher'
                ? 'green'
                : info.getValue() === 'Intern'
                ? 'blue-gray'
                : 'red'
            }
          >
            {info.getValue()}
          </Badge>
        </div>
      ),
      header: 'Attendee',
    }),
    columnHelper.accessor('location', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'Location',
    }),
    columnHelper.accessor('fsu', {
      cell: (info) => <span>{info.getValue()}</span>,
      header: 'FSU',
    }),
    columnHelper.accessor('action', {
      cell: (info) => <ActionButton data={info.row.original} />,
      header: '',
    }),
  ];

  const table = useReactTable({
    data,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    columns,
    state: {
      globalFilter,
      sorting,
    },
    sortingFns: {
      myCustomSorting: (rowA, rowB, columnId) =>
        rowA.getValue(columnId).value < rowB.getValue(columnId).value ? 1 : -1,
    },

    onSortingChange: setSorting,
  });

  const next = () => {
    if (active === table.getPageCount) return;
    table.nextPage();

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    table.previousPage();
    setActive(active - 1);
  };
  return (
    <>
      <Flex flexDirection='column' rowGap={3} width='100%'>
        <Text m={2} textAlign='left' mt={3} fontWeight='semibold'>
          Training Class
        </Text>
        <Flex
          flex={1}
          mx={3}
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
        >
          <Flex
            flex={1}
            flexDirection='row'
            justifyContent='flex-start'
            columnGap={3}
          >
            <InputGroup borderRadius='12px' width='300px' height='36px'>
              <InputLeftElement pointerEvents='none'>
                <IoMdSearch color='#2D3748' />
              </InputLeftElement>
              <Input
                borderRadius='12px'
                type='text'
                placeholder='Search by...'
                onChange={(e) => {
                  table.setGlobalFilter(e.target.value);
                  setGlobalFilter(e.target.value);
                }}
              />
            </InputGroup>
            <FilterPopoverContent />
          </Flex>
          <Button
            borderRadius='12px'
            leftIcon={<IoMdAddCircleOutline />}
            backgroundColor='#2D3748'
            color='#FFF'
            _hover={{ backgroundColor: '#2D3748', color: '#FFF' }}
            variant='solid'
          >
            Add new class
          </Button>
        </Flex>

        <TableContainer
          width='-webkit-fill-available'
          margin={3}
          borderRadius={15}
          backgroundColor='#FFF'
        >
          <Table variant='simple' fontSize='small'>
            <Thead backgroundColor='#2D3748'>
              {table.getHeaderGroups().map((headerGroup) => (
                <Tr key={headerGroup.id} className='bg-[#2D3748]'>
                  {headerGroup.headers.map((column) => (
                    <Th
                      key={column.id}
                      colSpan={column.colSpan}
                      className=' border-b border-blue-gray-100  p-4 '
                      onClick={column.column.getToggleSortingHandler()}
                    >
                      <Flex gap={2} alignItems={'center'}>
                        <Text variant='small' color='white'>
                          {flexRender(
                            column.column.columnDef.header,
                            column.getContext()
                          )}
                        </Text>
                        {column.column.id === 'action' ? null : (
                          <>
                            {
                              {
                                asc: <TiArrowSortedUp color='white' />,
                                desc: <TiArrowSortedDown color='white' />,
                              }[column.column.getIsSorted() ?? null]
                            }
                            {column.column.getIsSorted() ? null : (
                              <FaSort color='white' />
                            )}
                          </>
                        )}
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Td
                        key={cell.id}
                        alignItems='center'
                        color='darkgray'
                        fontSize='medium'
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))
              ) : (
                <Tr className='text-center h-32'>
                  <Td colSpan={12}>
                    <Flex justifyContent='center'>
                      <Text fontSize={'large'}>No Record Found!</Text>
                    </Flex>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          <Flex flex={1} justifyContent='flex-end' mx={3} mb={3}>
            <Menu>
              <MenuButton
                fontSize='small'
                background='transparent'
                _hover={{ backgroundColor: 'transparent' }}
                as={Button}
                rightIcon={<IoChevronDownCircleOutline />}
              >
                Row per page - {rowsPerPage}
              </MenuButton>
              <MenuList p={2} borderRadius='12px'>
                {[5, 10, 15, 20, 50, 100].map((value) => (
                  <MenuItem
                    key={value}
                    borderRadius='8px'
                    fontSize='small'
                    onClick={(e) => {
                      const rowsPerPage = parseInt(value, 10);
                      setRowsPerPage(rowsPerPage);
                      table.setPageSize(rowsPerPage);
                    }}
                  >
                    {value}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          <Flex
            flexDir={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            w={'100%'}
            marginY={4}
          >
            <ReactPaginate
              breakLabel={<span className='mr-4'>...</span>}
              nextLabel={
                <Button
                  variant='text'
                  className='flex items-center gap-2'
                  onClick={next}
                  disabled={active === table.getPageCount() - 1}
                >
                  <GrFormNext />
                </Button>
              }
              previousLabel={
                <Button
                  variant='text'
                  className='flex items-center gap-2'
                  onClick={prev}
                  disabled={active === 1}
                >
                  <GrFormPrevious />
                </Button>
              }
              containerClassName='container_pagination'
              pageCount={table.getPageCount()}
              pageRangeDisplayed={1}
              pageClassName='default_page'
              breakClassName='default_page'
              previousClassName='default_page'
              nextClassName='default_page'
              activeClassName='active_page'
              onPageChange={(page) => {
                table.setPageIndex(page.selected);
                setActive(page.selected + 1);
              }}
            />
          </Flex>
        </TableContainer>
      </Flex>
    </>
  );
};
