/* eslint-disable */

// The `for` loop consists of three expressions separated by semicolons,
// followed by curly braces where the loop body is placed.
//
// for (A;B;C) { }
//
// A: This is evaluated one time when the `for` loop is first encountered.
//    It is typically used to create a loop counter variable.
// B: A boolean expression which is checked _before_ the loop executes
//    the next iteration. This is used to determine whether the loop
//    should continue.
// C: An expression that is evaluated _after_ the loop body executes, on each
//    iteration. It is normally used to increment the loop counter created
//    in (A).
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for (let i = 1; i <= 5; i++) {
    console.log(`${i}`);
}

for (let i = 5; i > 0; i--) {
    console.log(`${i}`);
}

for (let i = 1; i <= 10000; i++) {
    console.log(`${i}`);
    if (i === 3) {
        break;
    }
}

// Output:
//
// 1 - element
// 2 - element
// 3 element was skipped
// 4 - element
// 5 - element
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      console.log(`${i} element was skipped`);
        continue;
    }
    console.log(`${i} - element`);
}

const letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
// All except the last one
const caps = ["a", "b", "c"];
for (let i = 0; i < caps.length - 1; i++) {
    console.log(caps[i]);
}

