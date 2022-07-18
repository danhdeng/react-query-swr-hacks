import { TextInput } from '@mantine/core'
import React from 'react'
import { useQuery } from 'react-query';
import client from './client';

const setData=(data:string) => {
  console.log("editor data",data);
  client.setQueryData("sharedData",data);
}
export const StateEditor = () => {
    const {data:value}=useQuery("sharedData", () =>"", {
        enabled:false,
    });
    console.log(`Editor shared Data: ${value}`);
  return (
    <TextInput 
        value={value}
        onChange={(evt) =>setData(evt.target.value)}
    />
  )
}
