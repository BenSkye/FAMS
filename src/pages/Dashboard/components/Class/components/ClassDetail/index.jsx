import { React, useState } from 'react'
import { useTranslation } from 'react-i18next';
import {
  Table,
  Tbody,
  Td,
  Tr,
  Flex,
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import { AiOutlineBook } from "react-icons/ai";
import { CgAlarm } from "react-icons/cg";
import { MdCalendarToday, MdOutlineModeEdit } from "react-icons/md";
import { BiCaretDownCircle, BiBuildingHouse, BiFontFamily, BiUser } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegStar, FaRegHandPaper } from "react-icons/fa";
import { GiAlliedStar } from "react-icons/gi";
import { RiSignalTowerLine, RiInformationFill } from "react-icons/ri";
import { Calendar } from "react-multi-date-picker";

const StatusBar = ({ status }) => {
  return (
    <Flex align='center' marginTop='10px' marginLeft='30px'>
      <Box bg={status === 'In Progress' ? 'green' : '#FE7F9C'} h='25px' w={{ base: '100px', sm: '150px' }} mr='6' borderRadius='30' position='relative'>
        <Text fontSize='15px' position='absolute' top='1px' left='50%' transform='translateX(-50%)' color='white'>
          {status === 'In Progress' ? 'In Progress' : 'Planning'}
        </Text>
      </Box>
    </Flex>
  );
};

const ActiveBar = ({ classStatus }) => {
  return (
    <Flex align='center' marginTop='10px' marginLeft='30px'>
      <Box bg={classStatus === 'Active' ? '#2D3748' : '#95D1CE'} h='25px' w={{ base: '70px', sm: '130px' }} mr='6' borderRadius='30' position='relative'>
        <Text fontSize='15px' position='absolute' top='1px' left='50%' transform='translateX(-50%)' color='white'>
          {classStatus === 'Active' ? 'Active' : 'Inactive'}
        </Text>
      </Box>
    </Flex>
  );
};

export const ClassDetail = () => {

  const { t } = useTranslation();

  const [isTableVisible, setIsTableVisible] = useState(true); // State to manage the visibility of the table

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible); // Toggle the visibility state
  };

  const [isCardVisible, setIsCardVisible] = useState(true); // State to manage the visibility of the card

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible); // Toggle the visibility state
  };

  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Card w='100%' bgColor='#2D3748' mt='3px'>
        <CardHeader textAlign='left' color='white' letterSpacing='5px'>
          <Heading fontSize='25px' fontWeight='normal' fontFamily='Arial'>
            {t('class')}
          </Heading>
        </CardHeader>
        <CardBody textAlign='left' color='white' pt='0px'>
          <Flex align='center' justify='space-between' direction={{}}>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Flex align='center'>
                  <Heading fontSize={{ base: '20px', md: '40px' }} letterSpacing='7px' >
                    Fresher Develop Operation
                  </Heading>
                  <StatusBar status="Planning" />
                </Flex>
                <Text pt='2' fontSize='17px' fontFamily='Arial' fontWeight='bold'>
                  HCM22_FR_DevOps_01
                </Text>
              </Box>

              <Flex direction='row' align='center' >
                <Box>
                  <Text as="span" fontSize={{ base: '17px', sm: '25px' }} fontWeight='bold'>
                    31 </Text>
                  <Text as="span" pt='2' fontSize='sm'>
                    {t('days')} (97 {t('hours')})
                  </Text>
                </Box>
                <Box mx='4' h='20px' mt='14px' ml='40px' mr='-25px' borderRight='1px solid #CCCCCC' />
                <Box mt='14px' ml='40px' display='flex' align='center' >
                  <Icon as={AiOutlineBook} mr='10px'></Icon>
                  <Icon as={BiUser} mr='10px'></Icon>
                  <Icon as={BiFontFamily} mr='10px'></Icon>
                  <Icon as={RiSignalTowerLine} mr='10px'></Icon>
                  <Icon as={FaRegHandPaper} mr='10px'></Icon>
                </Box>
              </Flex>
            </Stack>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HiOutlineDotsHorizontal color='white' fontSize='50px' />}
                color='white'
                mb='80px'
                bg='none'
                _hover={{ backgroundColor: '#2D3748' }} // Set hover background color to match the default background color
                data-testid='edit-button'
              />
              <MenuList color='black' data-testid='edit-menu'>
                <Text fontSize='15px' alignItems='center' fontWeight='bold' mt='-3px' mb='3px' ml='8px'>
                  {t('manage')} {t('class')}
                </Text>
                <MenuItem icon={<MdOutlineModeEdit />} fontSize='15px' color="purple">
                  {t('edit')} {t('class')}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardBody>

      </Card>

      <Flex direction={{ base: 'column', xl: 'row' }} // Stack on smaller screens, row on larger screens
        alignItems={{ base: 'center', xl: 'flex-start' }} >
        <Flex flexDirection='column' w={{ lg: '70%' }} mr={{ base: '0', xl: '100px', "2xl": '260px' }} mb={{ base: '20px' }}>
          <Menu>
            <MenuButton
              as={Button}
              bgColor='#2D3748'
              color='white'
              leftIcon={<MdCalendarToday />}
              rightIcon={<BiCaretDownCircle />}
              _hover={{ backgroundColor: '#2D3748' }} // Set hover background color to match the default background color
              _active={{ backgroundColor: '#2D3748' }} // Set active background color to match the default background color
              onClick={toggleTableVisibility} // Toggle table visibility on button click
              w='100%' // Set the button width to 100% to match the table
              zIndex='1'
              textAlign='left'
              data-testid="general-button"
            >
              {t('general')}
            </MenuButton>
          </Menu>

          {isTableVisible && (
            <Table variant='simple' w={{ lg: '100%' }} data-testid="general-table">
              <Card bgColor='white' mt='3px' fontSize='15px'>
                <Tbody>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <CgAlarm mr='5px' fontSize='25px' color='purple' />
                        <Text fontWeight='bold' ml='5px'>
                          {t('class_time')}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>9:00 - 12:00</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <BiBuildingHouse fontSize='25px' color='purple' />
                        <Text fontWeight='bold' ml='5px'>
                          {t('location')}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text mb='3px'>FTown2</Text>
                      <Text mb='3px'>FTown1</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex alignItems='center'>
                        <BiUser fontSize='25px' color='purple' />
                        <Text fontWeight='bold' ml='5px'>
                          {t('trainer')}
                        </Text>
                      </Flex>
                    </Td>
                    <Td color='blue' textDecoration='underline'>
                      <Flex>
                        <Text mb='3px'>Dinh Vu Quoc Trung</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                      <Flex>
                        <Text mb='3px'>Ba Chu Heo</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                      <Flex>
                        <Text mb='3px'>Hu Cheo Ba</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                      <Flex>
                        <Text mb='3px'>Tap The Lop</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align='center'>
                        <FaRegStar fontSize='25px' color='purple' />
                        <Text fontWeight='bold' ml='5px'>Admin</Text>
                      </Flex>
                    </Td>
                    <Td color='blue' textDecoration='underline'>
                      <Flex>
                        <Text mb='3px'>Ly Lien Lien Dung</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                      <Flex>
                        <Text mb='3px'>Dung Lien Lien Ly</Text>
                        <RiInformationFill color='red' fontSize='10px' />
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex alignItems='center'>
                        <GiAlliedStar fontSize='25px' color='purple' />
                        <Text fontWeight='bold' ml='5px'>FSU</Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text mb='3px'>FHM</Text>
                      <Text mb='3px'>BaCH@fsoft.com.vn</Text>
                    </Td>
                  </Tr>
                  <Flex justifyContent='center'>
                    <Divider orientation='horizontal' borderColor='black' w='90%' />
                  </Flex>
                  <Tr>
                    <Td fontWeight='bold' >{t('created_on')}</Td>
                    <Td>25/03/2022 {t('by')} DanPL</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight='bold' >{t('review')}</Td>
                    <Td>30/03/2022 {t('by')} TrungDVQ</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight='bold' >{t('approve')}</Td>
                    <Td>02/04/2022 {t('by')} VongNT</Td>
                  </Tr>
                </Tbody>
              </Card>
            </Table>
          )}

          <Menu >
            <MenuButton
              mt='20px'
              as={Button}
              bgColor='#2D3748'
              color='white' // Set text color to white
              leftIcon={<FaRegStar />}
              rightIcon={<BiCaretDownCircle />}
              _hover={{ backgroundColor: '#2D3748' }} // Set hover background color to match the default background color
              _active={{ backgroundColor: '#2D3748' }} // Set active background color to match the default background color
              onClick={toggleCardVisibility} // Toggle table visibility on button click
              w='100%' // Set the button width to 100% to match the table
              zIndex='1'
              textAlign='left'
              data-testid='fresher-button'
            >
              <Text as="span">
                {t('attendee')} </Text>
              <Text as="span"  fontWeight='normal'>
                Fresher
              </Text>
            </MenuButton>
          </Menu>

          {isCardVisible && (
            <Flex flexDirection='row' justifyContent='center' alignItems='center' data-testid='fresher-table'>
              <Card w='100%' bgColor='#2D3748' color='white' mt='1px' fontSize='14px' fontWeight='normal'>
                <Text mt='10px'>
                  {t('planned')}
                </Text>
                <Text letterSpacing='5px' mb='9px' fontSize='25px'>10</Text>
              </Card>
              <Card w='100%' bgColor='#2A63A0' color='white' mt='1px' fontSize='14px' fontWeight='normal'>
                <Text mt='10px'>
                  {t('accepted')}
                </Text>
                <Text letterSpacing='5px' mb='9px' fontSize='25px'>9</Text>
              </Card>
              <Card w='100%' bgColor='#E1E1E1' mt='1px' fontSize='14px' fontWeight='normal'>
                <Text mt='10px'>
                  {t('actual')}
                </Text>
                <Text letterSpacing='5px' mb='9px' fontSize='25px'>9</Text>
              </Card>
            </Flex>
          )}
        </Flex>

        <Flex direction='column' alignItems={['flex-start', 'center']}>
          <Menu >
            <MenuButton
              as={Button}
              bgColor='#2D3748'
              color='white' // Set text color to white
              leftIcon={<MdCalendarToday />}
              rightIcon={<BiCaretDownCircle />}
              _hover={{ backgroundColor: '#2D3748' }} // Set hover background color to match the default background color
              _active={{ backgroundColor: '#2D3748' }} // Set active background color to match the default background color
              w='100%' // Set the button width to 100% to match the table
              zIndex='1'
              textAlign='left'
            >
              {t('time_frame')}
            </MenuButton>
          </Menu>
          <Calendar
            numberOfMonths={2}
            disableMonthPicker
            disableYearPicker
          />
        </Flex>
      </Flex>

      <Flex direction='column' marginRight='auto' width={{ base: '550px', lg: '757px' }}>
        <ButtonGroup size='md' isAttached variant='outline'
          backgroundColor='#2D3748'
          borderRadius='50' // Set border radius for top

          marginTop='20px'
        >
          <Button
            color='white'
            backgroundColor={activeTab === 'Training Program' ? '#2D3748' : '#8CAFAD'}
            _hover={{ backgroundColor: '#8CAFAD' }}
            w='190px'
            onClick={() => handleTabClick('Training Program')}
            data-testid='program-button'
          >
            {t('training_program')}
          </Button>
          <Button
            color='white'
            backgroundColor={activeTab === 'Attendee List' ? '#2D3748' : '#8CAFAD'}
            _hover={{ backgroundColor: '#8CAFAD' }}
            width='190px'
            onClick={() => handleTabClick('Attendee List')}
            data-testid='attendee-button'
          >
            {t('attendee_list')}
          </Button>
          <Button
            color='white'
            backgroundColor={activeTab === 'Budget' ? '#2D3748' : '#8CAFAD'}
            _hover={{ backgroundColor: '#8CAFAD' }}
            width='190px'
            onClick={() => handleTabClick('Budget')}
            data-testid='budget-button'
          >
            {t('budget')}
          </Button>
          <Button
            color='white'
            backgroundColor={activeTab === 'Others' ? '#2D3748' : '#8CAFAD'}
            _hover={{ backgroundColor: '#8CAFAD' }}
            width='190px'
            onClick={() => handleTabClick('Others')}
            data-testid='others-button'
          >
            {t('others')}
          </Button>
        </ButtonGroup>
      </Flex>

      {activeTab === 'Training Program' && (
        <Flex direction='column' w='99%' mr='auto' data-testid='program-tab'>
          <Card bgColor='#2D3748' mt='-8px' >
            <CardHeader textAlign='left' textColor='white' letterSpacing='5px' mt='-7px' ml='20px'>
              <Heading size='md' fontSize='40px' fontWeight='normal' fontFamily='Arial'>
                {t('devops_foundation')}
              </Heading>
            </CardHeader>

            <CardBody textAlign='left' textColor='white' paddingTop='0px'>
              <Flex align='center'>
                <Flex direction='row' marginTop='-10px' marginLeft='20px' fontSize='sm'>
                  <Box>
                    <Text as='span' pt='2' >
                      31 {t('days')} </Text>
                    <Text as='span' fontStyle='italic'>
                      (97 {t('hours')})
                    </Text>
                  </Box>
                  <Box height='20px' ml='20px' mr='-20px' borderRight='1px solid #CCCCCC' />
                  <Box ml='40px'>
                    <Text as='span'>{t('modified_on')} </Text>
                    <Text as='span' fontStyle='italic'>23/07/2022 </Text>
                    <Text as='span'>{t('by')} </Text>
                    <Text as='span' fontWeight='bold'>Warrior Tran</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Flex direction='row'>
            <Card h={{ base: '160px', sm: '113px' }}
              w='200px'
              bgColor='#2D3748'
              color='white'
              mt='20px'
              fontWeight='bold'
              justifyContent='center'
              alignItems='center'
              borderTopLeftRadius={'20'}
              borderBottomLeftRadius={'20'}
            >
              <Stack direction={'row'} >
                <Avatar size={{ base: 'sm', lg: 'md' }} name='Hi' src='https://bit.ly/broken-link' />
                <Avatar size={{ base: 'sm', lg: 'md' }} name='Duy' src='https://bit.ly/broken-link' />
                <Avatar size={{ base: 'sm', lg: 'md' }} src='https://bit.ly/broken-link' />
              </Stack>
            </Card>
            <Card h={{ base: '160px', sm: '113px' }}
              w='100%'
              bgColor='white'
              mt='auto'
              justifyContent='center'
              borderTopRightRadius='20'
              borderBottomRightRadius='20'>

              <CardHeader textAlign='left' textColor='black' marginTop='-7px' marginLeft='20px'>
                <Flex align='center'>
                  <Heading size='md' fontSize='40px' fontWeight='bold' fontFamily='Arial' letterSpacing='5px'>
                    Linux
                  </Heading>
                  <ActiveBar classStatus="Inactive" />
                </Flex>
              </CardHeader>

              <CardBody textAlign='left' textColor='black' paddingTop='0px'>
                <Flex direction='row' align='center' marginTop='-10px' marginLeft='20px'>
                  <Box>
                    <Text fontSize='sm'>
                      LIN v2.0
                    </Text>
                  </Box>
                  <Box mx='4' height='20px' marginLeft='20px' marginRight='-20px' borderRight='1px solid black' />
                  <Box marginLeft='40px' fontSize='sm'>
                    <Text as='span'>
                      31 {t('days')} </Text>
                    <Text as='span' fontStyle='italic'>
                      (97 {t('hours')})
                    </Text>
                  </Box>
                  <Box mx='4' height='20px' marginLeft='20px' marginRight='-20px' borderRight='1px solid black' />
                  <Box marginLeft='40px' fontSize='sm'>
                    <Text as='span'>
                      {t('on')} </Text>
                    <Text as='span' fontStyle='italic'>
                      23/07/2022 </Text>
                    <Text as='span'>
                      {t('by')} </Text>
                    <Text as='span' fontWeight='bold'>
                      Warrior Tran
                    </Text>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </Flex>

          <Flex direction='row'>
            <Card h={{ base: '160px', sm: '113px' }}
              w='200px'
              bgColor='#2D3748'
              color='white'
              mt='20px'
              fontWeight='bold'
              justifyContent='center'
              alignItems='center'
              borderTopLeftRadius={'20'}
              borderBottomLeftRadius={'20'}
            >
              <Stack direction={'row'} >
                <Avatar size={{ base: 'sm', lg: 'md' }} name='Hi' src='https://bit.ly/broken-link' />
                <Avatar size={{ base: 'sm', lg: 'md' }} name='Duy' src='https://bit.ly/broken-link' />
                <Avatar size={{ base: 'sm', lg: 'md' }} src='https://bit.ly/broken-link' />
              </Stack>
            </Card>
            <Card h={{ base: '160px', sm: '113px' }}
              w='100%'
              bgColor='white'
              mt='auto'
              justifyContent='center'
              borderTopRightRadius='20'
              borderBottomRightRadius='20'>

              <CardHeader textAlign='left' textColor='black' marginTop='-7px' marginLeft='20px'>
                <Flex align='center'>
                  <Heading size='md' fontSize='40px' fontWeight='bold' fontFamily='Arial' letterSpacing='5px'>
                    Linux
                  </Heading>
                  <ActiveBar classStatus="Active" />
                </Flex>
              </CardHeader>
              <CardBody textAlign='left' textColor='black' paddingTop='0px'>
                <Flex direction='row' align='center' marginTop='-10px' marginLeft='20px'>
                  <Box>
                    <Text fontSize='sm'>
                      LIN v2.0
                    </Text>
                  </Box>
                  <Box mx='4' height='20px' marginLeft='20px' marginRight='-20px' borderRight='1px solid black' />
                  <Box marginLeft='40px' fontSize='sm'>
                    <Text as='span'>
                      31 {t('days')} </Text>
                    <Text as='span' fontStyle='italic'>
                      (97 {t('hours')})
                    </Text>
                  </Box>
                  <Box mx='4' height='20px' marginLeft='20px' marginRight='-20px' borderRight='1px solid black' />
                  <Box marginLeft='40px' fontSize='sm'>
                    <Text as='span'>
                      {t('on')} </Text>
                    <Text as='span' fontStyle='italic'>
                      23/07/2022 </Text>
                    <Text as='span'>
                      {t('by')} </Text>
                    <Text as='span' fontWeight='bold'>
                      Warrior Tran
                    </Text>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </Flex>

          <Flex h='18px' justifyContent='center' bgColor='#2D3748' mt='20px' mb='3px' borderBottomRadius='lg' />

        </Flex>
      )}

      {activeTab === 'Attendee List' && (
        <Flex direction='column' width='99%' marginRight='auto' datatest-id='attendee-tab'>
          <Text> Attendee List here </Text>
        </Flex>
      )}

      {activeTab === 'Budget' && (
        <Flex direction='column' width='99%' marginRight='auto'>
          <Text> Budget here </Text>
        </Flex>
      )}

      {activeTab === 'Others' && (
        <Flex direction='column' width='99%' marginRight='auto'>
          <Text> Others here </Text>
        </Flex>
      )}
    </>

  );
}
