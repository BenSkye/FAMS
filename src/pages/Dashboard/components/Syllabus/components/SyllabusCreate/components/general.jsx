import { useCallback } from 'react';
import {
  VStack,
  Text,
  Box,
  Flex,
  Select,
  Input,
  Textarea,
  Grid,
  FormLabel,
} from '@chakra-ui/react';
import { TextEditor } from '@/pages/Dashboard/components/Syllabus/components/SyllabusCreate/components/textEditor.jsx';

export const General = ({
  onLevelChange,
  onAttendeeNumberChange,
  onTechReqChange,
  onCourseObjChange,
}) => {
  const handleLevelInputChange = (event) => {
    const value = event.target.value;
    // Handle level input change here
    onLevelChange(value);
  };

  const handleAttendeeNumberInputChange = (event) => {
    const value = event.target.value;
    // Handle attendee number input change here
    onAttendeeNumberChange(value);
  };

  const handleTechReqInputChange = (event) => {
    const value = event.target.value;
    // Handle technical requirement input change here
    onTechReqChange(value);
  };

  // const handleCourseObjInputChange = (event) => {
  //   const value = event.target.value;
  //   // Handle course objectives input change here
  //   onCourseObjChange(value);
  // };

  const handleCourseObjChange = useCallback(
    (content) => {
      // Xử lý sự thay đổi của course objectives ở đây
      const wrapper = document.createElement('div');
      wrapper.innerHTML = content;
      const pTags = wrapper.getElementsByTagName('p');
      const pTagsContent = Array.from(pTags)
        .map((pTag) => pTag.innerHTML)
        .join('');

      onCourseObjChange(pTagsContent);
    },
    [onCourseObjChange]
  );

  return (
    <>
      <form>
        <VStack spacing={4} align='stretch'>
          <Box>
            <Grid
              templateColumns='max-content 1fr'
              columnGap='15px'
              alignItems='center'
            >
              <label htmlFor='level-select'>
                <Text fontSize='sm' as='b'>
                  Level
                </Text>
              </label>

              <Select
                id='level-select'
                ư
                boxShadow='md'
                placeholder='All levels'
                focusBorderColor='Black'
                onChange={handleLevelInputChange}
                w='30%'
              >
                <option value='option1'>1</option>
                <option value='option2'>2</option>
                <option value='option3'>3</option>
              </Select>
            </Grid>
          </Box>
          <Box>
            <Grid
              templateColumns='max-content 1fr'
              columnGap='15px'
              alignItems='center'
            >
              <label htmlFor='attendee-number-input'>
                <Text fontSize='sm' as='b'>
                  Attendee number
                </Text>
              </label>
              <Input
                id='attendee-number-input'
                type='number'
                size='sm'
                borderRadius='10'
                borderColor='silver.50'
                onChange={handleAttendeeNumberInputChange}
                w='30%'
              />
            </Grid>
          </Box>
          <Box>
            <Flex pb={2} alignItems='center'>
              <label htmlFor='tech-req-input'>
                <Text fontSize='sm' as='b'>
                  Technical Requirement(s)
                </Text>
              </label>
            </Flex>
            <Textarea
              id='tech-req-input'
              rows={6}
              borderRadius={10}
              focusBorderColor='Black'
              borderColor='silver.50'
              onChange={handleTechReqInputChange}
            />
          </Box>
          <Box>
            <Flex pb={2} alignItems='center'>
              <label htmlFor='course-obj-editor'>
                <Text fontSize='sm' as='b'>
                  Course Objects
                </Text>
              </label>
            </Flex>
            <Box width='100%'>
              <TextEditor
                id='course-obj-editor'
                onCourseObjChange={handleCourseObjChange}
              />
            </Box>
          </Box>
        </VStack>
      </form>
    </>
  );
};
