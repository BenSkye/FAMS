import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';

export const ColorModeSwitcher = ({ initialColorMode, justifySelf, borderRadius }) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${text} mode`}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      initialColorMode={initialColorMode}
      justifySelf={justifySelf}
      borderRadius={borderRadius}
    />
  );
};
