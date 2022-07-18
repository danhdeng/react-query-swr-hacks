import { Text } from '@mantine/core'
import React from 'react'
import { useQuery } from 'react-query';

export const StateViewer = () => {
    const {data:value}=useQuery("sharedData", () =>"", {
        enabled:false,
    });
    console.log(`Viewer shared Data: ${value}`);

  return (
    <Text>{value}</Text>
  )
}
