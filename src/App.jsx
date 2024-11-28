import React from 'react';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';
import AppRouting from '@/config/router/AppRouting';
import { mode } from '@chakra-ui/theme-tools';
import '@/config/theme/css/default.css';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#F5F5F5')(props),
      }
    })
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent='center' alignItems='center' width='100%' height='100vh' overflow='hidden' textAlign="center" fontSize="xl">
        <AppRouting />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
