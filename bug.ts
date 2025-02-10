function combine(a: number, b: string): number {
  return a + b;
}

let result = combine(5, "10"); // Type error, but should be 15
console.log(result);