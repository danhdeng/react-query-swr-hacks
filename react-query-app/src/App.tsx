import React from 'react';
import {Container, Stack, Title} from '@mantine/core';
import Login from './components/login/Login';
import Stopwatch from './components/stopwatch/Stopwatch';
import Logger from './components/logger/Logger';
import { GPS } from './components/gps/GPS';
import WebWorkerComp from './components/webworker/WebWorkerTry';
import WorkerComp from './components/worker/WorkerComp';
import Yolo from './components/yolo/Yolo';
import GlobalState from './components/globalState/GlobalState';
import MyState from './components/globalState/myState';

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
        <Title>Global State with useQuery from React-Query</Title>
        <GlobalState />
         <Title>My State with useQuery from React-Query</Title>
        <MyState />
      </Stack>
    </Container>
  );
}

export default App;
