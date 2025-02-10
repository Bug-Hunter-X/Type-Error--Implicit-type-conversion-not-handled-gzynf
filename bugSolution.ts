function combine(a: number, b: string): number {
  return a + parseInt(b);
}

let result = combine(5, "10"); // No type error, result is 15
console.log(result); 