/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

const myName = "Jay";
const amount: number = 2 + 2;
const hello: string = `Hello ${myName}`;
const powerLevel: bigint = 9000n + 1n;
const yes: boolean = true;

// type annotations of function parameters and type of return value
function sum(lhs: number, rhs: number): number {
    const total = lhs + rhs;
    return total;
}

const two = sum(2, 2);
console.log(two);
