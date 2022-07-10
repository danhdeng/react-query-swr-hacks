import React from 'react'
import {Text} from '@mantine/core';
import {useQuery} from 'react-query';
import { login } from './fetchUser';

function Login() {
    const {data: user} = useQuery("login", login);

  return (
    <Text>{JSON.stringify(user)}</Text>
  );
}

export default Login