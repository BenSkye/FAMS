import React from "react";
import { useState } from "react";
import {
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
  VStack,
  Spacer,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { General } from "@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/general.jsx";
import { Outline } from "@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/outline.jsx";
import { PieChart } from "@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/chartSyllabus.jsx";

export const SyllabusCreate = () => {
  const [sliderValue, setSliderValue] = useState(25);
  const [tabValue, setTabValue] = useState("General");
  const [syllabusName, setSyllabusName] = useState(0);
  const [version, setVersion] = useState("");
  const [level, setLevel] = useState(1);
  const [attendeeNumber, setAttendeeNumber] = useState("");
  const [techReq, setTechReq] = useState("");
  const [courseObj, setCourseObj] = useState("");

  const handleSyllabusNameChange = (event) => {
    setSyllabusName(event.target.value);
  };

  const handleVersionChange = (event) => {
    setVersion(event.target.value);
  };

  const handleLevelChange = (value) => {
    setLevel(value);
  };

  const handleAttendeeNumberChange = (value) => {
    setAttendeeNumber(value);
  };

  const handleTechReqChange = (value) => {
    setTechReq(value);
  };

  const handleCourseObjChange = (value) => {
    setCourseObj(value);
  };

  const handleTabChange = (value) => {
    setTabValue(value);
    // Cập nhật giá trị Slider dựa trên giá trị của Tab
    if (value === "General") {
      setSliderValue(25);
    } else if (value === "Outline") {
      setSliderValue(50);
    } else if (value === "Training material") {
      setSliderValue(75);
    }
  };
  // console.log(level, attendeeNumber, techReq, courseObj);

  const isInputsFilled =
    syllabusName !== "" &&
    version !== "" &&
    level !== "" &&
    attendeeNumber !== "" &&
    techReq !== "" &&
    courseObj !== "";

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "x-small",
  };

  const tabStyles = {
    margin: "0.1%",
    backgroundColor: "silver",
    borderColor: "0.5px #363434",
    color: "white",
    borderTopRadius: "3xl",
    _hover: { opacity: "0.7", backgroundColor: "#2D3748" },
    _selected: {
      backgroundColor: "#2D3748",
      _focus: { boxShadow: "none" },
    },
  };

  return (
    <>
      <VStack spacing={4} align="stretch" height="100%" width="100%">
        <Box>
          <Flex justifyContent="flex-start" alignItems="center">
            <Box flex="1/5">
              <Text m={2} textAlign="left" mt={3} fontWeight="semibold">
                Syllabus
              </Text>
            </Box>
            <Box p={4} pt={6} width={{ base: "100%", md: "xs" }}>
              <Slider
                boxShadow="md"
                aria-label="slider-ex-6"
                opacity={0.9}
                borderRadius={6}
                onChange={(val) => setSliderValue(val)}
                value={sliderValue}
                display="flex"
                justifyContent="flex-start"
              >
                <SliderMark value={25} {...labelStyles}>
                  General
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                  Outline
                </SliderMark>
                <SliderMark value={75} {...labelStyles}>
                  Other
                </SliderMark>
                <SliderMark value={100} {...labelStyles} fontSize="x-small">
                  Done
                </SliderMark>
                <SliderTrack bg="silver">
                  <SliderFilledTrack bg="orange" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </Flex>
        </Box>
        <Divider borderColor="black" w="100%" />
        <Box>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box flex={{ base: "1", md: "7/10" }} boxShadow="lg" mb={10}>
              <Flex>
                <Box p="4">
                  <HStack spacing="24px">
                    <Box>
                      <Text fontSize="sm" as="b">
                        Syllabus name*
                      </Text>
                    </Box>
                    <Box>
                      <Input
                        borderRadius={10}
                        size="sm"
                        borderColor="silver.50"
                        onInput={handleSyllabusNameChange}
                      />
                    </Box>
                  </HStack>
                </Box>
                <Spacer />
                <Box p="4">
                  <HStack spacing="15px">
                    <Box>
                      <Text fontSize="sm" as="b">
                        Code
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm">NPL</Text>
                    </Box>
                  </HStack>
                </Box>
                <Spacer />
                <Box p="4">
                  <HStack spacing="15px">
                    <Box>
                      <Text fontSize="sm" as="b">
                        Version
                      </Text>
                    </Box>
                    <Box>
                      <Input
                        borderRadius={10}
                        size="sm"
                        borderColor="silver.50"
                        width="12"
                        onInput={handleVersionChange}
                      />
                    </Box>
                  </HStack>
                </Box>
              </Flex>

              <Tabs isManual variant="enclosed">
                <TabList>
                  <Tab
                    {...tabStyles}
                    w="17%"
                    onClick={() => handleTabChange("General")}
                  >
                    General
                  </Tab>
                  <Tab
                    {...tabStyles}
                    w="17%"
                    onClick={() => handleTabChange("Outline")}
                  >
                    Outline
                  </Tab>
                  <Tab
                    {...tabStyles}
                    w="17%"
                    onClick={() => handleTabChange("Training material")}
                  >
                    Traning material
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <General
                      onLevelChange={handleLevelChange}
                      onAttendeeNumberChange={handleAttendeeNumberChange}
                      onTechReqChange={handleTechReqChange}
                      onCourseObjChange={handleCourseObjChange}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Outline />
                  </TabPanel>
                  <TabPanel>
                    <p>Traning material!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Box pr={3}>
                <HStack justifyContent="end" mb="10">
                  <Button textDecoration="underline" color="red" bg="none">
                    Cancel
                  </Button>
                  <Button
                    color="white"
                    bg="#45474B"
                    isDisabled={!isInputsFilled}
                  >
                    Save as draft
                  </Button>
                  <Button
                    color="white"
                    bg="#1F2544"
                    isDisabled={!isInputsFilled}
                  >
                    Next
                  </Button>
                </HStack>
              </Box>
            </Box>

            <Box ml="3" flex={3 / 10} w={{ base: "95%", md: "80%" }} m="8px">
              <PieChart />
            </Box>
          </Flex>
        </Box>
      </VStack>
    </>
  );
};
