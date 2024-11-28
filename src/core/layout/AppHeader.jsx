import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { MPLanguageSwitcher } from '@/core/components/MPLanguageSwitcher.jsx';
import Logo from '@/assets/images/img-logo.png';
import FPT from '@/assets/images/img-fpt.png';

export const AppHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    
    Promise.all([
      localStorage.clear(),
      navigate('/login')
    ])
  }

  return (
    <>
      <Flex paddingX={3} height='80px' background='#2D3748' alignItems='center'>
        <Image src={Logo} height='60px' />
        <Spacer />

        <Flex columnGap={5} alignItems='center'>
          <Flex columnGap={3} padding={3} backgroundColor='#0B2136' borderRadius='30px' height='30px' flexDirection='row' alignItems='center'>
            <Image src={FPT} height='20px' />
            <Text fontSize='small' color='white'>uniGate</Text>
          </Flex>

          <MPLanguageSwitcher />

          <Flex alignItems='center' flexDirection='row' columnGap={3}>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

            <Flex
              flexDirection='column'
              justifyContent='flex-start'
            >
              <Text color='white' textAlign='left' fontSize='small' fontWeight='semibold'>Warior Tran</Text>
              <Link to='/login' onClick={logout}>
                <Text color='white' fontWeight='bold' textAlign='left' fontSize='small'>{t('logout')}</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}