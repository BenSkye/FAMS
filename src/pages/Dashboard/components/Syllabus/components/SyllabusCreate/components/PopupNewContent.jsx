import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Flex,
  Box,
  Select,
  Switch,
} from "@chakra-ui/react";

export const NewContentPopup = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    outputStandard: "",
    trainingTime: "",
    deliveryType: "",
    method: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    outputStandard: false,
    trainingTime: false,
    deliveryType: false,
    method: false,
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    outputStandard: false,
    trainingTime: false,
    deliveryType: false,
    method: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [field]: true,
    }));
    validateField(field);
  };

  const validateField = (field) => {
    const value = formData[field];
    let isValid = true;

    switch (field) {
      case "email":
        isValid = value !== "";
        break;
      case "outputStandard":
        isValid = value !== "";
        break;
      case "trainingTime":
        isValid = value !== "";
        break;
      case "deliveryType":
        isValid = value !== "";
        break;
      case "method":
        isValid = true;
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !isValid,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    Object.keys(formData).forEach((field) => {
      validateField(field);
      if (formErrors[field]) {
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Thực hiện các xử lý lưu dữ liệu khi form hợp lệ
      console.log("Form is valid");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={formErrors.email}>
              <Flex w="100%">
                <Box flex="4">
                  <FormLabel>Email</FormLabel>
                </Box>
                <Box flex="7">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("email")}
                  />
                  {formErrors.email && touchedFields.email ? (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={formErrors.outputStandard}>
              <Flex w="100%">
                <Box flex="4">
                  <FormLabel>Output standard</FormLabel>
                </Box>
                <Box flex="7">
                  <Input
                    type="text"
                    name="outputStandard"
                    value={formData.outputStandard}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("outputStandard")}
                  />
                  {formErrors.outputStandard && touchedFields.outputStandard ? (
                    <FormErrorMessage>
                      Output standard is required.
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter the output standard.</FormHelperText>
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={formErrors.trainingTime}>
              <Flex w="100%">
                <Box flex="4">
                  <FormLabel>Training time</FormLabel>
                </Box>
                <Box flex="7">
                  <Input
                    type="number"
                    name="trainingTime"
                    value={formData.trainingTime}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("trainingTime")}
                  />
                  {formErrors.trainingTime && touchedFields.trainingTime ? (
                    <FormErrorMessage>
                      Training time is required.
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Enter the training time.</FormHelperText>
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={formErrors.deliveryType}>
              <Flex w="100%">
                <Box flex="4">
                  <FormLabel>Delivery type</FormLabel>
                </Box>
                <Box flex="7">
                  <Select
                    placeholder="Select option"
                    boxShadow="xl"
                    name="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("deliveryType")}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  {formErrors.deliveryType && touchedFields.deliveryType ? (
                    <FormErrorMessage>
                      Delivery type is required.
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Select the delivery type.</FormHelperText>
                  )}
                </Box>
              </Flex>
            </FormControl>
            <FormControl isInvalid={formErrors.method}>
              <Flex w="100%">
                <Box flex="4">
                  <FormLabel>Method</FormLabel>
                </Box>
                <Box flex="7">
                  <Switch
                    size="sm"
                    colorScheme="orange"
                    name="method"
                    checked={formData.method}
                    onChange={handleSwitchChange}
                    onBlur={() => handleBlur("method")}
                  />
                  {formErrors.method && touchedFields.method ? (
                    <FormErrorMessage>Method is required.</FormErrorMessage>
                  ) : (
                    <FormHelperText>Select the method.</FormHelperText>
                  )}
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
