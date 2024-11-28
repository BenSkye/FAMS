import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export const Error = () => {
  return (
    <Flex flexDirection='column' rowGap={3}>
      <Text fontSize='x-large' fontWeight='semibold'>😟 Page Not Found</Text>
      <Link to='/dashboard'>
        <Text fontSize='small'>Click here to go to dashboard!</Text>
      </Link>
    </Flex>
  );
}