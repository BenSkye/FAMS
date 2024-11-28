import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { BiUserVoice } from 'react-icons/bi';
import { IoIosArrowDropdown, IoIosArrowRoundForward } from 'react-icons/io';
import MaterialModal from '@/pages/Dashboard/components/TrainingProgram/TrainingProgramDetail/components/MaterialModal.jsx';

export const AccordionContent = ({ contentData }) => {
  const [data, setData] = useState();
  const [accordionDay, setAccordionDay] = useState([]);
  const [dayInformation, setDayInformation] = useState([]);
  const { t } = useTranslation();
  const statusRender = (status) => {
    switch (status) {
      case 'Online':
        return (
          <Badge borderRadius={'1rem'} w={{ base: 'fit-content' }} px={3} py={1} textAlign={'center'}
            variant={'outline'} colorScheme='orange' fontSize={{ base: '0.5rem', lg: 'xs' }}>
            Online
          </Badge>
        )
      case 'Offline':
        return (
          <Badge borderRadius={'1rem'} w={{ base: 'fit-content' }} px={3} py={1} textAlign={'center'}
            variant={'solid'} backgroundColor={'#2D3748'} colorScheme='orange' fontSize={{ base: '0.5rem', lg: 'xs' }}>
            Offline
          </Badge>
        )
      default:
        return <Badge>Error</Badge>
    }
  }
  useEffect(() => {

  }, []);

  return (
    <>
      {contentData.map((e) => (
        <Accordion key={e.id} overflowY={'hidden'} mt={5} background='#FAFAFA' _hover={{ backgroundColor: '#FFF' }} borderRadius={'20px'} w={'98%'} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' >
                  <Heading my={4} fontSize='20px' fontWeight='semibold'>
                    {e.title}
                    <Badge ml={6} py={1} px={4} borderRadius={'20px'} variant='solid' backgroundColor='#2D3748'>
                      {e.status}
                    </Badge>
                  </Heading>
                  <Box my={4} display={{ base: 'block', lg: 'flex' }}>
                    <Text w={{ base: '100%', lg: 'fit-content' }} borderRight={{ base: 'none', lg: '1px solid black' }} pr={{ base: 0, lg: 2 }}>
                      {e.message01}
                    </Text>
                    <Text w={{ base: '100%', lg: 'fit-content' }} px={{ base: 0, lg: 2 }} borderRight={{ base: 'none', lg: '1px solid black' }}>
                      {e.day} days (<span style={{ fontStyle: 'italic' }}>{e.hour} hours</span>)
                    </Text>
                    <Text w={{ base: '100%', lg: 'fit-content' }} pl={{ base: 0, lg: 2 }}>
                      {t('modified_on')} <span style={{ fontStyle: 'italic' }}>{e.modifiedOn}</span> {t('by')} {e.modifiedBy}
                    </Text>
                  </Box>
                </Box>
                <Box w={'20%'} display={'flex'} justifyContent={'end'} mt={3} mr={3}>
                  <Box bg='#2D3748' w={{ base: '40%', lg: '20%' }} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'}>
                    <IoIosArrowRoundForward size={'80%'} color='white' />
                  </Box>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} w={'100%'} p={0}>
              {e.course.map((element) => (
                <Accordion key={element.id} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton fontSize={'lg'} fontWeight={'bold'} backgroundColor={'#2D3748'} _hover={'none'} color={'white'}>
                        Day {element.day}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel w={'100%'} p={0}>
                      {element.dayOfCourse.map((dayCourse) => (
                        <Accordion key={dayCourse.id} allowMultiple>
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Flex w={'100%'}>
                                  <Box w={'20%'} textAlign={'left'}>
                                    <Text fontWeight={'bold'} fontSize={{ base: 'md', lg: 'xl' }}>Unit {dayCourse.unit}</Text>
                                  </Box>
                                  <Box w={'80%'}>
                                    <Text fontWeight={'bold'} fontSize={{ base: 'md', lg: 'xl' }} textAlign={'left'}>{dayCourse.title}</Text>
                                    <Text fontSize={{ base: 'md', lg: 'lg' }} textAlign={'left'}>{dayCourse.hour}hrs</Text>
                                  </Box>
                                </Flex>
                                <IoIosArrowDropdown size={'30px'} />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel p={0}>
                              <Flex w={'100%'}>
                                <Box w={{ base: '0%', lg: '20%' }}></Box>
                                <Box w={{ base: '100%', lg: '80%' }}>
                                  {dayCourse.courseDetail.map((courseDetail) => (
                                    <Flex key={courseDetail.id} borderRadius={'15px'} my={3} pl={4} py={1} backgroundColor={'#eceaea'} w={{ base: '100%', lg: '95%' }}>
                                      <Box w={{ base: '35%', lg: '60%' }} display={'flex'} alignItems={'center'}>
                                        <Text w={'fit-content'} fontSize={{ base: 'sm', lg: 'lg' }} fontWeight={'bold'}>{courseDetail.title}</Text>
                                      </Box>
                                      <Box w={{ base: '15%', lg: '6%' }} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} flex={1} minWidth={{ base: '3em', lg: '5em' }}>
                                        <Badge display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'1em'}
                                          fontWeight={'none'} borderRadius={'0.5em'} w={'fit-content'} px={2} h={'2em'} variant={'solid'}
                                          backgroundColor={'#2D3748'}>
                                          <Text fontSize={{ base: 'sm', lg: 'base' }}>{courseDetail.outputStandard}</Text>
                                        </Badge>
                                      </Box>
                                      <Box minWidth={{ base: '3em', lg: '3em' }} w={{ base: '15%', lg: '10% ' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flex={1}>
                                        <Text fontSize={{ base: 'sm', lg: 'md' }}>{courseDetail.duration}</Text>
                                      </Box>
                                      <Box w={{ base: '15%', lg: '10%' }} px={{ base: '0px', lg: '1rem' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flex={1}>
                                        {statusRender(courseDetail.status)}
                                      </Box>
                                      <Box minW={{ base: '1em', lg: '3em' }} w={{ base: '10%', lg: '7%' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flex={1}>
                                        <BiUserVoice onClick={() => console.log('abc')} size={'2em'} color={'#265b97'} style={{ margin: '0 auto' }} />
                                      </Box>
                                      <Box minW={{ base: '1em', lg: '3em' }} w={{ base: '10%', lg: '7%' }} display={'flex'} justifyContent={'center'} alignItems={'center'} flex={1}>
                                        <MaterialModal />
                                      </Box>
                                    </Flex>
                                  ))}
                                </Box>
                              </Flex>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

    </>
  );
};
