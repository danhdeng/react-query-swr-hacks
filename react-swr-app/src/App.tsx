import React from 'react';
import {Container, Stack, Title} from '@mantine/core';
import Login from './components/login/Login';
import Stopwatch from './components/stopwatch/Stopwatch';
import Logger from './components/logger/Logger';

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
      </Stack>
    </Container>
  );
}

export default App;
