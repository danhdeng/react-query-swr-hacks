// import { Stack, TextInput,Text } from '@mantine/core'
// import React from 'react'
// import { useQuery } from 'react-query';
// import client from './client';
// import { StateEditor } from './StateEditor'
// import { StateViewer } from './StateViewer'

// function GlobalState() {
//   return (
//     <Stack>
//       <StateEditor />
//       <StateViewer />
//     </Stack>
//   )
// }

// export default GlobalState

import { Text, TextInput, Stack } from "@mantine/core";
import { useState } from "react";
import { useQuery } from "react-query";

import client from "./client";

const GLOBAL_STATE_KEY="sharedText";

function useRQSGlobalState(key:string, initialData:string): [string, (value: string) => void]{ 
   console.log(`the key is ${key} ${initialData}`);
  const value=useQuery(key, () => initialData, {
    enabled: false,
    initialData,
  }).data as string;
  const setValue=(inputVal:string) => client.setQueryData(key, inputVal);
  return [value, setValue];
}

const setValue = (inputVal:string) => client.setQueryData(GLOBAL_STATE_KEY, inputVal);

const StateEditor = () => {
   const {data:value}=useQuery(GLOBAL_STATE_KEY,() =>"", {enabled:false,});
    return (
    <TextInput value={value} onChange={(evt) => setValue(evt.target.value)} />
  );
  };

const StateViewer = () => {
  const {data:value}=useQuery(GLOBAL_STATE_KEY,() =>"");
  console.log(`the shared data in viewer is ${value}`);
  return <Text>StateView Data: {value}</Text>;
};

const GlobalState = () => {
  return (
    <Stack>
      <StateEditor />
      <StateViewer />
    </Stack>
  );
};

export default GlobalState;