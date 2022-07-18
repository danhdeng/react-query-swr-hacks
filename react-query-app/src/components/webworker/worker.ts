// export const multiplyNumbers = (a: number, b: number) => {
//   postMessage({ type: "result", result: a * b });
// };


export function loop(time:number){
  const start = Date.now();
  let count = 0;
  while (Date.now() - start < time) count++;
  return count;
}