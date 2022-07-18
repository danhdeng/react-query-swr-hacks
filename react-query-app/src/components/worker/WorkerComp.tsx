import { Button, Group, TextInput,Text } from '@mantine/core';
import React, { useState } from 'react'
import { useMutation } from 'react-query';

// eslint-disable-next-line import/no-webpack-loader-syntax
import createWorker from 'workerize-loader!./worker';
import * as Worker from './worker';


const numberWorker = createWorker<typeof Worker>();

export const multiplyNumbers = async (args:any) =>{
  return new Promise((resolve) => {
    numberWorker.addEventListener("message", (message:any) => {
      if (message.data.type === "result") {
        resolve(message.data.result);
      }
    });
    numberWorker.addTotals(args.a, args.b);
  });
}
export default function WorkerComp() {
  const { data: result, mutate } = useMutation(
    "Multiply",
    multiplyNumbers
  );

  const [valueA, setValueA] = useState("10");
  const [valueB, setValueB] = useState("20");

  return (
    <Group>
      <TextInput
        value={valueA}
        onChange={(evt) => setValueA(evt.target.value)}
      />
      <TextInput
        value={valueB}
        onChange={(evt) => setValueB(evt.target.value)}
      />
      <Button onClick={() => mutate({ a: +valueA, b: +valueB })}>
        Multiply
      </Button>
      
      <Text>{result as string}</Text>
       </Group>
  );
};
