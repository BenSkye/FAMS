import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CiWarning } from "react-icons/ci";
import { HiOutlineDuplicate } from "react-icons/hi";
import { ImPencil } from "react-icons/im";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";

const features = [
  { name: "Edit class", ic: <IoIosAddCircleOutline /> },
  { name: "Duplicate class", ic: <ImPencil /> },
  { name: "Delete class", ic: <HiOutlineDuplicate /> },
];

function FeatureButton({ feature, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  return (
    <>
      {data && data.classCode ? (
        <>
          <Button
            color="#2C5282"
            background="none"
            display="flex"
            justifyContent="start"
            alignItems="center"
            p="5px"
            onClick={onOpen}
            gap="10px"
            w="100%"
          >
            {feature.ic}
            <Text fontSize="1rem" ml="0.2rem">
              {feature.name}
            </Text>
          </Button>

          {feature.name === "Delete class" && (
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    <Flex alignItems={"center"} gap={4}>
                      <CiWarning color="red" />
                      Delete class
                    </Flex>
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Do you want to delete class "
                    {data.classCode ? data.classCode : ""}"?
                    <br />
                    This class cannot be recovered after deletion.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="red" onClick={onClose} ml={3}>
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          )}
          {feature.name === "Edit class" && (
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Delete Customer
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="red" onClick={onClose} ml={3}>
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          )}
          {feature.name === "Duplicate class" && (
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              isCentered
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Duplicate class
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="green" onClick={onClose} ml={3}>
                      Duplicate
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default function ActionButton({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Popover
        size="md"
        isOpen={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        placement="bottom-end"
      >
        <PopoverTrigger>
          <Button variant="outlined">
            <IoEllipsisHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            {features.map((feature, index) => (
              <FeatureButton
                key={`feature-${index}`}
                data={data}
                feature={feature}
              />
            ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
