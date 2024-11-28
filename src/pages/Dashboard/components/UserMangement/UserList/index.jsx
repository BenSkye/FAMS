import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IoFilter } from 'react-icons/io5';
import { IoMdSearch, IoMdAddCircleOutline } from 'react-icons/io';
import {
  Flex, Text, Button, InputGroup, InputLeftElement, Input, HStack, Tag,
  TagLabel, TagCloseButton, AlertDialog, AlertDialogOverlay, AlertDialogContent,
  AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure, FormControl,
  FormLabel, Select, RadioGroup, Stack, Radio, Switch
} from '@chakra-ui/react';
import { MPTable } from '@/core/components/MPTable';
import { setIsUpdating } from '@/core/store/user-management/userUpdate';
import { getAllUser } from '@/core/services/userController.js'

export const UserList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const isUpdating = useSelector((state) => state.userUpdating.isUpdating);
  const updatingData = useSelector((state) => state.userUpdating.userData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenUpdate, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure();
  const cancelRef = React.useRef();
  const cancelRefUpdate = React.useRef();
  const [users, setUsers] = React.useState([]);
  const [searchTags, setSearchTags] = React.useState([]);
  const [currentSearchValue, setCurrentSearchValue] = React.useState('');

  React.useEffect(() => {
    getAllUser()
      .then((res) => {
        const data = res.data;
        setUsers(data);
      })
      .catch(() => {
        setUsers([]);
      })
  }, []);

  const handleRemoveSearchTags = (tagName) => {
    let tags = searchTags.filter((tag) => tag !== tagName);
    setSearchTags(tags);
  }

  const handleAddSearchTags = (val) => {
    if (!searchTags.includes(val)) {
      setSearchTags(
        [...searchTags, val]
      );
      setCurrentSearchValue('');
    } else {
      setCurrentSearchValue('');
    }
  }

  const handleSearchKeyDown = (key) => {
    if (key === 'Enter') {
      handleAddSearchTags(currentSearchValue);
    }
  }

  return (
    <>
      <Flex flexDirection='column' rowGap={3} width='100%'>
        <Text m={2} textAlign='left' mt={3} fontWeight='semibold'>{t('user_management')}</Text>

        <Flex flex={1} mx={3} flexDirection='row' alignItems='center' justifyContent='center'>
          <Flex flex={1} flexDirection='row' justifyContent='flex-start' columnGap={3}>
            <InputGroup borderRadius='12px' width='300px' height='36px'>
              <InputLeftElement pointerEvents='none'>
                <IoMdSearch color='#2D3748' />
              </InputLeftElement>
              <Input value={currentSearchValue} onKeyDown={(e) => handleSearchKeyDown(e.key)} onChange={(e) => setCurrentSearchValue(e.target.value)} borderRadius='12px' type='text' placeholder={t('search_by')} />
            </InputGroup>
            <Button name='Filter' borderRadius='12px' leftIcon={<IoFilter />} backgroundColor='#2D3748' color='#FFF' _hover={{ backgroundColor: '#2D3748', color: '#FFF' }} variant='solid'>{t('filter')}</Button>
          </Flex>

          <Button name='Add User' onClick={onOpen} borderRadius='12px' leftIcon={<IoMdAddCircleOutline />} backgroundColor='#2D3748' color='#FFF' _hover={{ backgroundColor: '#2D3748', color: '#FFF' }} variant='solid'>
            {t('add_user')}
          </Button>
        </Flex>

        <Flex flex={1} mx={3} marginTop={3} flexDirection='row' alignItems='center' justifyContent='flex-start'>
          <HStack spacing={4}>
            {
              searchTags.map((tagName) => (
                <Tag
                  size='md'
                  key={tagName}
                  borderRadius='full'
                  variant='solid'
                  backgroundColor='#474747'
                  color='#FFF'
                  height='32px'
                >
                  <TagLabel>{tagName}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveSearchTags(tagName)} />
                </Tag>
              ))
            }
          </HStack>
        </Flex>

        <MPTable data={users} />
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent width='542px' maxW='100vw' borderRadius={16}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {t('add_a_new_user')}
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isRequired>
                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('user_type')}</FormLabel>
                  <Select flex={1} placeholder=''>
                    <option>Super Admin</option>
                    <option>Admin</option>
                    <option>Trainer</option>
                  </Select>
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('name')}</FormLabel>
                  <Input flex={1} placeholder='' type='text' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('email')}</FormLabel>
                  <Input flex={1} placeholder='' type='email' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('phone')}</FormLabel>
                  <Input flex={1} placeholder='' type='text' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('date_of_birth')}</FormLabel>
                  <Input flex={1} placeholder='' type='date' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('gender')}</FormLabel>
                  <RadioGroup marginX={0} onChange={() => { }}>
                    <Stack direction='row'>
                      <Radio value='1'>{t('male')}</Radio>
                      <Radio value='2'>{t('female')}</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' mb='0' fontSize='small' fontWeight='semibold'>
                    {t('active')}
                  </FormLabel>
                  <Switch />
                </Flex>
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button borderRadius='12px' ref={cancelRef} onClick={onClose}>
                {t('cancel')}
              </Button>
              <Button borderRadius='12px' backgroundColor='#2D3748' color='#FFF' _hover={{ backgroundColor: '#2D3748', color: '#FFF' }} onClick={onClose} ml={3}>
                {t('create')}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <AlertDialog
        isOpen={isUpdating}
        leastDestructiveRef={cancelRefUpdate}
        onClose={
          () => {
            dispatch(setIsUpdating(false));
            onCloseUpdate();
          }
        }
      >
        <AlertDialogOverlay>
          <AlertDialogContent width='542px' maxW='100vw' borderRadius={16}>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {t('update_a_user')}
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isRequired>
                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>User Type</FormLabel>
                  <Select flex={1} placeholder='' value={updatingData.userType}>
                    <option value='Super Admin'>Super Admin</option>
                    <option value='Admin'>Admin</option>
                    <option value='Trainer'>Trainer</option>
                  </Select>
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('name')}</FormLabel>
                  <Input value={updatingData.name} flex={1} placeholder='' type='text' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('email')}</FormLabel>
                  <Input disabled value={updatingData.email} flex={1} placeholder='' type='email' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('phone')}</FormLabel>
                  <Input value={updatingData.phone} flex={1} placeholder='' type='text' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('date_of_birth')}</FormLabel>
                  <Input value={updatingData.dateOfBirth} flex={1} placeholder='' type='date' />
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' fontSize='small' fontWeight='semibold'>{t('gender')}</FormLabel>
                  <RadioGroup marginX={0} onChange={() => { }}>
                    <Stack direction='row'>
                      <Radio checked={updatingData.gender === 'male'} value='1'>{t('male')}</Radio>
                      <Radio checked={updatingData.gender === 'female'} value='2'>{t('female')}</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>

                <Flex width='100%' marginBottom={3} alignItems='center'>
                  <FormLabel width='150px' mb='0' fontSize='small' fontWeight='semibold'>
                    {t('active')}
                  </FormLabel>
                  <Switch isChecked={updatingData.isActive} />
                </Flex>
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button borderRadius='12px' ref={cancelRef} onClick={() => dispatch(setIsUpdating(false))}>
                {t('cancel')}
              </Button>
              <Button borderRadius='12px' backgroundColor='#2D3748' color='#FFF' _hover={{ backgroundColor: '#2D3748', color: '#FFF' }} onClick={() => dispatch(setIsUpdating(false))} ml={3}>
                {t('update')}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
