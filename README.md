# TypeScript Implicit Type Conversion Bug

This repository demonstrates a type error in TypeScript where implicit type conversion from string to number is not handled correctly when performing addition.

## Bug Description

The `combine` function attempts to add a number and a string. While JavaScript would implicitly convert the string to a number before performing the addition, TypeScript flags this as a type error. This is unexpected behavior and prevents the function from compiling, despite the result being correct at runtime.

## Reproduction Steps

1. Clone this repository.
2. Compile `bug.ts` using the TypeScript compiler.
3. Observe the type error.

## Solution

The issue can be fixed by explicitly converting the string to a number using `parseInt()` or `Number()` before the addition.  Refer to `bugSolution.ts` for a working example.

## Note
This report highlights the need for better handling of implicit type conversions in TypeScript, ensuring that the compiler's behavior aligns more closely with that of JavaScript in common scenarios.  This does not suggest removing TypeScript's type safety entirely but rather to make this specific behavior more consistent.