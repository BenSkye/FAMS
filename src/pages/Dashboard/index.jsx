import { Outlet } from 'react-router-dom';
import { Flex, VStack } from '@chakra-ui/react';
import { AppLayout } from '@/core/layout/AppLayout';
import { AppSidebar } from '@/core/layout/AppSidebar';

export const Dashboard = () => {
  return (
    <AppLayout components={
      <Flex flex={1} flexDirection='row' columnGap={{ base: 0, lg: 3 }} >
        <VStack
          style={{
            height: 'calc(100vh - 160px)',
            overflowY: 'scroll',
            overflowX: 'hidden',
          }}
          display={{ base: 'none', md: 'block' }}
          className='scrollbar-hide'
          backgroundColor='#EDF2F7'
        >
          <AppSidebar />
        </VStack>

        <VStack
          flex={1}
          style={{
            height: 'calc(100vh - 160px)',
            overflowY: 'scroll',
            overflowX: 'hidden'
          }}
          className='scrollbar-hide'
        >
          <Outlet />
        </VStack>
      </Flex>
    } />
  );
}