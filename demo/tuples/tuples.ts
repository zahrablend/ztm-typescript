/* eslint-disable */
import { strict as assert } from "assert";

// Tuples provide a way to express an array with a fixed number of elements of
// different types, creating a data structure with multiple different types.
// They can be especially handy when dealing with scenarios such as
// representing coordinates, storing key-value pairs, or returning multiple
// values from a function. Since they are type-checked, TypeScript can ensure
// that the values in the tuple are correct at compile time.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

type Title = string;
type PublishYear = number;
// tuple
type Book = [Title, PublishYear];

const sample: Book = ["sample", 1980];
assert.equal(sample[0], "sample");
assert.equal(sample[1], 1980);

// return tuple from a function
function coord(): [number, number] {
    return [3, 5];
}

const coordinate = coord();
assert.equal(coordinate[0], 3);
assert.equal(coordinate[1], 5);

// destructure (split) tuple
const [x, y] = coord();
assert.equal(x, 3);
assert.equal(y, 5);

// put a tuple inside an array
const multi: [number, number][] = [
    coord(),
    [1, 1],
    [0, 0],
    [9, 9],
];