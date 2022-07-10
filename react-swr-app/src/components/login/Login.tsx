import React from 'react'
import {Text} from '@mantine/core';
import swr from 'swr';
import { login } from './fetchUser';

function Login() {
    const {data: user} = swr("login", login);

  return (
    <Text>{JSON.stringify(user)}</Text>
  );
}

export default Login