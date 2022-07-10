import React from 'react';
import {Container, Stack, Title} from '@mantine/core';
import Login from './components/login/Login';
import Stopwatch from './components/stopwatch/Stopwatch';

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login with useQuery from React-Query</Title>
        <Login />
        <Title>Stop watch Time from React-Query</Title>
        <Stopwatch />
      </Stack>
    </Container>
  );
}

export default App;
