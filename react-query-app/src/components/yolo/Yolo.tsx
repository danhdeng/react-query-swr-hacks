// main.ts
// eslint-disable-next-line import/no-webpack-loader-syntax
import createFooWorker from "workerize-loader!./foo.worker";
import * as FooWorker from "./foo.worker";
import React from 'react'
import { useMutation } from "react-query";

// function Yolo() {
//    const result = fooWorker.foo(1, 2);
//   const result2 = fooWorker.bar(2, 3);

//   fooWorker.terminate(); // works as well
//   return(
//     <div>Result:{result} Result2: {result2}</div>
//   );
// } 

//export default  Yolo;

const fooWorker = createFooWorker<typeof FooWorker>();

const getResult=async () => {
    return new Promise((resolve, reject) => {
        const result = fooWorker.foo(1, 2);
        const result2 = fooWorker.bar(2, 3);
        console.log(`result is ${result} Result2: ${result2}`);
        resolve({"result": result, "result2": result2});

    });
}



export default function Yolo(){
    const {data} =useMutation("getData", getResult);
   console.log(`data is ${data}`);
    
  return (
    <><div>{JSON.stringify(data)}</div></>
    
  )
}
