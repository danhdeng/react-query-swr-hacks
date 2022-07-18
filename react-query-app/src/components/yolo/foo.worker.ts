// foo.worker.ts
export function foo(a: number, b: number) {
  // here is where you expensive work happens
  return a + b;
}

export function bar(a: number, b: number) {
  // here is where you expensive work happens
  return a * b;
}