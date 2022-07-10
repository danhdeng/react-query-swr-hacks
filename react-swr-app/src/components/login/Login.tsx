import React from 'react'
import {Text} from '@mantine/core';
import useSWR from 'swr';
import { login } from './fetchUser';

function Login() {
    const {data: user} = useSWR("login", login);

  return (
    <Text>{JSON.stringify(user)}</Text>
  );
}

export default Login