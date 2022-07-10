import React from 'react';
import {Container, Stack, Title} from '@mantine/core';
import Login from './components/login/Login';
import Stopwatch from './components/stopwatch/Stopwatch';
import Logger from './components/logger/Logger';
import { GPS } from './components/gps/GPS';

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login with useQuery from React-Query</Title>
        <Login />
        <Title>Stop watch Time with useQuery from React-Query</Title>
        <Stopwatch />
        <Title>Logger with useQuery from React-Query</Title>
        <Logger />
        <Title>GPS locator with useQuery from React-Query</Title>
        <GPS />
      </Stack>
    </Container>
  );
}

export default App;
