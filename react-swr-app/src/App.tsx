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
        <Title>Login with SWR</Title>
        <Login />
        <Title>Stop watch timer with SWR</Title>
        <Stopwatch />
        <Title>Logger with SWR</Title>
        <Logger />
        <Title>GPS Locator with SWR</Title>
        <GPS />
      </Stack>
    </Container>
  );
}

export default App;
