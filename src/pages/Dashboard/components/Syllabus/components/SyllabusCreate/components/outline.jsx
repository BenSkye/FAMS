import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Card,
  CardBody,
  Text,
  HStack,
  Flex,
  Button,
  GridItem,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaPenSquare } from "react-icons/fa";
import { BiUserVoice } from "react-icons/bi";
import { FaRegFolderClosed } from "react-icons/fa6";
import { NewContentPopup } from "@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/PopupNewContent.jsx";

export const Outline = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(".Net Introduction");

  const handleEditClick = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent accordion from expanding/collapsing
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Accordion
        boxShadow="xl"
        borderRadius="xl"
        borderBottom="10px solid #2D3748"
      >
        <AccordionItem>
          <h2>
            <AccordionButton
              bg="#2D3748"
              color="white"
              _hover={{ opacity: "0.8" }}
            >
              <Box as="span" flex="1" textAlign="left">
                <HStack spacing="24px">
                  <Box>Day 1</Box>
                  <Box>
                    {isEditing ? <CiCircleMinus color="red" /> : undefined}
                  </Box>
                </HStack>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton p="0">
                    <Box as="span" flex="1" textAlign="left">
                      <Flex>
                        <Box flex="1">
                          <Text as="b" textAlign="start">
                            Unit 1
                          </Text>
                        </Box>
                        <Box flex="8">
                          <Flex>
                            <Box>
                              <Flex flexDirection="column">
                                <Box>
                                  {isEditing ? (
                                    <input
                                      type="text"
                                      value={inputValue}
                                      onChange={handleInputChange}
                                      onBlur={handleInputBlur}
                                    />
                                  ) : (
                                    <Text as="b">{inputValue}</Text>
                                  )}
                                </Box>
                                <Box>
                                  <Text as="i">7hrs</Text>
                                </Box>
                              </Flex>
                            </Box>
                            <Box p="4">
                              <Button
                                p="0"
                                _hover={{ opacity: "0.5 " }}
                                onClick={handleEditClick}
                              >
                                <FaPenSquare size="50" color="#2D3748" />
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing="2">
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                  </Stack>
                  <Flex p="4">
                    <Button p="0" borderRadius="full" onClick={onOpen}>
                      <CiCirclePlus size="80%" />
                    </Button>
                  </Flex>
                  <NewContentPopup isOpen={isOpen} onClose={onClose} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton p="0">
                    <Box as="span" flex="1" textAlign="left">
                      <Flex>
                        <Box flex="1">
                          <Text as="b" textAlign="start">
                            Unit 2
                          </Text>
                        </Box>
                        <Box flex="8">
                          <Flex>
                            <Box>
                              <Flex flexDirection="column">
                                <Box>
                                  <Text as="b">.Net Introduction</Text>
                                </Box>
                                <Box>
                                  <Text as="i">7hrs</Text>
                                </Box>
                              </Flex>
                            </Box>
                            <Box p="4">
                              <Button
                                p="0"
                                _hover={{ opacity: "0.5 " }}
                                onClick={handleEditClick}
                              >
                                <FaPenSquare size="50" color="#2D3748" />
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing="2">
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>

                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                  </Stack>
                  <Flex p="4">
                    <Button p="0" borderRadius="full">
                      <CiCirclePlus size="80%" />
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button
              bg="#474748"
              variant="solid"
              display="flex"
              mt="1%"
              fontSize="lg"
              color="white"
              m="1%"
            >
              <CiCirclePlus />
              Add unit
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              bg="#2D3748"
              color="white"
              _hover={{ opacity: "0.8" }}
            >
              <Box as="span" flex="1" textAlign="left">
                <HStack spacing="24px">
                  <Box>Day 2</Box>
                  <Box>
                    {isEditing ? <CiCircleMinus color="red" /> : undefined}
                  </Box>
                </HStack>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton p="0">
                    <Box as="span" flex="1" textAlign="left">
                      <Flex>
                        <Box flex="1">
                          <Text as="b" textAlign="start">
                            Unit 1
                          </Text>
                        </Box>
                        <Box flex="8">
                          <Flex>
                            <Box>
                              <Flex flexDirection="column">
                                <Box>
                                  {isEditing ? (
                                    <input
                                      type="text"
                                      value={inputValue}
                                      onChange={handleInputChange}
                                      onBlur={handleInputBlur}
                                    />
                                  ) : (
                                    <Text as="b">{inputValue}</Text>
                                  )}
                                </Box>
                                <Box>
                                  <Text as="i">7hrs</Text>
                                </Box>
                              </Flex>
                            </Box>
                            <Box p="4">
                              <Button
                                p="0"
                                _hover={{ opacity: "0.5 " }}
                                onClick={handleEditClick}
                              >
                                <FaPenSquare size="50" color="#2D3748" />
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing="2">
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                  </Stack>
                  <Flex p="4">
                    <Button p="0" borderRadius="full" onClick={onOpen}>
                      <CiCirclePlus size="80%" />
                    </Button>
                  </Flex>
                  <NewContentPopup isOpen={isOpen} onClose={onClose} />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton p="0">
                    <Box as="span" flex="1" textAlign="left">
                      <Flex>
                        <Box flex="1">
                          <Text as="b" textAlign="start">
                            Unit 2
                          </Text>
                        </Box>
                        <Box flex="8">
                          <Flex>
                            <Box>
                              <Flex flexDirection="column">
                                <Box>
                                  <Text as="b">.Net Introduction</Text>
                                </Box>
                                <Box>
                                  <Text as="i">7hrs</Text>
                                </Box>
                              </Flex>
                            </Box>
                            <Box p="4">
                              <Button
                                p="0"
                                _hover={{ opacity: "0.5 " }}
                                onClick={handleEditClick}
                              >
                                <FaPenSquare size="50" color="#2D3748" />
                              </Button>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing="2">
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>

                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box flex="1"></Box>
                      <Box flex="11">
                        <Card size="sm" borderRadius="xl">
                          <CardBody>
                            <Flex>
                              <Box flex="2">
                                <Flex flex="start">
                                  <Text as="b">.Net Introduction</Text>
                                </Flex>
                              </Box>
                              <Box flex="4">
                                <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    bg="#2D3748"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="white"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      H4SD
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <Text
                                      h="100%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      30mins
                                    </Text>
                                  </GridItem>
                                  <GridItem
                                    w="100%"
                                    h="10"
                                    borderColor="orange"
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderRadius="3xl"
                                  >
                                    <Text
                                      h="100%"
                                      color="orange"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="center"
                                    >
                                      Outline
                                    </Text>
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <BiUserVoice size="xl" />
                                  </GridItem>
                                  <GridItem w="100%" h="10">
                                    <FaRegFolderClosed size="xl" />
                                  </GridItem>
                                </Grid>
                              </Box>
                            </Flex>
                          </CardBody>
                        </Card>
                      </Box>
                    </Flex>
                  </Stack>
                  <Flex p="4">
                    <Button p="0" borderRadius="full">
                      <CiCirclePlus size="80%" />
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button
              bg="#474748"
              variant="solid"
              display="flex"
              mt="1%"
              fontSize="lg"
              color="white"
              m="1%"
            >
              <CiCirclePlus />
              Add unit
            </Button>
          </AccordionPanel>
        </AccordionItem>
        <Button
          bg="#474748"
          variant="solid"
          display="flex"
          mt="1%"
          fontSize="lg"
          color="white"
          m="1%"
        >
          <CiCirclePlus />
          Add day
        </Button>
      </Accordion>
    </>
  );
};
