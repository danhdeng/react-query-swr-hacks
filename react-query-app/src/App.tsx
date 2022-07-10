import React from 'react';
import {Container, Stack, Title} from '@mantine/core';
import Login from './components/login/Login';

function App() {
  return (
    <Container>
      <Stack>
        <Title>Login with useQuery from react-query</Title>
        <Login />
      </Stack>
    </Container>
  );
}

export default App;
