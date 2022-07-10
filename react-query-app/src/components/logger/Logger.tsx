import { Stack, Title, Text } from '@mantine/core';
import React, { useRef } from 'react'
import { useQuery } from 'react-query';
import { subscribeToLog } from './subscribeToLog';

  const loggerListener=subscribeToLog();

function Logger() {
  // const loggerRef=useRef(subscribeToLog());
  // const {data: logStorage}=useQuery("logger", loggerRef.current,{
  //   refetchInterval:500
  // })
  const {data:logStorage}=useQuery("logger", loggerListener, {
    refetchInterval:500
  });
  return (
    <Stack>
      <Title>Logger tracking:</Title>
      {logStorage?.map((logInfo:any, index:number) =>(
        <Text key={index}>{logInfo}</Text>
      ))

      }
    </Stack>

  )
}

export default Logger