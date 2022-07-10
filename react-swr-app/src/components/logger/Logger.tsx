import { Stack, Title, Text } from '@mantine/core';
import React from 'react'
import useSWR from 'swr';
import { subscribeToLog } from './subscribeToLog';

  const loggerListener=subscribeToLog();

function Logger() {
  // const loggerRef=useRef(subscribeToLog());
  // const {data: logStorage}=useQuery("logger", loggerRef.current,{
  //   refetchInterval:500
  // })
  const {data:logStorage}=useSWR("logger", loggerListener, {
    refreshInterval:1000,
    dedupingInterval:1000
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