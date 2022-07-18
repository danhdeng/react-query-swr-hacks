// // export function loop(time:any){
// //   const start = Date.now();
// //   let count = 0;
// //   while (Date.now() - start < time) count++;
// //   return count;
// // }

// // eslint-disable-next-line no-restricted-globals
// // const ctx: Worker = self as any;
// // ctx.addEventListener('message', event => {
// //   console.log(event);
// //   setTimeout(() => ctx.postMessage({
// //     foo: 'boo'
// //   }), 5000);
// // });

// // eslint-disable-next-line no-restricted-globals
// const ctx: Worker = self as any;

// // Post data to parent thread
// ctx.postMessage({ foo: "foo" });

// // Respond to message from parent thread
// //ctx.addEventListener("message", (event) => console.log(event));
// export default null as any;

export const addTotals = (a:number, b:number)=> {
    postMessage({ type: "result", result: a * b });
};


// function addTotals(a:number, b:number){
//   postMessage({ type: "result", result: a + b });
// }

// export default addTotals;