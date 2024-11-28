
import { useState } from 'react';
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Select,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { FaEyeSlash, FaUser } from 'react-icons/fa';
import { chakra } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export const UserPermission = () => {
  const { i18n, t } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };
  
  const data1 = [
    {
      roleName: 'Super admin',
      sysllabus: 'Permission',
      permission: '',
      trainingProgram: '',
      class: '',
      learningMaterial: '',
      user: 'Full accecss',
    },
    {
      roleName: 'Class admin',
      sysllabus: '',
      trainingProgram: '',
      class: '',
      learningMaterial: '',
      user: 'Create',
    },
    {
      roleName: 'Trainer',
      sysllabus: '',
      trainingProgram: '',
      class: '',
      learningMaterial: '',
      user: 'View',
    },
  ];

  const StyledTd = chakra(Td);

  const options = [
    { label: 'Access denied', icon: <FaEyeSlash /> },
    { label: 'View', icon: <FaEyeSlash /> },
    { label: 'Modify', icon: <FaEyeSlash /> },
    { label: 'Create', icon: <FaEyeSlash /> },
    { label: 'Full access', icon: <FaEyeSlash /> },
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    data1.map(() => ({
      sysllabus: options[0],
      trainingProgram: options[0],
      class: options[0],
      learningMaterial: options[0],
    }))
  );

  const handleSysllabusChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index].sysllabus = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleTrainingProgramChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index].trainingProgram = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleClassChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index].class = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleLearningMaterialChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index].learningMaterial = value;
    setSelectedOptions(newSelectedOptions);
  };
  const CustomOption = chakra('option');
  return (
    <Box p='1rem' display='flex' flexDir={'column'} w='100%'>
      <Text
        m={2} textAlign='left' mt={3} fontWeight='semibold'
      >
        User Permission
      </Text>
      <TableContainer
        width='-webkit-fill-available'
        margin={3}
        borderRadius={15}
        backgroundColor='#FFF'
        mt={12}
      ><Text>
          {t('Admin')}
        </Text>
        <Table variant='simple' fontSize='small'>
          <Thead backgroundColor='#2D3748'>
            <Tr>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('roleName')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('sysllabus')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('trainingProgram')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('class')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('learningMaterial')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              >
                <Flex flexDirection='row' columnGap={2} alignItems='center'>
                  <Text>{t('user')}</Text>
                </Flex>
              </Th>
              <Th
                fontSize='small'
                fontWeight='normal'
                textTransform='none'
                color='#FFF'
              ></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data1.map((item, index) => (
              <Tr key={index}>
                <StyledTd fontWeight='800'>{item.roleName}</StyledTd>
                <Td>
                  <Select
                    value={selectedOptions[index].sysllabus.label}
                    onChange={(e) =>
                      handleSysllabusChange(index, e.target.value)
                    }
                  >
                    {options.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  <Select
                    value={selectedOptions[index].trainingProgram.label}
                    onChange={(e) =>
                      handleTrainingProgramChange(index, e.target.value)
                    }
                  >
                    {options.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  <Select
                    value={selectedOptions[index].class.label}
                    onChange={(e) => handleClassChange(index, e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </Select>
                </Td>
                <Td>
                  <Select
                    value={selectedOptions[index].class.label}
                    onChange={(e) => handleLearningMaterialChange(index, e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.label} value={option.label}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </Select>
                </Td>

                <Td>
                  <Flex alignItems='center'>
                    <Box as={FaUser} mr='2' />{' '}

                    {item.user}
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
