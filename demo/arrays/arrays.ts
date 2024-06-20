/* eslint-disable */
import { strict as assert } from "assert";

// Arrays offer a way to store and manipulate collections of values of the same
// type. They are defined using square brackets and can be populated with
// values at initialization, or later using various methods such as push(),
// splice(), and concat(). Arrays can be of a fixed length or dynamically
// resized as needed, and they can be used with various array methods to
// perform common operations like sorting, filtering, and mapping.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const numbers: number[] = [1, 2, 3];
let letters: string[] = ["a", "b", "c"];
assert.deepEqual(letters, ["a", "b", "c"]);
const b = letters[1];
assert.equal(b, "b");

letters[1] = "z";

// try to avoid mixing types inside the array
const mixed = [2, "word"];

// multidimentional arrays
const names = [
    ["Jayson", "L"],
    ["Alice", "B"],
];

const jayson = [0][0];
const l = [0][1];


const nums: number[] = [];
// PUSH adds (appends) to the end of array
nums.push(10);
nums.push(20);
nums.push(30);
assert.deepEqual(nums, [10, 20, 30]);

// POP removes last element of the array
nums.pop();
assert.deepEqual(nums, [10, 20]);

// SPLICE removes a selected element or range
// (first: first element, second: total number of elements to remove)
nums.splice(0, 1);
assert.deepEqual(nums, [20]);


