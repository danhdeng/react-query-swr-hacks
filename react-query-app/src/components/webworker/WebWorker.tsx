// // import { Button, Group, TextInput, Text } from '@mantine/core';
// // import React, { useState } from 'react'
// // import { useMutation } from 'react-query';
// // import { addNumbers } from './addNumbers';

// // const WebWorker=() =>{
// //  const { data: value, mutate } = useMutation(
// //     "addNumbers",
// //     addNumbers
// //   );

// //   const [valueA, setValueA] = useState("10");
// //   const [valueB, setValueB] = useState("20");

// //   return (
// //     <Group>
// //       <TextInput
// //         value={valueA}
// //         onChange={(evt) => setValueA(evt.target.value)}
// //       />
// //       <TextInput
// //         value={valueB}
// //         onChange={(evt) => setValueB(evt.target.value)}
// //       />
// //       <Button onClick={() => mutate({ a: +valueA, b: +valueB })}>
// //         Multiply
// //       </Button>
// //       <Text></Text>
// //     </Group>
// //   );
// // }

// // export default WebWorker

// import { useState } from "react";
// import { Group, TextInput, Button, Text } from "@mantine/core";
// import { useMutation } from "react-query";

// import worker from "workerize-loader!./worker"; // eslint-disable-line import/no-webpack-loader-syntax
// const workerInstance = worker();

// const addNumbers = async (args:any) =>
//   new Promise((resolve) => {
//     workerInstance.addEventListener("message", (message:any) => {
//       if (message.data.type === "result") {
//         resolve(message.data.result);
//       }
//     });

//     workerInstance.addNumbers(args.a, args.b);
//   });

// const WebWorker = () => {
//   const { data: value, mutate } = useMutation(
//     "multiplyNumbers",
//     multiplyNumbers
//   );

//   const [valueA, setValueA] = useState("10");
//   const [valueB, setValueB] = useState("20");

//   return (
//     <Group>
//       <TextInput
//         value={valueA}
//         onChange={(evt) => setValueA(evt.target.value)}
//       />
//       <TextInput
//         value={valueB}
//         onChange={(evt) => setValueB(evt.target.value)}
//       />
//       <Button onClick={() => mutate({ a: +valueA, b: +valueB })}>
//         Multiply
//       </Button>
//       <Text>{value}</Text>
//     </Group>
//   );
// };

// export default WebWorker;
import React from 'react'

function WebWorker() {
  return (
    <div>WebWorker</div>
  )
}

export default WebWorker