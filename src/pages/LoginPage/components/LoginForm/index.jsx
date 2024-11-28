import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, Stack } from '@chakra-ui/react';
import { validateEmail, validatePassword } from '@/utils/validate.js';
import { MPLanguageSwitcher } from '@/core/components/MPLanguageSwitcher.jsx';
import { signIn } from '@/core/services/auth.js';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailErrosList = validateEmail(email);
    setErrors({
      password: errors.password,
      email: emailErrosList
    });

    let passwordErrosList = validatePassword(password);
    setErrors({
      password: passwordErrosList,
      email: errors.email
    });

    if (errors.email.length === 0 && errors.password.length === 0) {
      signIn(email, password)
        .then((res) => {
          const data = res.data;
          localStorage.setItem('credentials', JSON.stringify(data));
        })
        .then(() => {
          navigate('/dashboard', { replace: true });
        })
    }
  };

  React.useEffect(() => {
    if (email !== null) {
      let emailErrosList = validateEmail(email);
      setErrors({
        password: errors.password,
        email: emailErrosList
      });
    }

    if (password !== null) {
      let passwordErrosList = validatePassword(password);
      setErrors({
        password: passwordErrosList,
        email: errors.email
      });
    }
  }, [email, password]);

  return (
    <Box
      textAlign="center"
      p={4} width='100%'
      maxWidth='360px'
      backgroundColor='#FFF'
      borderRadius='12px'
    >
      <Heading fontSize='20px' fontWeight='semibold' textAlign="center" mb={4}>
        {t('login')}
        <Stack top={0} right={0}>
          <MPLanguageSwitcher />
        </Stack>
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.email.length !== 0}>
          <FormLabel fontSize='14px' fontWeight='semibold' htmlFor="email">Email</FormLabel>

          <Input
            id="email"
            type="email"
            value={email !== null ? email : ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('enter_your_email')}
          />

          {
            errors.email.length !== 0 &&
            errors.email.map((e, index) => (
              <Text key={index} textAlign='left' fontSize='small' color="red">{e}</Text>
            ))
          }
        </FormControl>

        <FormControl mt={4} isInvalid={errors.password.length !== 0}>
          <FormLabel fontSize='14px' fontWeight='semibold' htmlFor="password">{t('password')}</FormLabel>
          <Input
            id="password"
            type="password"
            value={password !== null ? password : ''}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('enter_your_password')}
          />

          {errors.password.length !== 0 &&
            errors.password.map((e, index) => (
              <Text key={index} textAlign='left' fontSize='small' color="red">{e}</Text>
            ))
          }
        </FormControl>

        <Button width='100%' type="submit" mt={4} colorScheme="blue" variant="solid">
          Login
        </Button>

        <Link to='/login/password-reset'>
          <Text marginTop={3} fontSize='small' fontWeight='normal'>{t('password_forgot')}</Text>
        </Link>
      </form>
    </Box>
  );
}
